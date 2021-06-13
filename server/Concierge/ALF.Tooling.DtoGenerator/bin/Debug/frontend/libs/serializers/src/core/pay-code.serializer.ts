import { PayCodeAllowedTransactionType } from "@alf/models/core/enums/pay-code-allowed-transaction-type";
import { PayCodeLogType } from "@alf/models/core/enums/pay-code-log-type";
import { PayCodeAGAFeeType } from "@alf/models/core/enums/pay-code-agafee-type";
import { PayCodeTaxationBasisType } from "@alf/models/core/enums/pay-code-taxation-basis-type";
import { PayCodeOverrideTaxationType } from "@alf/models/core/enums/pay-code-override-taxation-type";
import { TransactionValueField } from "@alf/models/core/enums/transaction-value-field";
import { InvertTransactionAction } from "@alf/models/core/enums/invert-transaction-action";
import { PayCodeNetSalaryBasisType } from "@alf/models/core/enums/pay-code-net-salary-basis-type";
import { PayCodeVacationBasisType } from "@alf/models/core/enums/pay-code-vacation-basis-type";
import { PayCodePaymentType } from "@alf/models/core/enums/pay-code-payment-type";
import { PayCodePaymentAccountType } from "@alf/models/core/enums/pay-code-payment-account-type";
import { NonMonetaryTransferCode } from "@alf/models/pay-codes/enums/non-monetary-transfer-code";
import { PayCodeDeductionType } from "@alf/models/core/enums/pay-code-deduction-type";
import { CalculationCode } from "@alf/models/pay-codes/enums/calculation-code";
import { ReimbursementInclusion } from "@alf/models/pay-codes/enums/reimbursement-inclusion";
import { PayCodeBasisType } from "@alf/models/core/enums/pay-code-basis-type";
import { PayCodeMaskBehavior } from "@alf/models/core/enums/pay-code-mask-behavior";
import { AdditionalInformationSerializer } from "../additional-information/additional-information.serializer";
import { Serializer } from "@alf/core/models";
import { PayCode } from "@alf/models/core/pay-code";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PayCodeSerializer implements Serializer<PayCode> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PayCode
    deserialize(data: any): PayCode | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.allowedTransactionType = PayCodeAllowedTransactionType[copy.allowedTransactionType];

        copy.logType = PayCodeLogType[copy.logType];

        copy.agaFeeCode = PayCodeAGAFeeType[copy.agaFeeCode];

        copy.taxationBasisCode = PayCodeTaxationBasisType[copy.taxationBasisCode];

        copy.overrideTaxationCode = PayCodeOverrideTaxationType[copy.overrideTaxationCode];

        if (copy.netSalaryBasisCode !== undefined)
            copy.netSalaryBasisCode = PayCodeNetSalaryBasisType[copy.netSalaryBasisCode];

        if (copy.vacationBasisCode1 !== undefined)
            copy.vacationBasisCode1 = PayCodeVacationBasisType[copy.vacationBasisCode1];

        if (copy.vacationBasisCode2 !== undefined)
            copy.vacationBasisCode2 = PayCodeVacationBasisType[copy.vacationBasisCode2];

        if (copy.vacationBasisCode3 !== undefined)
            copy.vacationBasisCode3 = PayCodeVacationBasisType[copy.vacationBasisCode3];

        if (copy.paymentTypeCode !== undefined)
            copy.paymentTypeCode = PayCodePaymentType[copy.paymentTypeCode];

        if (copy.paymentAccountCode !== undefined)
            copy.paymentAccountCode = PayCodePaymentAccountType[copy.paymentAccountCode];

        if (copy.nonMonetaryTransferCode !== undefined)
            copy.nonMonetaryTransferCode = NonMonetaryTransferCode[copy.nonMonetaryTransferCode];

        if (copy.deductionTypeCode !== undefined)
            copy.deductionTypeCode = PayCodeDeductionType[copy.deductionTypeCode];

        if (copy.calculationCode !== undefined)
            copy.calculationCode = CalculationCode[copy.calculationCode];

        copy.accumulatorBasis = Object.keys(copy.accumulatorBasis).reduce((accumulator, current) => {
            accumulator[current] = PayCodeBasisType[copy.accumulatorBasis[current]];
            return accumulator;
        }, {} as Dictionary<any>);

        copy.calculationBasis = Object.keys(copy.calculationBasis).reduce((accumulator, current) => {
            accumulator[current] = PayCodeBasisType[copy.calculationBasis[current]];
            return accumulator;
        }, {} as Dictionary<any>);

        copy.importReversalCode1 = TransactionValueField[copy.importReversalCode1];

        copy.importReversalActionCode1 = InvertTransactionAction[copy.importReversalActionCode1];

        copy.importReversalCode2 = TransactionValueField[copy.importReversalCode2];

        copy.importReversalActionCode2 = InvertTransactionAction[copy.importReversalActionCode2];

        copy.importReversalCode3 = TransactionValueField[copy.importReversalCode3];

        copy.importReversalActionCode3 = InvertTransactionAction[copy.importReversalActionCode3];

        copy.importReversalCode4 = TransactionValueField[copy.importReversalCode4];

        copy.importReversalActionCode4 = InvertTransactionAction[copy.importReversalActionCode4];

        if (copy.reimbursementInclusionCode !== undefined)
            copy.reimbursementInclusionCode = ReimbursementInclusion[copy.reimbursementInclusionCode];

        copy.additionalInformation = new AdditionalInformationSerializer().deserialize(copy.additionalInformation);

        copy.masks = Object.keys(copy.masks).reduce((accumulator, current) => {
            accumulator[current] = PayCodeMaskBehavior[copy.masks[current]];
            return accumulator;
        }, {} as Dictionary<any>);

        return initializeDefaultValues(new PayCode(copy));
    }

    serialize(entity: PayCode | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PayCode, _forceTypeHint?: boolean): any
    serialize(entity: PayCode | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        entity! = initializeDefaultValues(entity);
        return {
            $type: _forceTypeHint ? PayCode.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            payCodeNumber: entity.payCodeNumber,
            isDeduction: entity.isDeduction,
            isPayable: entity.isPayable,
            isTax: entity.isTax,
            isPersonalOnly: entity.isPersonalOnly,
            deductionOwnerId: entity.deductionOwnerId,
            links: entity.links,
            description: entity.description,
            allowedTransactionType: PayCodeAllowedTransactionType[entity.allowedTransactionType],
            logType: PayCodeLogType[entity.logType],
            isBalance: entity.isBalance,
            agaFeeCode: PayCodeAGAFeeType[entity.agaFeeCode],
            taxationBasisCode: PayCodeTaxationBasisType[entity.taxationBasisCode],
            overrideTaxationCode: PayCodeOverrideTaxationType[entity.overrideTaxationCode],
            isSvalbardTaxation: entity.isSvalbardTaxation,
            isSeafarersDeduction: entity.isSeafarersDeduction,
            includedInBasisForAFP: entity.includedInBasisForAFP,
            netSalaryBasisCode: entity.netSalaryBasisCode !== null && entity.netSalaryBasisCode !== undefined
                ? PayCodeNetSalaryBasisType[entity.netSalaryBasisCode]
                : undefined,
            vacationBasisCode1: entity.vacationBasisCode1 !== null && entity.vacationBasisCode1 !== undefined
                ? PayCodeVacationBasisType[entity.vacationBasisCode1]
                : undefined,
            vacationBasisCode2: entity.vacationBasisCode2 !== null && entity.vacationBasisCode2 !== undefined
                ? PayCodeVacationBasisType[entity.vacationBasisCode2]
                : undefined,
            vacationBasisCode3: entity.vacationBasisCode3 !== null && entity.vacationBasisCode3 !== undefined
                ? PayCodeVacationBasisType[entity.vacationBasisCode3]
                : undefined,
            generateVacationDeductionCode: entity.generateVacationDeductionCode,
            vacationDeductionPayCodeNumber: entity.vacationDeductionPayCodeNumber,
            paymentTypeCode: entity.paymentTypeCode !== null && entity.paymentTypeCode !== undefined
                ? PayCodePaymentType[entity.paymentTypeCode]
                : undefined,
            paymentAccountCode: entity.paymentAccountCode !== null && entity.paymentAccountCode !== undefined
                ? PayCodePaymentAccountType[entity.paymentAccountCode]
                : undefined,
            transferAccountingCode: entity.transferAccountingCode,
            copyActivityCodeFromEmployment: entity.copyActivityCodeFromEmployment,
            transactionAccountingId: entity.transactionAccountingId,
            transactionOffsettAccountingCode: entity.transactionOffsettAccountingCode,
            accountingDescriptionCode: entity.accountingDescriptionCode,
            nonMonetaryTransferCode: entity.nonMonetaryTransferCode !== null && entity.nonMonetaryTransferCode !== undefined
                ? NonMonetaryTransferCode[entity.nonMonetaryTransferCode]
                : undefined,
            transactionHoursAccountingCode: entity.transactionHoursAccountingCode,
            transactionNumbersAccountingCode: entity.transactionNumbersAccountingCode,
            updateYearlyTotalsCode: entity.updateYearlyTotalsCode,
            accumulateHoursCode: entity.accumulateHoursCode,
            overTimeGroupCode: entity.overTimeGroupCode,
            includeInFixedSalaryCode: entity.includeInFixedSalaryCode,
            reduceFixedSalaryCode: entity.reduceFixedSalaryCode,
            terminationNoticeCode: entity.terminationNoticeCode,
            deductionTypeCode: entity.deductionTypeCode !== null && entity.deductionTypeCode !== undefined
                ? PayCodeDeductionType[entity.deductionTypeCode]
                : undefined,
            getDeductionOwnerFromCode: entity.getDeductionOwnerFromCode,
            deductionOwnerCode: entity.deductionOwnerCode,
            partialCalculationRecurring: entity.partialCalculationRecurring,
            partialCalculationVariable: entity.partialCalculationVariable,
            partialCalculationAmount: entity.partialCalculationAmount,
            partialCalculationHours: entity.partialCalculationHours,
            partialCalculationNumbers: entity.partialCalculationNumbers,
            calculationCode: entity.calculationCode !== null && entity.calculationCode !== undefined
                ? CalculationCode[entity.calculationCode]
                : undefined,
            deviatingCalculationCode: entity.deviatingCalculationCode,
            payCodeAdjustBalance: entity.payCodeAdjustBalance,
            electronicCommunicationUsageCode: entity.electronicCommunicationUsageCode,
            companyCarCompensationCode: entity.companyCarCompensationCode,
            dependencyCode: entity.dependencyCode,
            roundingRuleCode: entity.roundingRuleCode,
            regulativeRateACode: entity.regulativeRateACode,
            regulativeRateBCode: entity.regulativeRateBCode,
            employeeRateCode: entity.employeeRateCode,
            rateBasisCode: entity.rateBasisCode,
            rateBasisTableCode: entity.rateBasisTableCode,
            rateBasisFieldCode: entity.rateBasisFieldCode,
            rateBasisTableUsageCode: entity.rateBasisTableUsageCode,
            rateTableCode: entity.rateTableCode,
            ratePercentage: entity.ratePercentage,
            rateAccumulatorPercentage: entity.rateAccumulatorPercentage,
            rateMinimum: entity.rateMinimum,
            rateMaximum: entity.rateMaximum,
            payCodeRate: entity.payCodeRate,
            rateOffsetCode: entity.rateOffsetCode,
            basisAquiredFromCode: entity.basisAquiredFromCode,
            basisTableAquiredFromCode: entity.basisTableAquiredFromCode,
            basisFieldAquiredFromCode: entity.basisFieldAquiredFromCode,
            basisTableAquiredFromUsageCode: entity.basisTableAquiredFromUsageCode,
            basisRateTableAquiredFromCode: entity.basisRateTableAquiredFromCode,
            hoursAquiredFromCode: entity.hoursAquiredFromCode,
            hoursTableAquiredFromCode: entity.hoursTableAquiredFromCode,
            hoursFieldAquiredFromCode: entity.hoursFieldAquiredFromCode,
            hoursTableAquiredFromUsageCode: entity.hoursTableAquiredFromUsageCode,
            hoursRateTableAquiredFromCode: entity.hoursRateTableAquiredFromCode,
            numbersAquiredFromCode: entity.numbersAquiredFromCode,
            numbersTableAquiredFromCode: entity.numbersTableAquiredFromCode,
            numbersFieldAquiredFromCode: entity.numbersFieldAquiredFromCode,
            numbersTableAquiredFromUsageCode: entity.numbersTableAquiredFromUsageCode,
            numbersRateTableAquiredFromCode: entity.numbersRateTableAquiredFromCode,
            allowAttachmentInCustomerPortal: entity.allowAttachmentInCustomerPortal,
            allowAttachmentInManagerPortal: entity.allowAttachmentInManagerPortal,
            allowAttachmentInEmployeePortal: entity.allowAttachmentInEmployeePortal,
            allowAttachmentInPayrollPortal: entity.allowAttachmentInPayrollPortal,
            allowAttachmentInImport: entity.allowAttachmentInImport,
            requiredAttachmentInWebTrans: entity.requiredAttachmentInWebTrans,
            requiredAttachmentInVariableTrans: entity.requiredAttachmentInVariableTrans,
            requiredAttachmentInFixedTrans: entity.requiredAttachmentInFixedTrans,
            accumulatorBasis: entity.accumulatorBasis
                ? Object.keys(entity.accumulatorBasis).reduce((accumulator, current) => {
                    accumulator[current] = PayCodeBasisType[(entity!.accumulatorBasis as any)[current]];
                    return accumulator;
                }, {} as Dictionary<any>)
                : undefined,
            calculationBasis: entity.calculationBasis
                ? Object.keys(entity.calculationBasis).reduce((accumulator, current) => {
                    accumulator[current] = PayCodeBasisType[(entity!.calculationBasis as any)[current]];
                    return accumulator;
                }, {} as Dictionary<any>)
                : undefined,
            salaryReportCode1: entity.salaryReportCode1,
            salaryReportCode2: entity.salaryReportCode2,
            salaryReportCode3: entity.salaryReportCode3,
            salaryReportCode4: entity.salaryReportCode4,
            salaryReportCode5: entity.salaryReportCode5,
            salaryReportCode6: entity.salaryReportCode6,
            salaryReportCode10: entity.salaryReportCode10,
            visibilityInSalaryCardCode: entity.visibilityInSalaryCardCode,
            pensionKLPCode: entity.pensionKLPCode,
            statisticsSSBCode: entity.statisticsSSBCode,
            nrfReportCode: entity.nrfReportCode,
            statisticsSSTCode: entity.statisticsSSTCode,
            paiReportCode: entity.paiReportCode,
            navoActionCode: entity.navoActionCode,
            pensionPaymentReportingCode: entity.pensionPaymentReportingCode,
            pensionInsuranceReportCode: entity.pensionInsuranceReportCode,
            pensionStatusReportCode: entity.pensionStatusReportCode,
            importReversalCode1: TransactionValueField[entity.importReversalCode1],
            importReversalActionCode1: InvertTransactionAction[entity.importReversalActionCode1],
            importReversalStopAfter1: entity.importReversalStopAfter1,
            importReversalCode2: TransactionValueField[entity.importReversalCode2],
            importReversalActionCode2: InvertTransactionAction[entity.importReversalActionCode2],
            importReversalStopAfter2: entity.importReversalStopAfter2,
            importReversalCode3: TransactionValueField[entity.importReversalCode3],
            importReversalActionCode3: InvertTransactionAction[entity.importReversalActionCode3],
            importReversalStopAfter3: entity.importReversalStopAfter3,
            importReversalCode4: TransactionValueField[entity.importReversalCode4],
            importReversalActionCode4: InvertTransactionAction[entity.importReversalActionCode4],
            importHoursActionCode: entity.importHoursActionCode,
            linkTriggerCode: entity.linkTriggerCode,
            showZeroTransactionsOnSlipCode: entity.showZeroTransactionsOnSlipCode,
            accumulateTransactionsOnSlipCode: entity.accumulateTransactionsOnSlipCode,
            showAccumulatedNumbersOnSlipCode: entity.showAccumulatedNumbersOnSlipCode,
            showAccumulatedHoursOnSlipCode: entity.showAccumulatedHoursOnSlipCode,
            showAccumulatedRatesOnSlipCode: entity.showAccumulatedRatesOnSlipCode,
            showAccumulatedBasisOnSlipCode: entity.showAccumulatedBasisOnSlipCode,
            showYearToDateOnSlipCode: entity.showYearToDateOnSlipCode,
            showYearToDateNumbersOnSlip: entity.showYearToDateNumbersOnSlip,
            showYearToDateHoursOnSlip: entity.showYearToDateHoursOnSlip,
            personalTransactionCode: entity.personalTransactionCode,
            backPaymentPayCode: entity.backPaymentPayCode,
            travelCode: entity.travelCode,
            extraTime: entity.extraTime,
            voucherReferanceAccessCode: entity.voucherReferanceAccessCode,
            textFieldAccessCode: entity.textFieldAccessCode,
            servicePayCode: entity.servicePayCode,
            reimbursementInclusionCode: entity.reimbursementInclusionCode !== null && entity.reimbursementInclusionCode !== undefined
                ? ReimbursementInclusion[entity.reimbursementInclusionCode]
                : undefined,
            adjustAmountForGradedMaturnaty: entity.adjustAmountForGradedMaturnaty,
            roundingDDAM: entity.roundingDDAM,
            statisticsCode1: entity.statisticsCode1,
            statisticsCode2: entity.statisticsCode2,
            statisticsCode3: entity.statisticsCode3,
            statisticsCode4: entity.statisticsCode4,
            aMeldingShouldReport: entity.aMeldingShouldReport,
            aMeldingReportTypeCode: entity.aMeldingReportTypeCode,
            aMeldingSailor24hOnBoardCode: entity.aMeldingSailor24hOnBoardCode,
            aMeldingOverstyrtRapporteringAvSkatteregel: entity.aMeldingOverstyrtRapporteringAvSkatteregel,
            aMeldingOverstyrtRapporteringAvTrekkplikt: entity.aMeldingOverstyrtRapporteringAvTrekkplikt,
            aMeldingIncomeTypeCode: entity.aMeldingIncomeTypeCode,
            aMeldingAdvantageCode: entity.aMeldingAdvantageCode,
            aMeldingDescriptionCode: entity.aMeldingDescriptionCode,
            aMeldingReportNumbersCode: entity.aMeldingReportNumbersCode,
            aMeldingDemandsSpesification: entity.aMeldingDemandsSpesification,
            aMeldingOpptjHjelpefartoy: entity.aMeldingOpptjHjelpefartoy,
            aMeldingBrukSkattemessigBosattILand: entity.aMeldingBrukSkattemessigBosattILand,
            aMeldingErOpptjentPaaKontinentalsokkel: entity.aMeldingErOpptjentPaaKontinentalsokkel,
            aMeldingHentOpptjeningsLand: entity.aMeldingHentOpptjeningsLand,
            aMeldingUseAdditionalInformation: entity.aMeldingUseAdditionalInformation,
            aMeldingAdditionalInformationTypeCode: entity.aMeldingAdditionalInformationTypeCode,
            aMeldingAdditionalInformationSubTypeCode: entity.aMeldingAdditionalInformationSubTypeCode,
            aMeldingAdditionalInformationSubTypeVersionCode: entity.aMeldingAdditionalInformationSubTypeVersionCode,
            additionalInformation: new AdditionalInformationSerializer().serialize(entity.additionalInformation, _forceTypeHint),
            masks: entity.masks
                ? Object.keys(entity.masks).reduce((accumulator, current) => {
                    accumulator[current] = PayCodeMaskBehavior[(entity!.masks as any)[current]];
                    return accumulator;
                }, {} as Dictionary<any>)
                : undefined,
            linkTriggerBehavior: entity.linkTriggerBehavior,
            rateTableId: entity.rateTableId,
            basisTableId: entity.basisTableId,
            hoursTableId: entity.hoursTableId,
            numberTableId: entity.numberTableId,
            ratePayCodeBalance: entity.ratePayCodeBalance,
            basisPayCodeBalance: entity.basisPayCodeBalance,
            hoursPayCodeBalance: entity.hoursPayCodeBalance,
            numberPayCodeBalance: entity.numberPayCodeBalance,
            payslipText: entity.payslipText
        };
    }
}

