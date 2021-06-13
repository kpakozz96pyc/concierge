
import { ParameterType } from "./enums/parameter-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type DtoFieldMetadataId = string;

export class DtoFieldMetadata {

    static $name = "DtoFieldMetadata";
    static typeNameHint = "ALF.Shared.Dto.Models.DatabaseMetadata.DtoFieldMetadata, ALF.Shared.Dto"

    id: DtoFieldMetadataId;
    runtimeFieldMetadataId?: string;
    propertyName: string;
    tableNumber: number;
    fieldNumber: number;
    parameterType: ParameterType;
    totalLength?: number;
    integerPlaces?: number;
    decimalPlaces?: number;
    displayName?: string;
    lookupId?: string;
    isTenantLevelLookup: boolean;

    constructor(data?: Partial<DtoFieldMetadata>) {
        Object.assign(this, data);
    }
}
