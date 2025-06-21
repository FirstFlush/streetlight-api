import { Pipeline } from "@/types/spiders"


export class BC211PdfPipeline<T> implements Pipeline<T> {

    constructor() {console.log("hey in pipeline")}


    validate(data: unknown): T {
    return data as T;
    }

    async save(data: T): Promise<void> {
    console.log('Saving', data);
    }


}