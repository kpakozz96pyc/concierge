import { Serializer } from "@alf/core/models";
import { ManualPeriodProcessSalaryCalculation } from "@alf/models/period-process/manual-period-process-salary-calculation";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ManualPeriodProcessSalaryCalculationSerializer implements Serializer<ManualPeriodProcessSalaryCalculation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ManualPeriodProcessSalaryCalculation
    deserialize(data: any): ManualPeriodProcessSalaryCalculation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ManualPeriodProcessSalaryCalculation(copy);
    }

    serialize(entity: ManualPeriodProcessSalaryCalculation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ManualPeriodProcessSalaryCalculation, _forceTypeHint?: boolean): any
    serialize(entity: ManualPeriodProcessSalaryCalculation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            actions: entity.actions,
            id: entity.id,
            companyId: entity.companyId,
            periodNumber: entity.periodNumber,
            periodId: entity.periodId,
            ordering: entity.ordering,
            periodProcessType: entity.periodProcessType,
            status: entity.status,
            statusDetails: entity.statusDetails,
            waitingForJobId: entity.waitingForJobId
        };
    }
}
