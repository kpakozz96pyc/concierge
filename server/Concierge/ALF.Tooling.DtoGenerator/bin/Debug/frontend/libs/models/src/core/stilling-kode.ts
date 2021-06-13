

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type StillingKodeId = string;

export class StillingKode {

    static $name = "StillingKode";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.StillingKode, ALF.Shared.Dto"

    id: StillingKodeId;
    companyId: string;
    stillingKodeCode: number;
    description?: string;
    occupationalGroup?: string;
    positionCategory?: number;
    positionSeries?: number;
    salaryPlan?: number;
    salaryPlanSeries?: number;
    refWageScale?: string;
    salaryGradeWageScale?: string;
    pensionAge?: number;
    positionPercent?: number;
    paiOrganizationCode?: number;
    organizationCode?: string;
    navoProfessionalGroup?: number;

    constructor(data?: Partial<StillingKode>) {
        Object.assign(this, data);
    }
}
