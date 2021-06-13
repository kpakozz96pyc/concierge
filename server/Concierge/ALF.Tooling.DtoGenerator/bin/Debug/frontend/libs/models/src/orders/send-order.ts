
import { FlowType } from "../altinn/enums/flow-type";
import { OneTimePasswordType } from "../altinn/enums/one-time-password-type";
import { AmeldingRootId } from "../amelding/amelding-root";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SendOrder {

    static $name = "SendOrder";
    static typeNameHint = "ALF.Shared.Dto.Models.Amelding.Orders.SendOrder, ALF.Shared.Dto"

    companyId?: string;
    ameldingId: AmeldingRootId;
    oneTimePassword?: string;
    oneTimePasswordType?: OneTimePasswordType;
    flowType: FlowType;
    failIfUnableToContinueOrComplete: boolean;

    constructor(data?: Partial<SendOrder>) {
        Object.assign(this, data);
    }
}
