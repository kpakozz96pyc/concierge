
import { ReportFilterType } from "./enums/report-filter-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ReportFilter {

    static $name = "ReportFilter";
    static typeNameHint = "ALF.Shared.Dto.Models.Reports.ReportFilter, ALF.Shared.Dto"

    id: string;
    lookupId?: string;
    filterType: ReportFilterType;
    name: string;
    value?: any;

    constructor(data?: Partial<ReportFilter>) {
        Object.assign(this, data);
    }
}
