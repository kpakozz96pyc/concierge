import { Serializer } from "@alf/core/models";
import { SicknessBenefitApplicationOtherIncomeSource } from "@alf/models/sickness-benefit-applications/sickness-benefit-application-other-income-source";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SicknessBenefitApplicationOtherIncomeSourceSerializer implements Serializer<SicknessBenefitApplicationOtherIncomeSource> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SicknessBenefitApplicationOtherIncomeSource
    deserialize(data: any): SicknessBenefitApplicationOtherIncomeSource | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new SicknessBenefitApplicationOtherIncomeSource(copy);
    }

    serialize(entity: SicknessBenefitApplicationOtherIncomeSource | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SicknessBenefitApplicationOtherIncomeSource, _forceTypeHint?: boolean): any
    serialize(entity: SicknessBenefitApplicationOtherIncomeSource | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? SicknessBenefitApplicationOtherIncomeSource.typeNameHint : undefined,
            type: entity.type,
            isOnSickLeave: entity.isOnSickLeave
        };
    }
}
