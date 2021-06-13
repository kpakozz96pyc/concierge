
import { FileFormat } from "../files/enums/file-format";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ReportData {

    static $name = "ReportData";
    static typeNameHint = "ALF.Shared.Dto.Models.Reports.ReportData, ALF.Shared.Dto"

    binaryItemId?: string;
    fileFormat: FileFormat;
    isComplete: boolean;
    beingCreatedByJobId: boolean;

    constructor(data?: Partial<ReportData>) {
        Object.assign(this, data);
    }
}
