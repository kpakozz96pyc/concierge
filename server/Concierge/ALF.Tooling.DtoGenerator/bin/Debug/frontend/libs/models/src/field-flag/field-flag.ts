

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type FieldFlagId = string;

export class FieldFlag {

    static $name = "FieldFlag";
    static typeNameHint = "ALF.Shared.Dto.Models.FieldFlag.FieldFlag, ALF.Shared.Dto"

    id: FieldFlagId;
    companyId?: string;
    useAccounting: boolean;
    useDimA: boolean;
    useDimB: boolean;
    useDimC: boolean;
    useDimD: boolean;
    useProjectAccounting: boolean;
    useProjectDim1: boolean;
    useProjectDim2: boolean;
    useProjectDim3: boolean;
    useProjectDim4: boolean;
    useProjectDim5: boolean;
    useProjectDim6Amount: boolean;
    useProjectDim6Hours: boolean;
    useSubGroup: boolean;
    useWageGroup: boolean;
    useNationalInsuranceContributionsCategoryOverride: boolean;
    useMaritimeEmployment: boolean;
    useActCode: boolean;
    usePositionCode: boolean;
    useEmployeeRates: boolean;
    useSatsP1: boolean;
    useSatsP2: boolean;
    useSatsP3: boolean;
    useEmploymentRates: boolean;
    useSatsA1: boolean;
    useSatsA2: boolean;
    useSatsA3: boolean;
    useSatsA4: boolean;
    useSatsA5: boolean;
    useSatsA6: boolean;
    useSatsA7: boolean;
    useSatsA8: boolean;
    useSatsA9: boolean;
    useSatsA10: boolean;
    useSatsA11: boolean;
    useSatsA12: boolean;
    useSatsA13: boolean;
    useSatsA14: boolean;
    useSatsA15: boolean;
    useSatsA16: boolean;
    useSatsA17: boolean;
    useSatsA18: boolean;
    useRegA: boolean;
    useRegB: boolean;
    useRegulative: boolean;

    constructor(data?: Partial<FieldFlag>) {
        Object.assign(this, data);
    }
}
