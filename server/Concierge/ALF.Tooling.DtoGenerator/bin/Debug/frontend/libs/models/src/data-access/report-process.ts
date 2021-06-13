
import { ReportProcessType } from "./enums/report-process-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ReportProcessId = string;

export class ReportProcess {

    static $name = "ReportProcess";
    static typeNameHint = "ALF.Shared.Dto.Models.DataAccess.ReportProcess, ALF.Shared.Dto"

    id: ReportProcessId;
    name?: string;
    processType: ReportProcessType;
    isSystemShipped: boolean;
    availableInPayrollPortal: boolean;
    availableInCustomerPortal: boolean;
    availableInManagerPortal: boolean;

    constructor(data?: Partial<ReportProcess>) {
        Object.assign(this, data);
    }
}
