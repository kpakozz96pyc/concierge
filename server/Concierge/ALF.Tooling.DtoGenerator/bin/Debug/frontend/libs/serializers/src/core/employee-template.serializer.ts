import { BankTransferHeapPaymentType } from "@alf/models/transfers/enums/bank-transfer-heap-payment-type";
import { PaySlipMediaType } from "@alf/models/core/enums/pay-slip-media-type";
import { PaySlipLanguage } from "@alf/models/core/enums/pay-slip-language";
import { IncomeOverviewMediaType } from "@alf/models/core/enums/income-overview-media-type";
import { VacationPayBasisType } from "@alf/models/core/enums/vacation-pay-basis-type";
import { BreadWinnerType } from "@alf/models/core/enums/bread-winner-type";
import { EmployeeWorkCategoryType } from "@alf/models/core/enums/employee-work-category-type";
import { EmployeeSeveranceType } from "@alf/models/core/enums/employee-severance-type";
import { TaxInformationDeductionType } from "@alf/models/tax/enums/tax-information-deduction-type";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { EmployeeTemplate } from "@alf/models/core/employee-template";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeTemplateSerializer implements Serializer<EmployeeTemplate> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeTemplate
    deserialize(data: any): EmployeeTemplate | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.paymentMethod1 = BankTransferHeapPaymentType[copy.paymentMethod1];

        copy.paymentMethod2 = BankTransferHeapPaymentType[copy.paymentMethod2];

        copy.paymentMethod3 = BankTransferHeapPaymentType[copy.paymentMethod3];

        if (copy.employmentDate !== undefined)
            copy.employmentDate = new Date(copy.employmentDate);

        if (copy.terminationDate !== undefined)
            copy.terminationDate = new Date(copy.terminationDate);

        if (copy.dateOfBirth !== undefined)
            copy.dateOfBirth = new Date(copy.dateOfBirth);

        copy.paySlipMedia = PaySlipMediaType[copy.paySlipMedia];

        copy.paySlipLanguage = PaySlipLanguage[copy.paySlipLanguage];

        copy.incomeOverviewMedia = IncomeOverviewMediaType[copy.incomeOverviewMedia];

        copy.vacationPayBasis = VacationPayBasisType[copy.vacationPayBasis];

        if (copy.collectVacationDaysStartDate !== undefined)
            copy.collectVacationDaysStartDate = new Date(copy.collectVacationDaysStartDate);

        copy.breadWinner = BreadWinnerType[copy.breadWinner];

        if (copy.taxInformationDeductionType !== undefined)
            copy.taxInformationDeductionType = TaxInformationDeductionType[copy.taxInformationDeductionType];

        if (copy.acceptedExemptionEmployerPeriodStartDate !== undefined)
            copy.acceptedExemptionEmployerPeriodStartDate = new Date(copy.acceptedExemptionEmployerPeriodStartDate);

        if (copy.acceptedExemptionEmployerPeriodEndDate !== undefined)
            copy.acceptedExemptionEmployerPeriodEndDate = new Date(copy.acceptedExemptionEmployerPeriodEndDate);

        if (copy.extendedQuotaChildrensChronicSicknessStartDate !== undefined)
            copy.extendedQuotaChildrensChronicSicknessStartDate = new Date(copy.extendedQuotaChildrensChronicSicknessStartDate);

        if (copy.extendedQuotaChildrensChronicSicknessEndDate !== undefined)
            copy.extendedQuotaChildrensChronicSicknessEndDate = new Date(copy.extendedQuotaChildrensChronicSicknessEndDate);

        if (copy.extendedQuotaSelfReportedSickLeaveStartDate !== undefined)
            copy.extendedQuotaSelfReportedSickLeaveStartDate = new Date(copy.extendedQuotaSelfReportedSickLeaveStartDate);

        if (copy.extendedQuotaSelfReportedSickLeaveEndDate !== undefined)
            copy.extendedQuotaSelfReportedSickLeaveEndDate = new Date(copy.extendedQuotaSelfReportedSickLeaveEndDate);

        copy.workCategory = EmployeeWorkCategoryType[copy.workCategory];

        copy.severance = EmployeeSeveranceType[copy.severance];

        if (copy.pensionDate !== undefined)
            copy.pensionDate = new Date(copy.pensionDate);

        copy.currentValuesTimestamp = new Date(copy.currentValuesTimestamp);

        copy.currentRecordTimestamp = new Date(copy.currentRecordTimestamp);

        return new EmployeeTemplate(copy);
    }

    serialize(entity: EmployeeTemplate | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeTemplate, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeTemplate | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmployeeTemplate.typeNameHint : undefined,
            id: entity.id,
            name: entity.name,
            address1: entity.address1,
            address2: entity.address2,
            countryCode: entity.countryCode,
            postalCode: entity.postalCode,
            emailWork: entity.emailWork,
            emailPrivate: entity.emailPrivate,
            privatePhoneNumber: entity.privatePhoneNumber,
            bankAccountNumber1: entity.bankAccountNumber1,
            paymentMethod1: BankTransferHeapPaymentType[entity.paymentMethod1],
            bankAccountNumber2: entity.bankAccountNumber2,
            paymentMethod2: BankTransferHeapPaymentType[entity.paymentMethod2],
            bankAccountNumber3: entity.bankAccountNumber3,
            paymentMethod3: BankTransferHeapPaymentType[entity.paymentMethod3],
            bankAccountSwift1: entity.bankAccountSwift1,
            bankAccountSwift2: entity.bankAccountSwift2,
            bankAccountSwift3: entity.bankAccountSwift3,
            bankAccount1CountryCode: entity.bankAccount1CountryCode,
            bankAccount2CountryCode: entity.bankAccount2CountryCode,
            bankAccount3CountryCode: entity.bankAccount3CountryCode,
            bankAccount1Code: entity.bankAccount1Code,
            bankAccount2Code: entity.bankAccount2Code,
            bankAccount3Code: entity.bankAccount3Code,
            bankAccount2PaymentAmount: entity.bankAccount2PaymentAmount,
            bankAccount3PaymentAmount: entity.bankAccount3PaymentAmount,
            socialSecurityNumber: entity.socialSecurityNumber,
            socialOfficeNumberCode: entity.socialOfficeNumberCode,
            referenceEmploymentId: entity.referenceEmploymentId,
            rate1: entity.rate1,
            rate2: entity.rate2,
            rate3: entity.rate3,
            maritalStatus: entity.maritalStatus,
            mainEducationLevel: entity.mainEducationLevel,
            gender: entity.gender,
            taxCardCountyNumber: entity.taxCardCountyNumber,
            weeklyWorkHours: entity.weeklyWorkHours,
            totalPositionPercentage: entity.totalPositionPercentage,
            publicEmployerEmployeeRegisterCode: entity.publicEmployerEmployeeRegisterCode,
            employmentDate: serializeDate(entity.employmentDate),
            terminationDate: serializeDate(entity.terminationDate),
            organizationCode: entity.organizationCode,
            setAsideVacationPay: entity.setAsideVacationPay,
            dateOfBirth: serializeDate(entity.dateOfBirth),
            isInternationalIdInUse: entity.isInternationalIdInUse,
            internationalIdCountryCode: entity.internationalIdCountryCode,
            internationalIdTaxIdNumber: entity.internationalIdTaxIdNumber,
            internationalIdSocialSecurityNumber: entity.internationalIdSocialSecurityNumber,
            internationalIdVATNumber: entity.internationalIdVATNumber,
            internationalIdPassportNumber: entity.internationalIdPassportNumber,
            privateMobilePhoneNumber: entity.privateMobilePhoneNumber,
            workMobilePhoneNumber: entity.workMobilePhoneNumber,
            paySlipMedia: PaySlipMediaType[entity.paySlipMedia],
            paySlipLanguage: PaySlipLanguage[entity.paySlipLanguage],
            incomeOverviewMedia: IncomeOverviewMediaType[entity.incomeOverviewMedia],
            vacationPayBasis: VacationPayBasisType[entity.vacationPayBasis],
            collectVacationDaysStartDate: serializeDate(entity.collectVacationDaysStartDate),
            externalId: entity.externalId,
            breadWinner: BreadWinnerType[entity.breadWinner],
            statisticValue1: entity.statisticValue1,
            statisticValue2: entity.statisticValue2,
            taxInformationDeductionType: entity.taxInformationDeductionType !== null && entity.taxInformationDeductionType !== undefined
                ? TaxInformationDeductionType[entity.taxInformationDeductionType]
                : undefined,
            overriddenTaxationPercentage: entity.overriddenTaxationPercentage,
            additionalTaxationAmount: entity.additionalTaxationAmount,
            isSecondaryEmployer: entity.isSecondaryEmployer,
            paySalaryBeyondEmployerPeriod: entity.paySalaryBeyondEmployerPeriod,
            acceptedExemptionEmployerPeriodStartDate: serializeDate(entity.acceptedExemptionEmployerPeriodStartDate),
            acceptedExemptionEmployerPeriodEndDate: serializeDate(entity.acceptedExemptionEmployerPeriodEndDate),
            extendedQuotaChildrensChronicSicknessStartDate: serializeDate(entity.extendedQuotaChildrensChronicSicknessStartDate),
            extendedQuotaChildrensChronicSicknessEndDate: serializeDate(entity.extendedQuotaChildrensChronicSicknessEndDate),
            extendedQuotaChildrensChronicSickness: entity.extendedQuotaChildrensChronicSickness,
            extendedQuotaSelfReportedSickLeaveStartDate: serializeDate(entity.extendedQuotaSelfReportedSickLeaveStartDate),
            extendedQuotaSelfReportedSickLeaveEndDate: serializeDate(entity.extendedQuotaSelfReportedSickLeaveEndDate),
            weeklyWorkingDays: entity.weeklyWorkingDays,
            paymentType: entity.paymentType,
            workCategory: EmployeeWorkCategoryType[entity.workCategory],
            severance: EmployeeSeveranceType[entity.severance],
            taxationResidentOfCountry: entity.taxationResidentOfCountry,
            reportPensionStatus: entity.reportPensionStatus,
            pensionCode: entity.pensionCode,
            pensionCode1: entity.pensionCode1,
            pensionCode2: entity.pensionCode2,
            formerPensionPlan: entity.formerPensionPlan,
            deviatingPensionAgreement: entity.deviatingPensionAgreement,
            receivesDisabilityPension: entity.receivesDisabilityPension,
            pensionDate: serializeDate(entity.pensionDate),
            immediateManagerEmployeeId: entity.immediateManagerEmployeeId,
            immediateManagerLastname: entity.immediateManagerLastname,
            immediateManagerFirstname: entity.immediateManagerFirstname,
            immediateManagerSocialSecurityNumber: entity.immediateManagerSocialSecurityNumber,
            immediateManagerMobile: entity.immediateManagerMobile,
            immediateManagerEmail: entity.immediateManagerEmail,
            currencyCode1: entity.currencyCode1,
            currencyCode2: entity.currencyCode2,
            currencyCode3: entity.currencyCode3,
            taxBenefits: entity.taxBenefits,
            degreeOfDisability: entity.degreeOfDisability,
            corePersonId: entity.corePersonId,
            currentValuesTimestamp: entity.currentValuesTimestamp
                ? entity.currentValuesTimestamp.toISOString()
                : undefined,
            currentRecordTimestamp: entity.currentRecordTimestamp
                ? entity.currentRecordTimestamp.toISOString()
                : undefined,
            image: entity.image,
            note: entity.note,
            externalPersonKey: entity.externalPersonKey,
            externalEmployeeKey: entity.externalEmployeeKey,
            freevar5: entity.freevar5,
            freevar6: entity.freevar6,
            freefield1: entity.freefield1,
            freefield2: entity.freefield2,
            freefield3: entity.freefield3,
            freefield4: entity.freefield4,
            freeFieldA1: entity.freeFieldA1,
            freeFieldA2: entity.freeFieldA2,
            freeFieldA3: entity.freeFieldA3,
            freeFieldA4: entity.freeFieldA4,
            freeFieldA5: entity.freeFieldA5,
            freeFieldA6: entity.freeFieldA6,
            freeFieldA7: entity.freeFieldA7,
            freeFieldA8: entity.freeFieldA8,
            freeFieldA9: entity.freeFieldA9,
            freeFieldA10: entity.freeFieldA10,
            freeFieldA11: entity.freeFieldA11,
            freeFieldA12: entity.freeFieldA12,
            freeFieldA13: entity.freeFieldA13,
            freeFieldA14: entity.freeFieldA14,
            freeFieldA15: entity.freeFieldA15,
            freeFieldB1: entity.freeFieldB1,
            freeFieldB2: entity.freeFieldB2,
            freeFieldB3: entity.freeFieldB3,
            freeFieldB4: entity.freeFieldB4,
            freeFieldB5: entity.freeFieldB5,
            freeFieldB6: entity.freeFieldB6,
            freeFieldB7: entity.freeFieldB7,
            freeFieldB8: entity.freeFieldB8,
            freeFieldB9: entity.freeFieldB9,
            freeFieldB10: entity.freeFieldB10,
            freeFieldB11: entity.freeFieldB11,
            freeFieldB12: entity.freeFieldB12,
            freeFieldB13: entity.freeFieldB13,
            freeFieldB14: entity.freeFieldB14,
            freeFieldB15: entity.freeFieldB15,
            freeFieldB18: entity.freeFieldB18,
            freeFieldB19: entity.freeFieldB19,
            freeFieldB20: entity.freeFieldB20,
            freeFieldB21: entity.freeFieldB21,
            freeFieldB22: entity.freeFieldB22,
            freeFieldB23: entity.freeFieldB23,
            freeFieldB24: entity.freeFieldB24,
            freeFieldB25: entity.freeFieldB25,
            freeFieldB26: entity.freeFieldB26,
            freeFieldB27: entity.freeFieldB27,
            freeFieldB28: entity.freeFieldB28,
            freeFieldB29: entity.freeFieldB29,
            freeFieldB30: entity.freeFieldB30,
            freeFieldB31: entity.freeFieldB31,
            freeFieldB32: entity.freeFieldB32,
            freeFieldB33: entity.freeFieldB33,
            freeFieldB34: entity.freeFieldB34,
            freeFieldB35: entity.freeFieldB35,
            freeFieldC6: entity.freeFieldC6,
            freeFieldC7: entity.freeFieldC7,
            freeFieldC8: entity.freeFieldC8,
            freeFieldD1: entity.freeFieldD1,
            freeFieldD2: entity.freeFieldD2,
            freeFieldE1: entity.freeFieldE1,
            freeFieldE2: entity.freeFieldE2,
            freeFieldE3: entity.freeFieldE3,
            freeFieldE4: entity.freeFieldE4,
            freeFieldE5: entity.freeFieldE5,
            freeFieldE6: entity.freeFieldE6,
            freeFieldE7: entity.freeFieldE7,
            freeFieldE8: entity.freeFieldE8,
            freeFieldE9: entity.freeFieldE9,
            freeFieldE10: entity.freeFieldE10,
            freeFieldE11: entity.freeFieldE11,
            freeFieldE12: entity.freeFieldE12,
            freeFieldE13: entity.freeFieldE13,
            freeFieldE14: entity.freeFieldE14,
            freeFieldE15: entity.freeFieldE15,
            freeFieldE17: entity.freeFieldE17,
            freeFieldE18: entity.freeFieldE18,
            freeFieldE19: entity.freeFieldE19,
            freeFieldE20: entity.freeFieldE20,
            freeFieldE21: entity.freeFieldE21,
            freeFieldE22: entity.freeFieldE22,
            freeFieldE23: entity.freeFieldE23,
            freeFieldE24: entity.freeFieldE24,
            freeFieldE25: entity.freeFieldE25,
            freeFieldF1: entity.freeFieldF1,
            freeFieldF2: entity.freeFieldF2,
            freeFieldF3: entity.freeFieldF3,
            freeFieldF4: entity.freeFieldF4,
            freeFieldF5: entity.freeFieldF5,
            freeFieldF6: entity.freeFieldF6,
            freeFieldF7: entity.freeFieldF7,
            freeFieldF8: entity.freeFieldF8,
            freeFieldF9: entity.freeFieldF9,
            freeFieldF10: entity.freeFieldF10,
            freeFieldF11: entity.freeFieldF11,
            freeFieldF12: entity.freeFieldF12,
            freeFieldF13: entity.freeFieldF13,
            freeFieldF14: entity.freeFieldF14,
            freeFieldF15: entity.freeFieldF15
        };
    }
}
