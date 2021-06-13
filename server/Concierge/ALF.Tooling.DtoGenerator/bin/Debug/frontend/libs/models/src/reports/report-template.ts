
import { FileFormat } from "../files/enums/file-format";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ReportTemplateId = string;

export class ReportTemplate {

    static $name = "ReportTemplate";
    static typeNameHint = "ALF.Shared.Dto.Models.Reports.ReportTemplate, ALF.Shared.Dto"

    id: ReportTemplateId;
    name: string;
    companyId: string;
    isOrderable: boolean;
    metadata?: string;
    reportProcessId?: string;
    supportedFormats: FileFormat[] = [];

    constructor(data?: Partial<ReportTemplate>) {
        Object.assign(this, data);
    }
}
