
import { FileFormat } from "../files/enums/file-format";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PayslipReportInformation {

    static $name = "PayslipReportInformation";
    static typeNameHint = "ALF.Shared.Dto.Models.Payslip.PayslipReportInformation, ALF.Shared.Dto"

    reportExists: boolean;
    reportBinaryFileId?: string;
    reportBinaryFileFormat: FileFormat;
    generatedAt?: Date;
    isStale: boolean;

    constructor(data?: Partial<PayslipReportInformation>) {
        Object.assign(this, data);
    }
}
