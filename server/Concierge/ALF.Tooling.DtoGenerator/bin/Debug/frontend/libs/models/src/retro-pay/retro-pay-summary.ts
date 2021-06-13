

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RetroPaySummary {

    static $name = "RetroPaySummary";
    static typeNameHint = "ALF.Shared.Dto.Models.RetroPay.RetroPaySummary, ALF.Shared.Dto"

    retroPayId: string;
    importedDeltaCount: number;
    ignoredDeltaCount: number;

    constructor(data?: Partial<RetroPaySummary>) {
        Object.assign(this, data);
    }
}
