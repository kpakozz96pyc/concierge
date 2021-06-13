
import { ReportAffiliation } from "./enums/report-affiliation";
import { ReportFilter } from "./report-filter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ReportOrder {

    static $name = "ReportOrder";
    static typeNameHint = "ALF.Shared.Dto.Models.Reports.ReportOrder, ALF.Shared.Dto"

    reportTemplateId?: string;
    description?: string;
    filters: ReportFilter[] = [];
    affiliation: ReportAffiliation;

    constructor(data?: Partial<ReportOrder>) {
        Object.assign(this, data);
    }
}
