import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { WorkAnniversaryOrder } from "@alf/models/order/work-anniversary-order";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkAnniversaryOrderSerializer implements Serializer<WorkAnniversaryOrder> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WorkAnniversaryOrder
    deserialize(data: any): WorkAnniversaryOrder | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.until = new Date(copy.until);

        return new WorkAnniversaryOrder(copy);
    }

    serialize(entity: WorkAnniversaryOrder | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WorkAnniversaryOrder, _forceTypeHint?: boolean): any
    serialize(entity: WorkAnniversaryOrder | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? WorkAnniversaryOrder.typeNameHint : undefined,
            until: serializeDate(entity.until),
            includeFiveYearAnniversary: entity.includeFiveYearAnniversary,
            includeTenYearAnniversary: entity.includeTenYearAnniversary,
            onlyIfWorkedAtLeastNumberOfYears: entity.onlyIfWorkedAtLeastNumberOfYears
        };
    }
}
