import { Serializer } from "@alf/core/models";
import { ManualProcessNavigationAction } from "@alf/models/work/manual-process-navigation-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ManualProcessNavigationActionSerializer implements Serializer<ManualProcessNavigationAction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ManualProcessNavigationAction
    deserialize(data: any): ManualProcessNavigationAction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ManualProcessNavigationAction(copy);
    }

    serialize(entity: ManualProcessNavigationAction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ManualProcessNavigationAction, _forceTypeHint?: boolean): any
    serialize(entity: ManualProcessNavigationAction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            companyId: entity.companyId,
            periodId: entity.periodId
        };
    }
}
