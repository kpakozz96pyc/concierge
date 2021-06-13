import { Serializer } from "@alf/core/models";
import { DeductionGrouping } from "@alf/models/income/deduction-grouping";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class DeductionGroupingSerializer implements Serializer<DeductionGrouping> {

    deserialize(data: undefined): undefined
    deserialize(data: any): DeductionGrouping
    deserialize(data: any): DeductionGrouping | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new DeductionGrouping(copy);
    }

    serialize(entity: DeductionGrouping | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: DeductionGrouping, _forceTypeHint?: boolean): any
    serialize(entity: DeductionGrouping | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? DeductionGrouping.typeNameHint : undefined,
            description: entity.description,
            amount: entity.amount
        };
    }
}
