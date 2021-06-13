

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ReportPeriod {

    static $name = "ReportPeriod";
    static typeNameHint = "ALF.Shared.Dto.Models.Reports.ReportPeriod, ALF.Shared.Dto"

    archivedReportId: string;
    companyId?: string;
    periodNumber: number;

    constructor(data?: Partial<ReportPeriod>) {
        Object.assign(this, data);
    }
}
