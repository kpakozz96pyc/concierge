
import { ReportFilterType } from "./enums/report-filter-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ReportParameter {

    static $name = "ReportParameter";
    static typeNameHint = "ALF.Shared.Dto.Models.Reports.ReportParameter, ALF.Shared.Dto"

    id?: string;
    parameterType: ReportFilterType;
    reportRunId: string;
    name?: string;
    value?: any;
    lookupId?: string;

    constructor(data?: Partial<ReportParameter>) {
        Object.assign(this, data);
    }
}
