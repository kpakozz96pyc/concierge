import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { BirthdayOrder } from "@alf/models/order/birthday-order";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BirthdayOrderSerializer implements Serializer<BirthdayOrder> {

    deserialize(data: undefined): undefined
    deserialize(data: any): BirthdayOrder
    deserialize(data: any): BirthdayOrder | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.until = new Date(copy.until);

        return new BirthdayOrder(copy);
    }

    serialize(entity: BirthdayOrder | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: BirthdayOrder, _forceTypeHint?: boolean): any
    serialize(entity: BirthdayOrder | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? BirthdayOrder.typeNameHint : undefined,
            until: serializeDate(entity.until),
            includeAnyBirthday: entity.includeAnyBirthday,
            includeFiveYearSomething: entity.includeFiveYearSomething,
            includeTenYearSomething: entity.includeTenYearSomething,
            onlyIfOlderThan: entity.onlyIfOlderThan
        };
    }
}
