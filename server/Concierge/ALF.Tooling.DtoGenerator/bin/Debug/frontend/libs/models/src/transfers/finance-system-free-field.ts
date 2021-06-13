
import { RuntimeFieldDataType } from "../database-metadata/enums/runtime-field-data-type";
import { FinanceSystemCounterType } from "./enums/finance-system-counter-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FinanceSystemFreeField {

    static $name = "FinanceSystemFreeField";
    static typeNameHint = "ALF.Shared.Dto.Models.Transfers.FinanceSystemFreeField, ALF.Shared.Dto"

    sortOrder: number;
    labelText?: string;
    dataType: RuntimeFieldDataType;
    fieldLength: number;
    value?: string;
    disabledInputField: boolean;
    inUse: boolean;
    typeOfCounter: FinanceSystemCounterType;
    numberOfDecimals: number;

    constructor(data?: Partial<FinanceSystemFreeField>) {
        Object.assign(this, data);
    }
}
