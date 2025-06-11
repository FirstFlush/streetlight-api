import { Injectable } from '@nestjs/common';
import { Pdf2JsonOutput, PdfPage } from './pdf.types';

const PDFParser = require('pdf2json')

@Injectable()
export class PdfScraperService {

    async extractStructure(buffer: Buffer): Promise<Pdf2JsonOutput> {
        const parser = new PDFParser();

        return new Promise((resolve, reject) => {
            parser.on('pdfParser_dataReady', pdf => {
                resolve(pdf); // raw structured data
            });

            parser.on('pdfParser_dataError', err => {
                reject(err);
            });

            parser.parseBuffer(buffer);
        });
    }

    extractTableMatrixFromPdfPage(page: PdfPage): string[][] {
        const rowsY = [...new Set(page.HLines.map(l => l.y))].sort((a, b) => a - b);
        const colsX = [...new Set(page.VLines.map(l => l.x))].sort((a, b) => a - b);

        const numRows = rowsY.length - 1;
        const numCols = colsX.length - 1;

        const table: string[][] = Array.from({ length: numRows }, () =>
            Array.from({ length: numCols }, () => '')
        );

        for (const t of page.Texts) {
            const text = decodeURIComponent(t.R[0].T);
            const { x, y } = t;

            const rowIdx = rowsY.findIndex((rY, i) => y >= rY && y < rowsY[i + 1]);
            const colIdx = colsX.findIndex((cX, i) => x >= cX && x < colsX[i + 1]);

            if (rowIdx >= 0 && colIdx >= 0 && rowIdx < numRows && colIdx < numCols) {
                if (table[rowIdx][colIdx]) {
                    table[rowIdx][colIdx] += ' ' + text;
                } else {
                    table[rowIdx][colIdx] = text;
                }
            }
        }

        return this.mergeFragmentedRows(table)
    }

    private mergeFragmentedRows(rows: string[][]): string[][] {
    const merged: string[][] = [];
    let current: string[] = [];

    const isStartOfNewRow = (row: string[]) => {
        return row.some(cell =>
        /^(Vancouver|Abbotsford|Burnaby|Chilliwack|Surrey|New Westminster|Richmond|Delta|Mission|North Vancouver)$/i.test(cell)
        ) || row.some(cell => /^(All|Male|Female)$/i.test(cell));
    };

    for (const row of rows) {
        const nonEmpty = row.some(cell => cell.trim() !== '');
        if (!nonEmpty) continue;

        if (isStartOfNewRow(row)) {
        if (current.length) merged.push(current);
        current = [...row];
        } else {
        // Merge this row into current row
        row.forEach((cell, idx) => {
            if (!cell.trim()) return;
            if (!current[idx]) current[idx] = cell;
            else current[idx] += ' ' + cell;
        });
        }
    }

    if (current.length) merged.push(current);
    return merged;
    }



}
