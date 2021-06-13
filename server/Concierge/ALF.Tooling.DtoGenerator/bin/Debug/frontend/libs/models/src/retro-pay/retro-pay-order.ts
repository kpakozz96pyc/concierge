

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RetroPayOrder {

    static $name = "RetroPayOrder";
    static typeNameHint = "ALF.Shared.Dto.Models.RetroPay.RetroPayOrder, ALF.Shared.Dto"

    companyId?: string;
    directImport: boolean;
    earliestImportPeriodNumber?: number;
    contextRetroPayRunId: number;

    constructor(data?: Partial<RetroPayOrder>) {
        Object.assign(this, data);
    }
}
