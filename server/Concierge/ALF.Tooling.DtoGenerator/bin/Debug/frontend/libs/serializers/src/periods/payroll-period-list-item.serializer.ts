import { PeriodStatus } from "@alf/models/periods/enums/period-status";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { PayrollPeriodListItem } from "@alf/models/periods/payroll-period-list-item";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PayrollPeriodListItemSerializer implements Serializer<PayrollPeriodListItem> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PayrollPeriodListItem
    deserialize(data: any): PayrollPeriodListItem | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.status = PeriodStatus[copy.status];

        copy.statusDate = new Date(copy.statusDate);

        copy.payDate = new Date(copy.payDate);

        return new PayrollPeriodListItem(copy);
    }

    serialize(entity: PayrollPeriodListItem | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PayrollPeriodListItem, _forceTypeHint?: boolean): any
    serialize(entity: PayrollPeriodListItem | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PayrollPeriodListItem.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            periodId: entity.periodId,
            description: entity.description,
            year: entity.year,
            month: entity.month,
            status: PeriodStatus[entity.status],
            periodState: entity.periodState,
            statusDate: serializeDate(entity.statusDate),
            payDate: serializeDate(entity.payDate)
        };
    }
}
