import { FilterParameterSerializer } from "../parameter-types/filter-parameter.serializer";
import { Serializer } from "@alf/core/models";
import { PeriodText } from "@alf/models/periods/period-text";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PeriodTextSerializer implements Serializer<PeriodText> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PeriodText
    deserialize(data: any): PeriodText | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.filter = new FilterParameterSerializer().deserialize(copy.filter);

        return new PeriodText(copy);
    }

    serialize(entity: PeriodText | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PeriodText, _forceTypeHint?: boolean): any
    serialize(entity: PeriodText | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PeriodText.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            periodNumber: entity.periodNumber,
            text: entity.text,
            filter: new FilterParameterSerializer().serialize(entity.filter, _forceTypeHint),
            globalFilterId: entity.globalFilterId
        };
    }
}
