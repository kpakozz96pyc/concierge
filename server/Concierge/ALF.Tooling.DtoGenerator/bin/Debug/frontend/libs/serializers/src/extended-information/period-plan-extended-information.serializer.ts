import { Serializer } from "@alf/core/models";
import { PeriodPlanExtendedInformation } from "@alf/models/extended-information/period-plan-extended-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PeriodPlanExtendedInformationSerializer implements Serializer<PeriodPlanExtendedInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PeriodPlanExtendedInformation
    deserialize(data: any): PeriodPlanExtendedInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new PeriodPlanExtendedInformation(copy);
    }

    serialize(entity: PeriodPlanExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PeriodPlanExtendedInformation, _forceTypeHint?: boolean): any
    serialize(entity: PeriodPlanExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PeriodPlanExtendedInformation.typeNameHint : undefined,
            periodType: entity.periodType,
            periodNumberFormula: entity.periodNumberFormula,
            payDateFormula: entity.payDateFormula,
            actualPaymentDateFormula: entity.actualPaymentDateFormula,
            isActive: entity.isActive,
            paymentCycle: entity.paymentCycle
        };
    }
}
