
import { FileImportSourceMetadata } from "@alf/models/import/file-import-source-metadata";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CustomerOriginImportSourceMetadata extends FileImportSourceMetadata {

    static $name = "CustomerOriginImportSourceMetadata";
    static typeNameHint = "ALF.Shared.Dto.Models.Import.CustomerOriginImportSourceMetadata, ALF.Shared.Dto"

    createdByCustomer: boolean;

    constructor(data?: Partial<CustomerOriginImportSourceMetadata>) {
        super(data);
        Object.assign(this, data);
        this.$type = CustomerOriginImportSourceMetadata.typeNameHint;
    }
}
