
import { FlowType } from "../altinn/enums/flow-type";
import { OneTimePasswordType } from "../altinn/enums/one-time-password-type";
import { TaxInformationImportId } from "../tax/tax-information-import";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RefreshPasswordOrder {

    static $name = "RefreshPasswordOrder";
    static typeNameHint = "ALF.Shared.Dto.Models.Tax.Orders.RefreshPasswordOrder, ALF.Shared.Dto"

    taxImportId: TaxInformationImportId;
    oneTimePassword?: string;
    oneTimePasswordType?: OneTimePasswordType;
    flowType: FlowType;

    constructor(data?: Partial<RefreshPasswordOrder>) {
        Object.assign(this, data);
    }
}
