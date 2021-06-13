

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PendingRetroPayDeltaStatusCounts {

    static $name = "PendingRetroPayDeltaStatusCounts";
    static typeNameHint = "ALF.Shared.Dto.Models.RetroPay.PendingRetroPayDeltaStatusCounts, ALF.Shared.Dto"

    total: number;
    untreated: number;
    toBePaid: number;
    toBeIgnored: number;

    constructor(data?: Partial<PendingRetroPayDeltaStatusCounts>) {
        Object.assign(this, data);
    }
}
