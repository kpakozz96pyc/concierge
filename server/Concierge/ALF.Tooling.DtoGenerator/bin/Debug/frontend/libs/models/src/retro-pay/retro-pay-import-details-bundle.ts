
import { RetroPay } from "./retro-pay";
import { RetroPaySummary } from "./retro-pay-summary";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RetroPayImportDetailsBundle {

    static $name = "RetroPayImportDetailsBundle";
    static typeNameHint = "ALF.Shared.Dto.Models.RetroPay.RetroPayImportDetailsBundle, ALF.Shared.Dto"

    retroPay: RetroPay;
    retroPaySummary: RetroPaySummary;

    constructor(data?: Partial<RetroPayImportDetailsBundle>) {
        Object.assign(this, data);
    }
}
