
import { FileFormat } from "../files/enums/file-format";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ReportDistribution {

    static $name = "ReportDistribution";
    static typeNameHint = "ALF.Shared.Dto.Models.Reports.ReportDistribution, ALF.Shared.Dto"

    reportId: string;
    fileFormat: FileFormat;
    email?: string;

    constructor(data?: Partial<ReportDistribution>) {
        Object.assign(this, data);
    }
}
