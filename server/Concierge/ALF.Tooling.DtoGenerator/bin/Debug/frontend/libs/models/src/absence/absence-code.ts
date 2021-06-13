
import { AbsencePlanType } from "./enums/absence-plan-type";
import { AbsenceDaysCalculationType } from "./enums/absence-days-calculation-type";
import { AbsenceActualDaysCalculationType } from "./enums/absence-actual-days-calculation-type";
import { WeekendAndHolydayInclusionType } from "./enums/weekend-and-holyday-inclusion-type";
import { CalculateHoursType } from "./enums/calculate-hours-type";
import { ReimbursementType } from "./enums/reimbursement-type";
import { FritakFraAGPType } from "./enums/fritak-fra-agptype";
import { SpecialReimbursementType } from "./enums/special-reimbursement-type";
import { SalaryReductionType } from "./enums/salary-reduction-type";
import { TransferCategoryType } from "./enums/transfer-category-type";
import { LongTermAbsenceType } from "./enums/long-term-absence-type";
import { AbsenceType } from "./enums/absence-type";
import { AbsenceCodeSupertype } from "./enums/absence-code-supertype";
import { AbsenceCodeAccumulatorBehavior } from "./enums/absence-code-accumulator-behavior";
import { AbsenceCodeMaskBehavior } from "./enums/absence-code-mask-behavior";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type AbsenceCodeId = string;

export class AbsenceCode {

    static $name = "AbsenceCode";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.AbsenceCode, ALF.Shared.Dto"

    id: AbsenceCodeId;
    companyId: string;
    code: number;
    allowGraded: boolean;
    description?: string;
    absencePlan: AbsencePlanType;
    copyCodeId?: any;
    followUpOnMissingDocumentation?: boolean;
    absenceDaysCalculation: AbsenceDaysCalculationType;
    absenceActualDaysCalculation: AbsenceActualDaysCalculationType;
    includeWeekend: WeekendAndHolydayInclusionType;
    calculateHours: CalculateHoursType;
    canParticipateInReimbursement: boolean;
    reimbursementType: ReimbursementType;
    fritakFraAGP: FritakFraAGPType;
    specialReimbursement: SpecialReimbursementType;
    isChildrensIllness: boolean;
    salaryReduction: SalaryReductionType;
    payCodeId?: string;
    transferCategory: TransferCategoryType;
    longTermAbsenceCode: LongTermAbsenceType;
    mergeImports: boolean;
    runningAccumulator: number;
    accumulators: { [key: string]: AbsenceCodeAccumulatorBehavior } = {};
    masks: { [key: string]: AbsenceCodeMaskBehavior } = {};
    absenceType: AbsenceType;
    rehabilitation: boolean;
    reportingCodeKS: number;
    reportingCodeRTV: number;
    reportingCodeAD: number;
    reportingCodeNHO: number;
    reportingCodeSSB: number;
    internalReportingCode?: string;
    absenceMarkingCode?: string;
    absenceMarkingColor?: string;
    absenceCodeType?: string;
    pensionRights: number;
    numberOfYearsWithPensionRights: number;
    pensionCode?: string;
    accountCodeId?: string;
    generateFollowUp: boolean;
    isIncludedInFollowUp: boolean;
    supertype?: AbsenceCodeSupertype;

    constructor(data?: Partial<AbsenceCode>) {
        Object.assign(this, data);
    }
}
