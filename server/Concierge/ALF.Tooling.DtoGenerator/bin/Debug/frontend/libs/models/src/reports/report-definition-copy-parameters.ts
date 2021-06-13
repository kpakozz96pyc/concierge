

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ReportDefinitionCopyParametersId = string;

export class ReportDefinitionCopyParameters {

    static $name = "ReportDefinitionCopyParameters";
    static typeNameHint = "ALF.Shared.Dto.Models.Reports.ReportDefinitionCopyParameters, ALF.Shared.Dto"

    copyFromId: ReportDefinitionCopyParametersId;
    copyToReportDefinitionCode?: string;
    description?: string;

    constructor(data?: Partial<ReportDefinitionCopyParameters>) {
        Object.assign(this, data);
    }
}
