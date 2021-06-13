import { Serializer } from "@alf/core/models";
import { TaxGrouping } from "@alf/models/income/tax-grouping";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TaxGroupingSerializer implements Serializer<TaxGrouping> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TaxGrouping
    deserialize(data: any): TaxGrouping | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new TaxGrouping(copy);
    }

    serialize(entity: TaxGrouping | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TaxGrouping, _forceTypeHint?: boolean): any
    serialize(entity: TaxGrouping | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? TaxGrouping.typeNameHint : undefined,
            description: entity.description,
            amount: entity.amount
        };
    }
}
