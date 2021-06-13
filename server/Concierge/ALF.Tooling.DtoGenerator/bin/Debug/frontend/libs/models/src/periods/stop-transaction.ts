

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class StopTransaction {

    static $name = "StopTransaction";
    static typeNameHint = "ALF.Shared.Dto.Models.Periods.StopTransaction, ALF.Shared.Dto"

    companyId?: string;
    periodNumber: number;
    employeeId?: string;
    positionCode?: string;
    payCode?: number;

    constructor(data?: Partial<StopTransaction>) {
        Object.assign(this, data);
    }
}
