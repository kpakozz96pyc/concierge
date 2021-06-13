
import { ImportSourceMetadata } from "@alf/models/import/import-source-metadata";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RetroPayImportSourceMetadata extends ImportSourceMetadata {

    static $name = "RetroPayImportSourceMetadata";
    static typeNameHint = "ALF.Shared.Dto.Models.Import.RetroPayImportSourceMetadata, ALF.Shared.Dto"

    retroPayId: string;
    processedAt: Date;
    processedByUsername?: string;
    processedByUserId?: string;

    constructor(data?: Partial<RetroPayImportSourceMetadata>) {
        super(data);
        Object.assign(this, data);
        this.$type = RetroPayImportSourceMetadata.typeNameHint;
    }
}
