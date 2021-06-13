

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PendingRetroPayCandidatesAmountSums {

    static $name = "PendingRetroPayCandidatesAmountSums";
    static typeNameHint = "ALF.Shared.Dto.Models.RetroPay.PendingRetroPayCandidatesAmountSums, ALF.Shared.Dto"

    total: number;
    untreated: number;
    toBePaid: number;
    toBeIgnored: number;

    constructor(data?: Partial<PendingRetroPayCandidatesAmountSums>) {
        Object.assign(this, data);
    }
}
