import { PeriodStatus } from "@alf/models/periods/enums/period-status";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { PayrollPeriodDisplayInfo } from "@alf/models/periods/payroll-period-display-info";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PayrollPeriodDisplayInfoSerializer implements Serializer<PayrollPeriodDisplayInfo> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PayrollPeriodDisplayInfo
    deserialize(data: any): PayrollPeriodDisplayInfo | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.payDate = new Date(copy.payDate);

        copy.status = PeriodStatus[copy.status];

        return new PayrollPeriodDisplayInfo(copy);
    }

    serialize(entity: PayrollPeriodDisplayInfo | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PayrollPeriodDisplayInfo, _forceTypeHint?: boolean): any
    serialize(entity: PayrollPeriodDisplayInfo | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PayrollPeriodDisplayInfo.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            description: entity.description,
            periodNumber: entity.periodNumber,
            periodState: entity.periodState,
            payDate: serializeDate(entity.payDate),
            status: PeriodStatus[entity.status]
        };
    }
}
