
import { EligibleOvertimeType } from "./enums/eligible-overtime-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type PositionId = string;

export class Position {

    static $name = "Position";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.Position, ALF.Shared.Dto"

    id: PositionId;
    companyId: string;
    positionCode: string;
    pensionAge?: number;
    description: string;
    stillingKode?: number;
    organizationCode?: string;
    disponerendeOrganization?: string;
    disponerendeFromDate?: Date;
    disponerendeUntilDate?: Date;
    parentPosition?: string;
    eligibleOvertime: EligibleOvertimeType;
    isPursuant: boolean;
    pursuantFromDate?: Date;
    pursuantUntilDate?: Date;
    pursuantRestriction?: string;
    isPositionBlocked: boolean;
    budgetedPositionPercent: number;
    budgetedYearlyRate: number;
    budgetedStepWageScaleA: number;
    budgetedStepWageScaleB: number;
    vocationCode?: number;
    employmentStatus?: string;
    pensionCode: number;
    ssbEmploymentType?: string;
    paiCode: number;
    competenceId?: string;
    occupationStatus: number;
    subGroup?: any;
    freeField2?: any;
    freeField3?: any;
    freeField4?: any;
    auditronRule?: string;
    account?: any;
    dimensionA?: any;
    dimensionB?: any;
    dimensionC?: any;
    dimensionD?: any;
    projectDimension1?: any;
    projectDimension2?: any;
    projectDimension3?: any;
    projectDimension4?: any;
    projectDimension5?: any;
    projectDimension6Amount?: any;
    projectDimension6Hours?: any;
    activityCode?: string;
    normalPositionPercent: number;
    weeklyWorkHours: number;
    workHoursGroupWageScaleA?: number;
    promotionCodeWageScaleA: number;
    salaryGradeWageScaleA?: string;
    wageScaleA?: string;
    stepWageScaleA?: number;
    workHoursGroupWageScaleB?: number;
    promotionCodeWageScaleB: number;
    salaryGradeWageScaleB?: string;
    wageScaleB?: string;
    stepWageScaleB?: number;

    constructor(data?: Partial<Position>) {
        Object.assign(this, data);
    }
}
