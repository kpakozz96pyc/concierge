
import { PeriodStatus } from "./enums/period-status";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PayrollPeriodDisplayInfo {

    static $name = "PayrollPeriodDisplayInfo";
    static typeNameHint = "ALF.Shared.Dto.Models.Periods.PayrollPeriodDisplayInfo, ALF.Shared.Dto"

    id?: string;
    companyId?: string;
    description?: string;
    periodNumber: number;
    periodState?: string;
    payDate: Date;
    status: PeriodStatus;

    constructor(data?: Partial<PayrollPeriodDisplayInfo>) {
        Object.assign(this, data);
    }
}
