
import { PendingRetroPayDeltaStatusCounts } from "./pending-retro-pay-delta-status-counts";
import { PendingRetroPayCandidatesAmountSums } from "./pending-retro-pay-candidates-amount-sums";
import { PendingRetroPayCandidateId } from "./pending-retro-pay-candidate";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type PendingRetroPayId = string;

export class PendingRetroPay {

    static $name = "PendingRetroPay";
    static typeNameHint = "ALF.Shared.Dto.Models.RetroPay.PendingRetroPay, ALF.Shared.Dto"

    id: PendingRetroPayId;
    companyId: string;
    createdAt: Date;
    statusCounts: PendingRetroPayDeltaStatusCounts;
    amountSums: PendingRetroPayCandidatesAmountSums;
    candidates: PendingRetroPayCandidateId[] = [];

    constructor(data?: Partial<PendingRetroPay>) {
        Object.assign(this, data);
    }
}
