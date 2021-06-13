
import { MediaType } from "./enums/media-type";
import { ReportProcessType } from "../data-access/enums/report-process-type";
import { ReportDefinitionDetails } from "./report-definition-details";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ReportDefinitionId = string;

export class ReportDefinition {

    static $name = "ReportDefinition";
    static typeNameHint = "ALF.Shared.Dto.Models.Reports.ReportDefinition, ALF.Shared.Dto"

    id: ReportDefinitionId;
    companyId: string;
    reportCode?: string;
    description?: string;
    reportTable: number;
    mediaType: MediaType;
    dateFormat: number;
    fieldSeparator?: string;
    decimalSeparator?: string;
    reportFormat: boolean;
    includeOnlyActiveEmployees: boolean;
    onlySummary: boolean;
    doNotReverseSigns: boolean;
    pivotTable: boolean;
    xsltFilename?: string;
    selectedCompanies: string[] = [];
    excludeSelectedCompanies: boolean;
    reportProcessId?: string;
    reportProcessType: ReportProcessType;
    isTimelineReport: boolean;
    isAvailableInProcessTemplate: boolean;
    columns: ReportDefinitionDetails[] = [];

    constructor(data?: Partial<ReportDefinition>) {
        Object.assign(this, data);
    }
}
