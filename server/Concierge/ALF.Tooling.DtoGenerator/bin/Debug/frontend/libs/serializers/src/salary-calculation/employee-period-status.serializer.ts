import { EmployeeSalaryCalculationOverviewSerializer } from "./employee-salary-calculation-overview.serializer";
import { ControlResultOverviewSerializer } from "./control-result-overview.serializer";
import { Serializer } from "@alf/core/models";
import { EmployeePeriodStatus } from "@alf/models/salary-calculation/employee-period-status";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeePeriodStatusSerializer implements Serializer<EmployeePeriodStatus> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeePeriodStatus
    deserialize(data: any): EmployeePeriodStatus | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.salaryCalculationOverview = new EmployeeSalaryCalculationOverviewSerializer().deserialize(copy.salaryCalculationOverview);

        copy.controlResultOverview = new ControlResultOverviewSerializer().deserialize(copy.controlResultOverview);

        return initializeDefaultValues(new EmployeePeriodStatus(copy));
    }

    serialize(entity: EmployeePeriodStatus | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeePeriodStatus, _forceTypeHint?: boolean): any
    serialize(entity: EmployeePeriodStatus | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        entity! = initializeDefaultValues(entity);
        return {
            $type: _forceTypeHint ? EmployeePeriodStatus.typeNameHint : undefined,
            id: entity.id,
            employeeId: entity.employeeId,
            periodId: entity.periodId,
            salaryCalculationOverview: new EmployeeSalaryCalculationOverviewSerializer().serialize(entity.salaryCalculationOverview, _forceTypeHint),
            controlResultOverview: new ControlResultOverviewSerializer().serialize(entity.controlResultOverview, _forceTypeHint)
        };
    }
}

function initializeDefaultValues(value: EmployeePeriodStatus): EmployeePeriodStatus {
    const model = new EmployeePeriodStatus(value);

    return model;
}