function initializeDefaultValues(value: PayCode): PayCode {
    const model = new PayCode(value);
    ([
        "payCodeNumber",
        "generateVacationDeductionCode",
        "vacationDeductionPayCodeNumber",
        "accountingDescriptionCode",
        "updateYearlyTotalsCode",
        "accumulateHoursCode",
        "overTimeGroupCode",
        "reduceFixedSalaryCode",
        "terminationNoticeCode",
        "getDeductionOwnerFromCode",
        "deductionOwnerCode",
        "payCodeAdjustBalance",
        "electronicCommunicationUsageCode",
        "companyCarCompensationCode",
        "dependencyCode",
        "roundingRuleCode",
        "regulativeRateACode",
        "regulativeRateBCode",
        "employeeRateCode",
        "rateBasisCode",
        "rateBasisTableCode",
        "rateBasisFieldCode",
        "rateBasisTableUsageCode",
        "rateTableCode",
        "rateOffsetCode",
        "basisAquiredFromCode",
        "basisTableAquiredFromCode",
        "basisFieldAquiredFromCode",
        "basisTableAquiredFromUsageCode",
        "basisRateTableAquiredFromCode",
        "hoursAquiredFromCode",
        "hoursTableAquiredFromCode",
        "hoursFieldAquiredFromCode",
        "hoursTableAquiredFromUsageCode",
        "hoursRateTableAquiredFromCode",
        "numbersAquiredFromCode",
        "numbersTableAquiredFromCode",
        "numbersFieldAquiredFromCode",
        "numbersTableAquiredFromUsageCode",
        "numbersRateTableAquiredFromCode",
        "salaryReportCode1",
        "salaryReportCode2",
        "salaryReportCode3",
        "salaryReportCode4",
        "salaryReportCode5",
        "salaryReportCode10",
        "pensionKLPCode",
        "statisticsSSBCode",
        "nrfReportCode",
        "statisticsSSTCode",
        "paiReportCode",
        "pensionPaymentReportingCode",
        "pensionInsuranceReportCode",
        "pensionStatusReportCode",
        "linkTriggerCode",
        "showZeroTransactionsOnSlipCode",
        "showAccumulatedNumbersOnSlipCode",
        "showAccumulatedHoursOnSlipCode",
        "showAccumulatedRatesOnSlipCode",
        "showAccumulatedBasisOnSlipCode",
        "showYearToDateOnSlipCode",
        "backPaymentPayCode",
        "voucherReferanceAccessCode",
        "textFieldAccessCode",
        "roundingDDAM",
        "aMeldingReportTypeCode",
        "aMeldingSailor24hOnBoardCode",
        "aMeldingOverstyrtRapporteringAvTrekkplikt",
        "aMeldingReportNumbersCode",
        "aMeldingErOpptjentPaaKontinentalsokkel",
        "linkTriggerBehavior",
        "ratePayCodeBalance",
        "basisPayCodeBalance",
        "hoursPayCodeBalance",
        "numberPayCodeBalance"
    ] as PropertiesOfType<PayCode, number>[]).forEach(key => model[key] = (model[key] || 0) as never);

    ([
        "isDeduction",
        "isPayable",
        "isTax",
        "isPersonalOnly",
        "isBalance",
        "isSvalbardTaxation",
        "isSeafarersDeduction",
        "includedInBasisForAFP",
        "includeInFixedSalaryCode",
        "allowAttachmentInCustomerPortal",
        "allowAttachmentInManagerPortal",
        "allowAttachmentInEmployeePortal",
        "allowAttachmentInPayrollPortal",
        "allowAttachmentInImport",
        "requiredAttachmentInWebTrans",
        "requiredAttachmentInVariableTrans",
        "requiredAttachmentInFixedTrans",
        "salaryReportCode6",
        "visibilityInSalaryCardCode",
        "adjustAmountForGradedMaturnaty",
        "aMeldingShouldReport"
    ] as PropertiesOfType<PayCode, boolean>[]).forEach(key => model[key] = model[key] || false);

    model.allowedTransactionType = model.allowedTransactionType || PayCodeAllowedTransactionType.Any;
    model.logType = model.logType || PayCodeLogType.NoLogging;
    model.agaFeeCode = model.agaFeeCode || PayCodeAGAFeeType.NoPartOfBasis;
    model.taxationBasisCode = model.taxationBasisCode || PayCodeTaxationBasisType.NoPartOfBasis;
    model.overrideTaxationCode = model.overrideTaxationCode || PayCodeOverrideTaxationType.NoChange;
    model.importReversalCode1 = model.importReversalCode1 || TransactionValueField.None;
    model.importReversalActionCode1 = model.importReversalActionCode1 || InvertTransactionAction.Copy;
    model.importReversalCode2 = model.importReversalCode2 || TransactionValueField.None;
    model.importReversalActionCode2 = model.importReversalActionCode2 || InvertTransactionAction.Copy;
    model.importReversalCode3 = model.importReversalCode3 || TransactionValueField.None;
    model.importReversalActionCode3 = model.importReversalActionCode3 || InvertTransactionAction.Copy;
    model.importReversalCode4 = model.importReversalCode4 || TransactionValueField.None;
    model.importReversalActionCode4 = model.importReversalActionCode4 || InvertTransactionAction.Copy;
    return model;
}
