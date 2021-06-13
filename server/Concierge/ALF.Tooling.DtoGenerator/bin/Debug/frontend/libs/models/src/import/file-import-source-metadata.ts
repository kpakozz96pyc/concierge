
import { FileFormat } from "../files/enums/file-format";
import { ImportSourceMetadata } from "@alf/models/import/import-source-metadata";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FileImportSourceMetadata extends ImportSourceMetadata {

    static $name = "FileImportSourceMetadata";
    static typeNameHint = "ALF.Shared.Dto.Models.Import.FileImportSourceMetadata, ALF.Shared.Dto"

    filename?: string;
    created: Date;
    fileFormat: FileFormat;

    constructor(data?: Partial<FileImportSourceMetadata>) {
        super(data);
        Object.assign(this, data);
        this.$type = FileImportSourceMetadata.typeNameHint;
    }
}
