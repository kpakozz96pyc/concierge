
import { FieldMappingPair } from "./field-mapping-pair";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type FieldMappingSetId = string;

export class FieldMappingSet {

    static $name = "FieldMappingSet";
    static typeNameHint = "ALF.Shared.Dto.Models.Import.FieldMappingSet, ALF.Shared.Dto"

    id: FieldMappingSetId;
    tableNumber: number;
    fieldNumber: number;
    reference?: string;
    inputCompanyId?: string;
    fieldMappingPairs: FieldMappingPair[] = [];

    constructor(data?: Partial<FieldMappingSet>) {
        Object.assign(this, data);
    }
}
