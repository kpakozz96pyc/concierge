import { Serializer } from "@alf/core/models";
import { EmployeeSalaryCalculationOverview } from "@alf/models/salary-calculation/employee-salary-calculation-overview";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeSalaryCalculationOverviewSerializer implements Serializer<EmployeeSalaryCalculationOverview> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeSalaryCalculationOverview
    deserialize(data: any): EmployeeSalaryCalculationOverview | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.lastCalculationStartedAt !== undefined)
            copy.lastCalculationStartedAt = new Date(copy.lastCalculationStartedAt);

        if (copy.lastCalculationCompletedAt !== undefined)
            copy.lastCalculationCompletedAt = new Date(copy.lastCalculationCompletedAt);

        return new EmployeeSalaryCalculationOverview(copy);
    }

    serialize(entity: EmployeeSalaryCalculationOverview | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeSalaryCalculationOverview, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeSalaryCalculationOverview | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmployeeSalaryCalculationOverview.typeNameHint : undefined,
            calculationStatus: entity.calculationStatus,
            waitingForJobId: entity.waitingForJobId,
            failureDescription: entity.failureDescription,
            lastCalculationStartedAt: entity.lastCalculationStartedAt
                ? entity.lastCalculationStartedAt.toISOString()
                : undefined,
            lastCalculationCompletedAt: entity.lastCalculationCompletedAt
                ? entity.lastCalculationCompletedAt.toISOString()
                : undefined
        };
    }
}
