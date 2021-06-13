
import { FileFormat } from "../files/enums/file-format";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ReportAddFormatOrder {

    static $name = "ReportAddFormatOrder";
    static typeNameHint = "ALF.Shared.Dto.Models.Reports.ReportAddFormatOrder, ALF.Shared.Dto"

    companyId?: string;
    reportRunId: string;
    fileFormat: FileFormat;

    constructor(data?: Partial<ReportAddFormatOrder>) {
        Object.assign(this, data);
    }
}
