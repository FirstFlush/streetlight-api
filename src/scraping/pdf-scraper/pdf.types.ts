interface PdfTextChunk {
  x: number;
  y: number;
  w: number;
  sw: number;
  A: string;
  R: { T: string }[];
}

export interface PdfPage {
  Texts: PdfTextChunk[];
  HLines: { y: number }[];
  VLines: { x: number }[];
}


export interface Pdf2JsonOutput {
    Pages: PdfPage[];
}



