
import { FileFormat } from "../files/enums/file-format";
import { ReportTemplateId } from "./report-template";
import { ReportFilter } from "./report-filter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ReportOrderTemplate {

    static $name = "ReportOrderTemplate";
    static typeNameHint = "ALF.Shared.Dto.Models.Reports.ReportOrderTemplate, ALF.Shared.Dto"

    reportTemplateId: ReportTemplateId;
    filters: ReportFilter[] = [];
    supportedFormats: FileFormat[] = [];

    constructor(data?: Partial<ReportOrderTemplate>) {
        Object.assign(this, data);
    }
}
