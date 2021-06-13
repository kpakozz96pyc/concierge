
import { ImportSourceType } from "./enums/import-source-type";
import { ImportSourceExternalSourceType } from "./enums/import-source-external-source-type";
import { ImportSourceMetadata } from "./import-source-metadata";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ImportSourceId = string;

export class ImportSource {

    static $name = "ImportSource";
    static typeNameHint = "ALF.Shared.Dto.Models.Import.ImportSource, ALF.Shared.Dto"

    id: ImportSourceId;
    sequenceNumber: number;
    binaryItemId: string;
    received: Date;
    receivedBy: string;
    type: ImportSourceType;
    metadata?: ImportSourceMetadata;
    comment?: string;
    externalSourceType: ImportSourceExternalSourceType;
    externalSourceId?: string;
    title?: string;

    constructor(data?: Partial<ImportSource>) {
        Object.assign(this, data);
    }
}
