import { Serializer } from "@alf/core/models";
import { FieldFlag } from "@alf/models/field-flag/field-flag";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FieldFlagSerializer implements Serializer<FieldFlag> {

    deserialize(data: undefined): undefined
    deserialize(data: any): FieldFlag
    deserialize(data: any): FieldFlag | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new FieldFlag(copy);
    }

    serialize(entity: FieldFlag | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: FieldFlag, _forceTypeHint?: boolean): any
    serialize(entity: FieldFlag | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? FieldFlag.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            useAccounting: entity.useAccounting,
            useDimA: entity.useDimA,
            useDimB: entity.useDimB,
            useDimC: entity.useDimC,
            useDimD: entity.useDimD,
            useProjectAccounting: entity.useProjectAccounting,
            useProjectDim1: entity.useProjectDim1,
            useProjectDim2: entity.useProjectDim2,
            useProjectDim3: entity.useProjectDim3,
            useProjectDim4: entity.useProjectDim4,
            useProjectDim5: entity.useProjectDim5,
            useProjectDim6Amount: entity.useProjectDim6Amount,
            useProjectDim6Hours: entity.useProjectDim6Hours,
            useSubGroup: entity.useSubGroup,
            useWageGroup: entity.useWageGroup,
            useNationalInsuranceContributionsCategoryOverride: entity.useNationalInsuranceContributionsCategoryOverride,
            useMaritimeEmployment: entity.useMaritimeEmployment,
            useActCode: entity.useActCode,
            usePositionCode: entity.usePositionCode,
            useEmployeeRates: entity.useEmployeeRates,
            useSatsP1: entity.useSatsP1,
            useSatsP2: entity.useSatsP2,
            useSatsP3: entity.useSatsP3,
            useEmploymentRates: entity.useEmploymentRates,
            useSatsA1: entity.useSatsA1,
            useSatsA2: entity.useSatsA2,
            useSatsA3: entity.useSatsA3,
            useSatsA4: entity.useSatsA4,
            useSatsA5: entity.useSatsA5,
            useSatsA6: entity.useSatsA6,
            useSatsA7: entity.useSatsA7,
            useSatsA8: entity.useSatsA8,
            useSatsA9: entity.useSatsA9,
            useSatsA10: entity.useSatsA10,
            useSatsA11: entity.useSatsA11,
            useSatsA12: entity.useSatsA12,
            useSatsA13: entity.useSatsA13,
            useSatsA14: entity.useSatsA14,
            useSatsA15: entity.useSatsA15,
            useSatsA16: entity.useSatsA16,
            useSatsA17: entity.useSatsA17,
            useSatsA18: entity.useSatsA18,
            useRegA: entity.useRegA,
            useRegB: entity.useRegB,
            useRegulative: entity.useRegulative
        };
    }
}
