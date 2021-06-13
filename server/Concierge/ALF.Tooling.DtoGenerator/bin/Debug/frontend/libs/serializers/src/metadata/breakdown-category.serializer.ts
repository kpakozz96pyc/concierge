import { Serializer } from "@alf/core/models";
import { BreakdownCategory } from "@alf/models/metadata/breakdown-category";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BreakdownCategorySerializer implements Serializer<BreakdownCategory> {

    deserialize(data: undefined): undefined
    deserialize(data: any): BreakdownCategory
    deserialize(data: any): BreakdownCategory | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new BreakdownCategory(copy);
    }

    serialize(entity: BreakdownCategory | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: BreakdownCategory, _forceTypeHint?: boolean): any
    serialize(entity: BreakdownCategory | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? BreakdownCategory.typeNameHint : undefined,
            id: entity.id,
            label: entity.label
        };
    }
}
