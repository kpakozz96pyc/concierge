
import { RuntimeFieldDataType } from "../database-metadata/enums/runtime-field-data-type";
import { LookupDisplayMode } from "./enums/lookup-display-mode";
import { AvailableValue } from "./available-value";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AvailableLookup {

    static $name = "AvailableLookup";
    static typeNameHint = "ALF.Shared.Dto.Models.AvailableValue.AvailableLookup, ALF.Shared.Dto"

    lookupId: string;
    searchContext?: string;
    dataType: RuntimeFieldDataType;
    values: AvailableValue[] = [];
    displayMode: LookupDisplayMode;

    constructor(data?: Partial<AvailableLookup>) {
        Object.assign(this, data);
    }
}
