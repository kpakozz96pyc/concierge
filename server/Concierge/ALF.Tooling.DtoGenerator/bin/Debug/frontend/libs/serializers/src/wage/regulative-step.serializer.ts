import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { RegulativeStep } from "@alf/models/wage/regulative-step";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RegulativeStepSerializer implements Serializer<RegulativeStep> {

    deserialize(data: undefined): undefined
    deserialize(data: any): RegulativeStep
    deserialize(data: any): RegulativeStep | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.fromDate = new Date(copy.fromDate);

        return new RegulativeStep(copy);
    }

    serialize(entity: RegulativeStep | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: RegulativeStep, _forceTypeHint?: boolean): any
    serialize(entity: RegulativeStep | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? RegulativeStep.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            regulativeCode: entity.regulativeCode,
            salaryStep: entity.salaryStep,
            fromDate: serializeDate(entity.fromDate),
            monthlyRate: entity.monthlyRate,
            fourWeeksRate: entity.fourWeeksRate,
            twoWeeksRate: entity.twoWeeksRate,
            weeklyRate: entity.weeklyRate,
            description: entity.description,
            yearlyRate: entity.yearlyRate,
            dailyRate: entity.dailyRate,
            hourlyRate: entity.hourlyRate,
            overtimeRate: entity.overtimeRate,
            rate5: entity.rate5,
            rate6: entity.rate6,
            rate7: entity.rate7,
            rate8: entity.rate8,
            rate9: entity.rate9,
            rate10: entity.rate10,
            rate11: entity.rate11,
            rate12: entity.rate12,
            rate13: entity.rate13,
            rate14: entity.rate14,
            rate15: entity.rate15,
            rate16: entity.rate16,
            rate17: entity.rate17,
            rate18: entity.rate18,
            rate19: entity.rate19
        };
    }
}
