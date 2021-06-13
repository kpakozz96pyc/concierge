import { PeriodStatus } from "@alf/models/periods/enums/period-status";
import { Serializer } from "@alf/core/models";
import { PrepayPeriodListItem } from "@alf/models/periods/prepay-period-list-item";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PrepayPeriodListItemSerializer implements Serializer<PrepayPeriodListItem> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PrepayPeriodListItem
    deserialize(data: any): PrepayPeriodListItem | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.status = PeriodStatus[copy.status];

        return new PrepayPeriodListItem(copy);
    }

    serialize(entity: PrepayPeriodListItem | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PrepayPeriodListItem, _forceTypeHint?: boolean): any
    serialize(entity: PrepayPeriodListItem | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PrepayPeriodListItem.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            periodNumber: entity.periodNumber,
            description: entity.description,
            year: entity.year,
            month: entity.month,
            status: PeriodStatus[entity.status]
        };
    }
}
