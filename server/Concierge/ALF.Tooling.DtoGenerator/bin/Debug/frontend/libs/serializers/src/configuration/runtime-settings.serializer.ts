import { PaySalaryOutsideEmployersPeriod } from "@alf/models/absence/enums/pay-salary-outside-employers-period";
import { WorkingTimeCalculationRule } from "@alf/models/maintenance/enums/working-time-calculation-rule";
import { ApprovalTransactionFlow } from "@alf/models/maintenance/enums/approval-transaction-flow";
import { Serializer } from "@alf/core/models";
import { RuntimeSettings } from "@alf/models/configuration/runtime-settings";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RuntimeSettingsSerializer implements Serializer<RuntimeSettings> {

    deserialize(data: undefined): undefined
    deserialize(data: any): RuntimeSettings
    deserialize(data: any): RuntimeSettings | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.paySalaryOutsideEmployersPeriod !== undefined)
            copy.paySalaryOutsideEmployersPeriod = PaySalaryOutsideEmployersPeriod[copy.paySalaryOutsideEmployersPeriod];

        if (copy.workingTimeCalculationRule !== undefined)
            copy.workingTimeCalculationRule = WorkingTimeCalculationRule[copy.workingTimeCalculationRule];

        if (copy.approvalTransactionFlow !== undefined)
            copy.approvalTransactionFlow = ApprovalTransactionFlow[copy.approvalTransactionFlow];

        return new RuntimeSettings(copy);
    }

    serialize(entity: RuntimeSettings | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: RuntimeSettings, _forceTypeHint?: boolean): any
    serialize(entity: RuntimeSettings | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? RuntimeSettings.typeNameHint : undefined,
            companyId: entity.companyId,
            paySalaryOutsideEmployersPeriod: entity.paySalaryOutsideEmployersPeriod !== null && entity.paySalaryOutsideEmployersPeriod !== undefined
                ? PaySalaryOutsideEmployersPeriod[entity.paySalaryOutsideEmployersPeriod]
                : undefined,
            useAbsenceCodeCopyType: entity.useAbsenceCodeCopyType,
            workingTimeCalculationRule: entity.workingTimeCalculationRule !== null && entity.workingTimeCalculationRule !== undefined
                ? WorkingTimeCalculationRule[entity.workingTimeCalculationRule]
                : undefined,
            useAnsattProsent: entity.useAnsattProsent,
            reportPension: entity.reportPension,
            deductionCutoff: entity.deductionCutoff,
            prepayPeriodPayCode: entity.prepayPeriodPayCode,
            useVacationDayCollectionStartDate: entity.useVacationDayCollectionStartDate,
            overrideVacationPayRate: entity.overrideVacationPayRate,
            useAlternativeMunicipality: entity.useAlternativeMunicipality,
            shouldGenerateEmployeeNumber: entity.shouldGenerateEmployeeNumber,
            approvalTransactionFlow: entity.approvalTransactionFlow !== null && entity.approvalTransactionFlow !== undefined
                ? ApprovalTransactionFlow[entity.approvalTransactionFlow]
                : undefined
        };
    }
}
