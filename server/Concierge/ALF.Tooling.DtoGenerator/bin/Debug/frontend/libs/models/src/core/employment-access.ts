
import { AccessLevel } from "../access/enums/access-level";
import { EmploymentId } from "./employment";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type EmploymentAccessId = string;

export class EmploymentAccess {

    static $name = "EmploymentAccess";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.EmploymentAccess, ALF.Shared.Dto"

    id: EmploymentAccessId;
    employeeId?: string;
    employmentId: EmploymentId;
    organizationId?: AccessLevel;
    description?: AccessLevel;
    jobCode?: AccessLevel;
    organizationCode?: AccessLevel;
    hiredDate?: AccessLevel;
    terminatedDate?: AccessLevel;
    reasonForTermination?: AccessLevel;
    positionPercent?: AccessLevel;
    rate1?: AccessLevel;
    rate2?: AccessLevel;
    rate3?: AccessLevel;
    weeklyWorkHours?: AccessLevel;
    promotionCodeWageScaleA?: AccessLevel;
    seniorityDateWageScaleA?: AccessLevel;
    reducedSeniorityDaysWageScaleA?: AccessLevel;
    salaryGradeWageScaleA?: AccessLevel;
    wageScaleA?: AccessLevel;
    stepWageScaleA?: AccessLevel;
    workHoursGroupWageScaleA?: AccessLevel;
    promotionCodeWageScaleB?: AccessLevel;
    seniorityDateWageScaleB?: AccessLevel;
    reducedSeniorityDaysWageScaleB?: AccessLevel;
    salaryGradeWageScaleB?: AccessLevel;
    wageScaleB?: AccessLevel;
    stepWageScaleB?: AccessLevel;
    workHoursGroupWageScaleB?: AccessLevel;
    ameldingEmploymentType?: AccessLevel;
    ameldingFormOfEmployment?: AccessLevel;
    ameldingShipRegistry?: AccessLevel;
    ameldingShipType?: AccessLevel;
    ameldingShipAreaOfOperation?: AccessLevel;
    ameldingPaymentType?: AccessLevel;
    ameldingTaxationRule?: AccessLevel;
    ameldingShiftType?: AccessLevel;
    subAccount?: AccessLevel;
    auditronRule?: AccessLevel;
    account?: AccessLevel;
    dimensionA?: AccessLevel;
    dimensionB?: AccessLevel;
    dimensionC?: AccessLevel;
    dimensionD?: AccessLevel;
    projectDimension1?: AccessLevel;
    projectDimension2?: AccessLevel;
    projectDimension3?: AccessLevel;
    projectDimension4?: AccessLevel;
    projectDimension5?: AccessLevel;
    projectDimension6Amount?: AccessLevel;
    projectDimension6Hours?: AccessLevel;
    activityCode?: AccessLevel;
    isMainEmployment?: AccessLevel;
    wageType?: AccessLevel;
    subGroup?: AccessLevel;
    positionType?: AccessLevel;
    stillingKode?: AccessLevel;
    wageGroup?: AccessLevel;
    salaryRelationStatus?: AccessLevel;
    eligibleOverTime?: AccessLevel;
    disponerendeOrganization?: AccessLevel;
    disponerendeFromDate?: AccessLevel;
    disponerendeUntilDate?: AccessLevel;
    pensionAgreement?: AccessLevel;
    pensionAge?: AccessLevel;
    paiCode?: AccessLevel;
    employmentStatus?: AccessLevel;
    ssbEmploymentType?: AccessLevel;
    vocationCode?: AccessLevel;
    occupationStatus?: AccessLevel;
    companySubNumber?: AccessLevel;
    workMunicipality?: AccessLevel;
    overridingNationalInsuranceContributionsCategory?: AccessLevel;
    svalbardSalary?: AccessLevel;
    parentialBenefit?: AccessLevel;
    isUsingNetPay?: AccessLevel;
    seafarersDeduction?: AccessLevel;
    tradeUnionNumber1?: AccessLevel;
    tradeUnionMembershipNumber1?: AccessLevel;
    tradeUnionMembershipDeduction1?: AccessLevel;
    generateTradeUnionMembershipDeduction1?: AccessLevel;
    tradeUnionNumber2?: AccessLevel;
    tradeUnionMembershipNumber2?: AccessLevel;
    tradeUnionMembershipDeduction2?: AccessLevel;
    generateTradeUnionMembershipDeduction2?: AccessLevel;
    spekterProfessionalGroup?: AccessLevel;
    sstReportingCode1?: AccessLevel;
    sstReportingCode2?: AccessLevel;
    sstReportingCode3?: AccessLevel;
    education?: AccessLevel;
    occupationalGroup?: AccessLevel;
    employmentType?: AccessLevel;
    reportingPositionType?: AccessLevel;
    reportingPaymentType?: AccessLevel;
    freeField1?: AccessLevel;
    freeField2?: AccessLevel;
    freeField3?: AccessLevel;
    freeField4?: AccessLevel;
    pensionAgreementStartDate?: AccessLevel;
    pensionAgreementEndDate?: AccessLevel;
    pensionMembershipStatus?: AccessLevel;
    pensionMessageType?: AccessLevel;
    isPensionOfTypeFunctioning?: AccessLevel;
    pensionPositionCombination?: AccessLevel;
    isTemporarilyDisabled?: AccessLevel;
    employmentCode?: AccessLevel;
    rate4?: AccessLevel;
    rate5?: AccessLevel;
    rate6?: AccessLevel;
    rate7?: AccessLevel;
    rate8?: AccessLevel;
    rate9?: AccessLevel;
    rate10?: AccessLevel;
    rate11?: AccessLevel;
    rate12?: AccessLevel;
    rate13?: AccessLevel;
    rate14?: AccessLevel;
    rate15?: AccessLevel;
    rate16?: AccessLevel;
    rate17?: AccessLevel;
    rate18?: AccessLevel;
    coreEmploymentId?: AccessLevel;
    currentValuesTimestamp?: AccessLevel;
    currentRecordTimestamp?: AccessLevel;
    integrationKey1?: AccessLevel;
    integrationKey2?: AccessLevel;
    integrationKey3?: AccessLevel;
    integrationKey4?: AccessLevel;
    integrationKey5?: AccessLevel;
    wageStepACalculatedTimeline?: AccessLevel;
    wageStepBCalculatedTimeline?: AccessLevel;
    externalEmploymentKey?: AccessLevel;
    overstyrtSone?: AccessLevel;
    immediateManagerEmployeeId?: AccessLevel;

    constructor(data?: Partial<EmploymentAccess>) {
        Object.assign(this, data);
    }
}
