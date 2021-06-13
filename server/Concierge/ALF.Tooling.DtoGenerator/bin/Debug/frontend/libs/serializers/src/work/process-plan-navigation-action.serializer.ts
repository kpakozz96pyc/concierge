import { Serializer } from "@alf/core/models";
import { ProcessPlanNavigationAction } from "@alf/models/work/process-plan-navigation-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessPlanNavigationActionSerializer implements Serializer<ProcessPlanNavigationAction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessPlanNavigationAction
    deserialize(data: any): ProcessPlanNavigationAction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ProcessPlanNavigationAction(copy);
    }

    serialize(entity: ProcessPlanNavigationAction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessPlanNavigationAction, _forceTypeHint?: boolean): any
    serialize(entity: ProcessPlanNavigationAction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            companyId: entity.companyId,
            periodId: entity.periodId,
            processPlanId: entity.processPlanId
        };
    }
}
