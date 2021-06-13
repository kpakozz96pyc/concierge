import { IncomeGroupingSerializer } from "./income-grouping.serializer";
import { Serializer } from "@alf/core/models";
import { PaymentTypeGrouping } from "@alf/models/income/payment-type-grouping";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PaymentTypeGroupingSerializer implements Serializer<PaymentTypeGrouping> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PaymentTypeGrouping
    deserialize(data: any): PaymentTypeGrouping | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.incomeGroupings = (copy.incomeGroupings || []).map(new IncomeGroupingSerializer().deserialize);

        return new PaymentTypeGrouping(copy);
    }

    serialize(entity: PaymentTypeGrouping | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PaymentTypeGrouping, _forceTypeHint?: boolean): any
    serialize(entity: PaymentTypeGrouping | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PaymentTypeGrouping.typeNameHint : undefined,
            description: entity.description,
            incomeGroupings: entity.incomeGroupings
                ? entity.incomeGroupings.map(e => new IncomeGroupingSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
