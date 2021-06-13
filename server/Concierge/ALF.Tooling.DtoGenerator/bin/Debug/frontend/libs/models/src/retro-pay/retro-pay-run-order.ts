

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RetroPayRunOrder {

    static $name = "RetroPayRunOrder";
    static typeNameHint = "ALF.Shared.Dto.Models.RetroPay.RetroPayRunOrder, ALF.Shared.Dto"

    calculateRetroPayFromSinceLast: boolean;
    companyId: string;
    fromPeriodNumber: number;
    toPeriodNumber: number;
    allEmployees: boolean;
    selectedEmployees: number[] = [];

    constructor(data?: Partial<RetroPayRunOrder>) {
        Object.assign(this, data);
    }
}
