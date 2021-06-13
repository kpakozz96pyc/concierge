
import { PayCodeLinkField } from "./pay-code-link-field";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type PayCodeLinkId = string;

export class PayCodeLink {

    static $name = "PayCodeLink";
    static typeNameHint = "ALF.Shared.Dto.Models.PayCodes.PayCodeLink, ALF.Shared.Dto"

    id: PayCodeLinkId;
    companyId: string;
    payCodeId: string;
    payCodeNumber: number;
    linkedPayCodeNumber: number;
    linkTriggerBehavior?: number;
    fields: PayCodeLinkField[] = [];

    constructor(data?: Partial<PayCodeLink>) {
        Object.assign(this, data);
    }
}
