

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type MaintainableRuntimeTableMetadataId = string;

export class MaintainableRuntimeTableMetadata {

    static $name = "MaintainableRuntimeTableMetadata";
    static typeNameHint = "ALF.Shared.Dto.Models.DatabaseMetadata.MaintainableRuntimeTableMetadata, ALF.Shared.Dto"

    id: MaintainableRuntimeTableMetadataId;
    companyId?: string;
    table: number;
    tableDisplayName?: string;
    hasRuntimeTableMetadata: boolean;
    tableName?: string;
    basicData: boolean;

    constructor(data?: Partial<MaintainableRuntimeTableMetadata>) {
        Object.assign(this, data);
    }
}
