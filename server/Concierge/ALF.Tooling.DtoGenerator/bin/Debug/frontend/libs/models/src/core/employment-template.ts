﻿
import { EmploymentWageType } from "./enums/employment-wage-type";
import { EmploymentPositionType } from "./enums/employment-position-type";
import { SalaryRelationStatusType } from "./enums/salary-relation-status-type";
import { PensionMembershipStatusType } from "./enums/pension-membership-status-type";
import { EmploymentSubGroupType } from "./enums/employment-sub-group-type";
import { EligibleOvertimeType } from "./enums/eligible-overtime-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type EmploymentTemplateId = string;

export class EmploymentTemplate {

    static $name = "EmploymentTemplate";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.EmploymentTemplate, ALF.Shared.Dto"

    id: EmploymentTemplateId;
    jobCode?: string;
    description?: string;
    organizationCode?: string;
    hiredDate?: Date;
    terminatedDate?: Date;
    positionPercent?: number;
    rate1?: number;
    rate2?: number;
    rate3?: number;
    weeklyWorkHours?: number;
    promotionCodeWageScaleA?: number;
    seniorityDateWageScaleA?: Date;
    reducedSeniorityDaysWageScaleA?: number;
    salaryGradeWageScaleA?: string;
    wageScaleA?: string;
    stepWageScaleA?: number;
    workHoursGroupWageScaleA?: number;
    promotionCodeWageScaleB?: number;
    seniorityDateWageScaleB?: Date;
    reducedSeniorityDaysWageScaleB?: number;
    salaryGradeWageScaleB?: string;
    wageScaleB?: string;
    stepWageScaleB?: number;
    workHoursGroupWageScaleB?: number;
    ameldingEmploymentType?: string;
    ameldingFormOfEmployment?: string;
    ameldingShipRegistry?: string;
    ameldingShipType?: string;
    ameldingShipAreaOfOperation?: string;
    ameldingPaymentType?: string;
    ameldingTaxationRule?: string;
    ameldingShiftType?: number;
    subAccount?: number;
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
    disponerendeOrganization?: string;
    disponerendeFromDate?: Date;
    disponerendeUntilDate?: Date;
    pensionAgreement?: number;
    pensionAge?: number;
    paiCode?: number;
    employmentStatus?: string;
    ssbEmploymentType?: string;
    vocationCode?: number;
    occupationStatus?: number;
    wageType: EmploymentWageType;
    subGroup?: EmploymentSubGroupType;
    positionType: EmploymentPositionType;
    stillingKode?: number;
    wageGroup?: string;
    salaryRelationStatus: SalaryRelationStatusType;
    eligibleOverTime?: EligibleOvertimeType;
    companySubNumber?: number;
    workMunicipality?: number;
    overridingNationalInsuranceContributionsCategory?: string;
    svalbardSalary?: boolean;
    parentialBenefit?: boolean;
    isUsingNetPay: boolean;
    seafarersDeduction?: boolean;
    tradeUnionNumber1?: number;
    tradeUnionMembershipNumber1?: number;
    tradeUnionMembershipDeduction1?: number;
    generateTradeUnionMembershipDeduction1?: boolean;
    tradeUnionNumber2?: number;
    tradeUnionMembershipNumber2?: number;
    tradeUnionMembershipDeduction2?: number;
    generateTradeUnionMembershipDeduction2?: boolean;
    spekterProfessionalGroup?: number;
    sstReportingCode1?: string;
    sstReportingCode2?: string;
    sstReportingCode3?: string;
    education?: number;
    occupationalGroup?: string;
    employmentType?: number;
    reportingPositionType?: string;
    reportingPaymentType?: number;
    freeField1?: any;
    freeField2?: any;
    freeField3?: any;
    freeField4?: any;
    pensionAgreementStartDate?: Date;
    pensionAgreementEndDate?: Date;
    pensionMembershipStatus: PensionMembershipStatusType;
    pensionMessageType?: number;
    isPensionOfTypeFunctioning?: boolean;
    pensionPositionCombination?: boolean;
    isTemporarilyDisabled?: boolean;
    employmentCode?: string;
    isMainEmployment: boolean;
    rate4?: number;
    rate5?: number;
    rate6?: number;
    rate7?: number;
    rate8?: number;
    rate9?: number;
    rate10?: number;
    rate11?: number;
    rate12?: number;
    rate13?: number;
    rate14?: number;
    rate15?: number;
    rate16?: number;
    rate17?: number;
    rate18?: number;
    coreEmploymentId?: string;
    currentValuesTimestamp: Date;
    currentRecordTimestamp: Date;
    integrationKey1?: string;
    integrationKey2?: string;
    integrationKey3?: string;
    integrationKey4?: string;
    integrationKey5?: string;
    wageStepACalculatedTimeline?: string;
    wageStepBCalculatedTimeline?: string;
    externalEmploymentKey?: string;
    reasonForTermination?: string;
    overstyrtSone: number;
    immediateManagerEmployeeId?: string;

    constructor(data?: Partial<EmploymentTemplate>) {
        Object.assign(this, data);
    }
}
