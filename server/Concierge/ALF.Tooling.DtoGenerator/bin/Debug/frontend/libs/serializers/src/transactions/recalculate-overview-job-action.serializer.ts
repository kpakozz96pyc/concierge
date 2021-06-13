import { Serializer } from "@alf/core/models";
import { RecalculateOverviewJobAction } from "@alf/models/transactions/recalculate-overview-job-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RecalculateOverviewJobActionSerializer implements Serializer<RecalculateOverviewJobAction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): RecalculateOverviewJobAction
    deserialize(data: any): RecalculateOverviewJobAction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new RecalculateOverviewJobAction(copy);
    }

    serialize(entity: RecalculateOverviewJobAction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: RecalculateOverviewJobAction, _forceTypeHint?: boolean): any
    serialize(entity: RecalculateOverviewJobAction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? RecalculateOverviewJobAction.typeNameHint : undefined,
            employeeId: entity.employeeId,
            periodId: entity.periodId
        };
    }
}
