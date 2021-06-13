
import { RetroPayDeltaProjectedStatus } from "./enums/retro-pay-delta-projected-status";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type PendingRetroPayCandidateId = string;

export class PendingRetroPayCandidate {

    static $name = "PendingRetroPayCandidate";
    static typeNameHint = "ALF.Shared.Dto.Models.RetroPay.PendingRetroPayCandidate, ALF.Shared.Dto"

    id: PendingRetroPayCandidateId;
    companyId?: string;
    employeeId?: string;
    periodId?: string;
    payCodeId?: string;
    amount: number;
    status: RetroPayDeltaProjectedStatus;
    calculatedAt: Date;

    constructor(data?: Partial<PendingRetroPayCandidate>) {
        Object.assign(this, data);
    }
}
