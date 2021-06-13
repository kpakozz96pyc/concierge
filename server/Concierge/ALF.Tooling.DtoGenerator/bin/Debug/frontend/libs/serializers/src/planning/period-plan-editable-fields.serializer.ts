import { PeriodTaxDeductionType } from "@alf/models/periods/enums/period-tax-deduction-type";
import { PeriodGarnishmentsType } from "@alf/models/periods/enums/period-garnishments-type";
import { PaymentCycleCreateRuleSerializer } from "../cycle-create/payment-cycle-create-rule.serializer";
import { PeriodPlanCustomizationSerializer } from "./period-plan-customization.serializer";
import { PeriodPlanTextSerializer } from "./period-plan-text.serializer";
import { Serializer } from "@alf/core/models";
import { PeriodPlanEditableFields } from "@alf/models/planning/period-plan-editable-fields";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PeriodPlanEditableFieldsSerializer implements Serializer<PeriodPlanEditableFields> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PeriodPlanEditableFields
    deserialize(data: any): PeriodPlanEditableFields | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.paymentCycleCreateRule = new PaymentCycleCreateRuleSerializer().deserialize(copy.paymentCycleCreateRule);

        copy.customizations = (copy.customizations || []).map(new PeriodPlanCustomizationSerializer().deserialize);

        copy.tableTaxDeduction = PeriodTaxDeductionType[copy.tableTaxDeduction];

        copy.percentTaxDeduction = PeriodTaxDeductionType[copy.percentTaxDeduction];

        copy.tableGarnishments = PeriodGarnishmentsType[copy.tableGarnishments];

        copy.percentGarnishments = PeriodGarnishmentsType[copy.percentGarnishments];

        copy.payslipTexts = (copy.payslipTexts || []).map(new PeriodPlanTextSerializer().deserialize);

        return new PeriodPlanEditableFields(copy);
    }

    serialize(entity: PeriodPlanEditableFields | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PeriodPlanEditableFields, _forceTypeHint?: boolean): any
    serialize(entity: PeriodPlanEditableFields | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PeriodPlanEditableFields.typeNameHint : undefined,
            description: entity.description,
            isActive: entity.isActive,
            periodType: entity.periodType,
            periodPayType: entity.periodPayType,
            periodNumberFormula: entity.periodNumberFormula,
            paymentCycleCreateRule: new PaymentCycleCreateRuleSerializer().serialize(entity.paymentCycleCreateRule, _forceTypeHint),
            customizations: entity.customizations
                ? entity.customizations.map(e => new PeriodPlanCustomizationSerializer().serialize(e, _forceTypeHint))
                : undefined,
            processTemplateId: entity.processTemplateId,
            companyPayDayFormula: entity.companyPayDayFormula,
            useCompanyPayDayFormula: entity.useCompanyPayDayFormula,
            payDateFormula: entity.payDateFormula,
            createDateFormula: entity.createDateFormula,
            doNotCreateFormula: entity.doNotCreateFormula,
            accountingMonthRule: entity.accountingMonthRule,
            subGroups: entity.subGroups,
            tableTaxDeduction: PeriodTaxDeductionType[entity.tableTaxDeduction],
            percentTaxDeduction: PeriodTaxDeductionType[entity.percentTaxDeduction],
            tableGarnishments: PeriodGarnishmentsType[entity.tableGarnishments],
            percentGarnishments: PeriodGarnishmentsType[entity.percentGarnishments],
            calculateCommonArrangements: entity.calculateCommonArrangements,
            stopRecurringTransactions: entity.stopRecurringTransactions,
            prepayDeduction: entity.prepayDeduction,
            periodNameMode: entity.periodNameMode,
            periodNameSimplePrefix: entity.periodNameSimplePrefix,
            periodNameAdvancedTemplate: entity.periodNameAdvancedTemplate,
            payslipTexts: entity.payslipTexts
                ? entity.payslipTexts.map(e => new PeriodPlanTextSerializer().serialize(e, _forceTypeHint))
                : undefined,
            generateVacationPay: entity.generateVacationPay,
            generateDeductionVacationPay: entity.generateDeductionVacationPay
        };
    }
}
