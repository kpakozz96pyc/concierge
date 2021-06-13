import { Serializer } from "@alf/core/models";
import { ManualPeriodProcessBankTransferBankFile } from "@alf/models/period-process/manual-period-process-bank-transfer-bank-file";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ManualPeriodProcessBankTransferBankFileSerializer implements Serializer<ManualPeriodProcessBankTransferBankFile> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ManualPeriodProcessBankTransferBankFile
    deserialize(data: any): ManualPeriodProcessBankTransferBankFile | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ManualPeriodProcessBankTransferBankFile(copy);
    }

    serialize(entity: ManualPeriodProcessBankTransferBankFile | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ManualPeriodProcessBankTransferBankFile, _forceTypeHint?: boolean): any
    serialize(entity: ManualPeriodProcessBankTransferBankFile | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            heapId: entity.heapId,
            fileStorageId: entity.fileStorageId,
            fileFormat: entity.fileFormat,
            actions: entity.actions,
            id: entity.id,
            companyId: entity.companyId,
            periodNumber: entity.periodNumber,
            periodId: entity.periodId,
            ordering: entity.ordering,
            periodProcessType: entity.periodProcessType,
            status: entity.status,
            statusDetails: entity.statusDetails,
            waitingForJobId: entity.waitingForJobId
        };
    }
}
