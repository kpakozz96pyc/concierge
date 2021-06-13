import { PaymentTypeGroupingSerializer } from "./payment-type-grouping.serializer";
import { Serializer } from "@alf/core/models";
import { IncomeTypeGrouping } from "@alf/models/income/income-type-grouping";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IncomeTypeGroupingSerializer implements Serializer<IncomeTypeGrouping> {

    deserialize(data: undefined): undefined
    deserialize(data: any): IncomeTypeGrouping
    deserialize(data: any): IncomeTypeGrouping | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.paymentGroupings = (copy.paymentGroupings || []).map(new PaymentTypeGroupingSerializer().deserialize);

        return new IncomeTypeGrouping(copy);
    }

    serialize(entity: IncomeTypeGrouping | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: IncomeTypeGrouping, _forceTypeHint?: boolean): any
    serialize(entity: IncomeTypeGrouping | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? IncomeTypeGrouping.typeNameHint : undefined,
            description: entity.description,
            paymentGroupings: entity.paymentGroupings
                ? entity.paymentGroupings.map(e => new PaymentTypeGroupingSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
