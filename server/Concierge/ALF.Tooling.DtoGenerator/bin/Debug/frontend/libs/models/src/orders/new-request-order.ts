
import { FlowType } from "../altinn/enums/flow-type";
import { OneTimePasswordType } from "../altinn/enums/one-time-password-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class NewRequestOrder {

    static $name = "NewRequestOrder";
    static typeNameHint = "ALF.Shared.Dto.Models.Tax.Orders.NewRequestOrder, ALF.Shared.Dto"

    companyId?: string;
    taxYear: number;
    oneTimePassword?: string;
    oneTimePasswordType?: OneTimePasswordType;
    flowType: FlowType;
    onlyRequestForEmployeesWithTransactions: boolean;

    constructor(data?: Partial<NewRequestOrder>) {
        Object.assign(this, data);
    }
}
