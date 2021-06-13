import { Serializer } from "@alf/core/models";
import { EmploymentAccess } from "@alf/models/core/employment-access";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmploymentAccessSerializer implements Serializer<EmploymentAccess> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmploymentAccess
    deserialize(data: any): EmploymentAccess | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new EmploymentAccess(copy);
    }

    serialize(entity: EmploymentAccess | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmploymentAccess, _forceTypeHint?: boolean): any
    serialize(entity: EmploymentAccess | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmploymentAccess.typeNameHint : undefined,
            id: entity.id,
            employeeId: entity.employeeId,
            employmentId: entity.employmentId,
            organizationId: entity.organizationId,
            description: entity.description,
            jobCode: entity.jobCode,
            organizationCode: entity.organizationCode,
            hiredDate: entity.hiredDate,
            terminatedDate: entity.terminatedDate,
            reasonForTermination: entity.reasonForTermination,
            positionPercent: entity.positionPercent,
            rate1: entity.rate1,
            rate2: entity.rate2,
            rate3: entity.rate3,
            weeklyWorkHours: entity.weeklyWorkHours,
            promotionCodeWageScaleA: entity.promotionCodeWageScaleA,
            seniorityDateWageScaleA: entity.seniorityDateWageScaleA,
            reducedSeniorityDaysWageScaleA: entity.reducedSeniorityDaysWageScaleA,
            salaryGradeWageScaleA: entity.salaryGradeWageScaleA,
            wageScaleA: entity.wageScaleA,
            stepWageScaleA: entity.stepWageScaleA,
            workHoursGroupWageScaleA: entity.workHoursGroupWageScaleA,
            promotionCodeWageScaleB: entity.promotionCodeWageScaleB,
            seniorityDateWageScaleB: entity.seniorityDateWageScaleB,
            reducedSeniorityDaysWageScaleB: entity.reducedSeniorityDaysWageScaleB,
            salaryGradeWageScaleB: entity.salaryGradeWageScaleB,
            wageScaleB: entity.wageScaleB,
            stepWageScaleB: entity.stepWageScaleB,
            workHoursGroupWageScaleB: entity.workHoursGroupWageScaleB,
            ameldingEmploymentType: entity.ameldingEmploymentType,
            ameldingFormOfEmployment: entity.ameldingFormOfEmployment,
            ameldingShipRegistry: entity.ameldingShipRegistry,
            ameldingShipType: entity.ameldingShipType,
            ameldingShipAreaOfOperation: entity.ameldingShipAreaOfOperation,
            ameldingPaymentType: entity.ameldingPaymentType,
            ameldingTaxationRule: entity.ameldingTaxationRule,
            ameldingShiftType: entity.ameldingShiftType,
            subAccount: entity.subAccount,
            auditronRule: entity.auditronRule,
            account: entity.account,
            dimensionA: entity.dimensionA,
            dimensionB: entity.dimensionB,
            dimensionC: entity.dimensionC,
            dimensionD: entity.dimensionD,
            projectDimension1: entity.projectDimension1,
            projectDimension2: entity.projectDimension2,
            projectDimension3: entity.projectDimension3,
            projectDimension4: entity.projectDimension4,
            projectDimension5: entity.projectDimension5,
            projectDimension6Amount: entity.projectDimension6Amount,
            projectDimension6Hours: entity.projectDimension6Hours,
            activityCode: entity.activityCode,
            isMainEmployment: entity.isMainEmployment,
            wageType: entity.wageType,
            subGroup: entity.subGroup,
            positionType: entity.positionType,
            stillingKode: entity.stillingKode,
            wageGroup: entity.wageGroup,
            salaryRelationStatus: entity.salaryRelationStatus,
            eligibleOverTime: entity.eligibleOverTime,
            disponerendeOrganization: entity.disponerendeOrganization,
            disponerendeFromDate: entity.disponerendeFromDate,
            disponerendeUntilDate: entity.disponerendeUntilDate,
            pensionAgreement: entity.pensionAgreement,
            pensionAge: entity.pensionAge,
            paiCode: entity.paiCode,
            employmentStatus: entity.employmentStatus,
            ssbEmploymentType: entity.ssbEmploymentType,
            vocationCode: entity.vocationCode,
            occupationStatus: entity.occupationStatus,
            companySubNumber: entity.companySubNumber,
            workMunicipality: entity.workMunicipality,
            overridingNationalInsuranceContributionsCategory: entity.overridingNationalInsuranceContributionsCategory,
            svalbardSalary: entity.svalbardSalary,
            parentialBenefit: entity.parentialBenefit,
            isUsingNetPay: entity.isUsingNetPay,
            seafarersDeduction: entity.seafarersDeduction,
            tradeUnionNumber1: entity.tradeUnionNumber1,
            tradeUnionMembershipNumber1: entity.tradeUnionMembershipNumber1,
            tradeUnionMembershipDeduction1: entity.tradeUnionMembershipDeduction1,
            generateTradeUnionMembershipDeduction1: entity.generateTradeUnionMembershipDeduction1,
            tradeUnionNumber2: entity.tradeUnionNumber2,
            tradeUnionMembershipNumber2: entity.tradeUnionMembershipNumber2,
            tradeUnionMembershipDeduction2: entity.tradeUnionMembershipDeduction2,
            generateTradeUnionMembershipDeduction2: entity.generateTradeUnionMembershipDeduction2,
            spekterProfessionalGroup: entity.spekterProfessionalGroup,
            sstReportingCode1: entity.sstReportingCode1,
            sstReportingCode2: entity.sstReportingCode2,
            sstReportingCode3: entity.sstReportingCode3,
            education: entity.education,
            occupationalGroup: entity.occupationalGroup,
            employmentType: entity.employmentType,
            reportingPositionType: entity.reportingPositionType,
            reportingPaymentType: entity.reportingPaymentType,
            freeField1: entity.freeField1,
            freeField2: entity.freeField2,
            freeField3: entity.freeField3,
            freeField4: entity.freeField4,
            pensionAgreementStartDate: entity.pensionAgreementStartDate,
            pensionAgreementEndDate: entity.pensionAgreementEndDate,
            pensionMembershipStatus: entity.pensionMembershipStatus,
            pensionMessageType: entity.pensionMessageType,
            isPensionOfTypeFunctioning: entity.isPensionOfTypeFunctioning,
            pensionPositionCombination: entity.pensionPositionCombination,
            isTemporarilyDisabled: entity.isTemporarilyDisabled,
            employmentCode: entity.employmentCode,
            rate4: entity.rate4,
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
            coreEmploymentId: entity.coreEmploymentId,
            currentValuesTimestamp: entity.currentValuesTimestamp,
            currentRecordTimestamp: entity.currentRecordTimestamp,
            integrationKey1: entity.integrationKey1,
            integrationKey2: entity.integrationKey2,
            integrationKey3: entity.integrationKey3,
            integrationKey4: entity.integrationKey4,
            integrationKey5: entity.integrationKey5,
            wageStepACalculatedTimeline: entity.wageStepACalculatedTimeline,
            wageStepBCalculatedTimeline: entity.wageStepBCalculatedTimeline,
            externalEmploymentKey: entity.externalEmploymentKey,
            overstyrtSone: entity.overstyrtSone,
            immediateManagerEmployeeId: entity.immediateManagerEmployeeId
        };
    }
}
