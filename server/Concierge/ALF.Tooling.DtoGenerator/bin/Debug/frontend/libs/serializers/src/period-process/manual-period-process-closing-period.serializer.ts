import { Serializer } from "@alf/core/models";
import { ManualPeriodProcessClosingPeriod } from "@alf/models/period-process/manual-period-process-closing-period";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ManualPeriodProcessClosingPeriodSerializer implements Serializer<ManualPeriodProcessClosingPeriod> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ManualPeriodProcessClosingPeriod
    deserialize(data: any): ManualPeriodProcessClosingPeriod | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ManualPeriodProcessClosingPeriod(copy);
    }

    serialize(entity: ManualPeriodProcessClosingPeriod | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ManualPeriodProcessClosingPeriod, _forceTypeHint?: boolean): any
    serialize(entity: ManualPeriodProcessClosingPeriod | undefined, _forceTypeHint?: boolean): any | undefined {
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
