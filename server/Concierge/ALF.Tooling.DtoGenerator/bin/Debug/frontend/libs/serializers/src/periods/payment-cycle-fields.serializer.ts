import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { PaymentCycleFields } from "@alf/models/periods/payment-cycle-fields";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PaymentCycleFieldsSerializer implements Serializer<PaymentCycleFields> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PaymentCycleFields
    deserialize(data: any): PaymentCycleFields | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.fromDate !== undefined)
            copy.fromDate = new Date(copy.fromDate);

        if (copy.toDate !== undefined)
            copy.toDate = new Date(copy.toDate);

        return new PaymentCycleFields(copy);
    }

    serialize(entity: PaymentCycleFields | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PaymentCycleFields, _forceTypeHint?: boolean): any
    serialize(entity: PaymentCycleFields | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PaymentCycleFields.typeNameHint : undefined,
            paymentCycle: entity.paymentCycle,
            fromDate: serializeDate(entity.fromDate),
            toDate: serializeDate(entity.toDate),
            deviantTable: entity.deviantTable
        };
    }
}
