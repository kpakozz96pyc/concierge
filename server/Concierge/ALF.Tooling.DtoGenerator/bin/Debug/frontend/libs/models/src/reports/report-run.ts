
import { ReportRunStatus } from "./enums/report-run-status";
import { ReportId } from "./report";
import { ReportData } from "./report-data";
import { ReportParameter } from "./report-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ReportRunId = string;

export class ReportRun {

    static $name = "ReportRun";
    static typeNameHint = "ALF.Shared.Dto.Models.Reports.ReportRun, ALF.Shared.Dto"

    id: ReportRunId;
    reportId: ReportId;
    periodId?: string;
    isCompleted: boolean;
    status: ReportRunStatus;
    beingCreatedByJobId?: string;
    orderedAt: Date;
    orderedBy?: string;
    generatedData: ReportData[] = [];
    reportParameter: ReportParameter[] = [];

    constructor(data?: Partial<ReportRun>) {
        Object.assign(this, data);
    }
}
