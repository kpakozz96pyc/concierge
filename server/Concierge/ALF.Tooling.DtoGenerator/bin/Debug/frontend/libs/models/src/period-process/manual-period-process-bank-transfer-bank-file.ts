
import { FileFormat } from "../files/enums/file-format";
import { ManualPeriodProcessBankTransferBankFileActions } from "./enums/manual-period-process-bank-transfer-bank-file-actions";
import { ManualPeriodProcess } from "@alf/models/period-process/manual-period-process";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ManualPeriodProcessBankTransferBankFileId = string;

export class ManualPeriodProcessBankTransferBankFile extends ManualPeriodProcess {

    static $name = "ManualPeriodProcessBankTransferBankFile";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessBankTransferBankFile, ALF.Shared.Dto"

    heapId?: string;
    fileStorageId?: string;
    fileFormat: FileFormat;
    actions: ManualPeriodProcessBankTransferBankFileActions[] = [];

    constructor(data?: Partial<ManualPeriodProcessBankTransferBankFile>) {
        super(data);
        Object.assign(this, data);
        this.$type = ManualPeriodProcessBankTransferBankFile.typeNameHint;
    }
}
