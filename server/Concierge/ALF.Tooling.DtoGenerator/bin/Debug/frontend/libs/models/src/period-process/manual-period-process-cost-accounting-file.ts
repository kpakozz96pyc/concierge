
import { FileFormat } from "../files/enums/file-format";
import { ManualPeriodProcessCostAccountingFileActions } from "./enums/manual-period-process-cost-accounting-file-actions";
import { ManualPeriodProcess } from "@alf/models/period-process/manual-period-process";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ManualPeriodProcessCostAccountingFileId = string;

export class ManualPeriodProcessCostAccountingFile extends ManualPeriodProcess {

    static $name = "ManualPeriodProcessCostAccountingFile";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessCostAccountingFile, ALF.Shared.Dto"

    heapId?: string;
    fileStorageId?: string;
    fileFormat: FileFormat;
    actions: ManualPeriodProcessCostAccountingFileActions[] = [];

    constructor(data?: Partial<ManualPeriodProcessCostAccountingFile>) {
        super(data);
        Object.assign(this, data);
        this.$type = ManualPeriodProcessCostAccountingFile.typeNameHint;
    }
}
