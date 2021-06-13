import { Serializer } from "@alf/core/models";
import { ManualPeriodProcessCostAccountingFile } from "@alf/models/period-process/manual-period-process-cost-accounting-file";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ManualPeriodProcessCostAccountingFileSerializer implements Serializer<ManualPeriodProcessCostAccountingFile> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ManualPeriodProcessCostAccountingFile
    deserialize(data: any): ManualPeriodProcessCostAccountingFile | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ManualPeriodProcessCostAccountingFile(copy);
    }

    serialize(entity: ManualPeriodProcessCostAccountingFile | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ManualPeriodProcessCostAccountingFile, _forceTypeHint?: boolean): any
    serialize(entity: ManualPeriodProcessCostAccountingFile | undefined, _forceTypeHint?: boolean): any | undefined {
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
