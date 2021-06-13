import { FilterParameterSerializer } from "../parameter-types/filter-parameter.serializer";
import { Serializer } from "@alf/core/models";
import { PlannedPeriodText } from "@alf/models/planning/planned-period-text";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PlannedPeriodTextSerializer implements Serializer<PlannedPeriodText> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PlannedPeriodText
    deserialize(data: any): PlannedPeriodText | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.filter = new FilterParameterSerializer().deserialize(copy.filter);

        return new PlannedPeriodText(copy);
    }

    serialize(entity: PlannedPeriodText | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PlannedPeriodText, _forceTypeHint?: boolean): any
    serialize(entity: PlannedPeriodText | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PlannedPeriodText.typeNameHint : undefined,
            id: entity.id,
            plannedPeriodId: entity.plannedPeriodId,
            text: entity.text,
            filter: new FilterParameterSerializer().serialize(entity.filter, _forceTypeHint),
            globalFilterId: entity.globalFilterId
        };
    }
}
