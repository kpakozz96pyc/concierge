
import { ReportType } from "./enums/report-type";
import { ReportAffiliation } from "./enums/report-affiliation";
import { ReportRunId } from "./report-run";
import { ReportTemplateId } from "./report-template";
import { ReportFilter } from "./report-filter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ReportId = string;

export class Report {

    static $name = "Report";
    static typeNameHint = "ALF.Shared.Dto.Models.Reports.Report, ALF.Shared.Dto"

    id: ReportId;
    companyId: string;
    reportType: ReportType;
    reportTemplateId: ReportTemplateId;
    isReceipt: boolean;
    canBeRefreshed: boolean;
    canBeDeleted: boolean;
    canBeCopied: boolean;
    canBeModified: boolean;
    createdAt: Date;
    createdBy?: string;
    filters: ReportFilter[] = [];
    latestRun: ReportRunId;
    description?: string;
    affiliation: ReportAffiliation;

    constructor(data?: Partial<Report>) {
        Object.assign(this, data);
    }
}
