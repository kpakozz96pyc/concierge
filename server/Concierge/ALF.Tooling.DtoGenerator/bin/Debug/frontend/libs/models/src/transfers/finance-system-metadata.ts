
import { FinanceSystemFreeField } from "./finance-system-free-field";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FinanceSystemMetadata {

    static $name = "FinanceSystemMetadata";
    static typeNameHint = "ALF.Shared.Dto.Models.Transfers.FinanceSystemMetadata, ALF.Shared.Dto"

    description?: string;
    accountingSystemName?: string;
    split: boolean;
    resolvedFileName?: string;
    fields: FinanceSystemFreeField[] = [];

    constructor(data?: Partial<FinanceSystemMetadata>) {
        Object.assign(this, data);
    }
}
