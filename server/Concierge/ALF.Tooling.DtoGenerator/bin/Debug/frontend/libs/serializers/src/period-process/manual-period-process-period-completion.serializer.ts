import { Serializer } from "@alf/core/models";
import { ManualPeriodProcessPeriodCompletion } from "@alf/models/period-process/manual-period-process-period-completion";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ManualPeriodProcessPeriodCompletionSerializer implements Serializer<ManualPeriodProcessPeriodCompletion> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ManualPeriodProcessPeriodCompletion
    deserialize(data: any): ManualPeriodProcessPeriodCompletion | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ManualPeriodProcessPeriodCompletion(copy);
    }

    serialize(entity: ManualPeriodProcessPeriodCompletion | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ManualPeriodProcessPeriodCompletion, _forceTypeHint?: boolean): any
    serialize(entity: ManualPeriodProcessPeriodCompletion | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
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
