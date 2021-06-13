import { PeriodTaxDeductionType } from "@alf/models/periods/enums/period-tax-deduction-type";
import { PeriodGarnishmentsType } from "@alf/models/periods/enums/period-garnishments-type";
import { PeriodPlanTextSerializer } from "./period-plan-text.serializer";
import { Serializer } from "@alf/core/models";
import { PeriodPlanCustomizableFields } from "@alf/models/planning/period-plan-customizable-fields";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PeriodPlanCustomizableFieldsSerializer implements Serializer<PeriodPlanCustomizableFields> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PeriodPlanCustomizableFields
    deserialize(data: any): PeriodPlanCustomizableFields | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.tableTaxDeduction = PeriodTaxDeductionType[copy.tableTaxDeduction];

        copy.percentTaxDeduction = PeriodTaxDeductionType[copy.percentTaxDeduction];

        copy.tableGarnishments = PeriodGarnishmentsType[copy.tableGarnishments];

        copy.percentGarnishments = PeriodGarnishmentsType[copy.percentGarnishments];

        copy.payslipTexts = (copy.payslipTexts || []).map(new PeriodPlanTextSerializer().deserialize);

        return new PeriodPlanCustomizableFields(copy);
    }

    serialize(entity: PeriodPlanCustomizableFields | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PeriodPlanCustomizableFields, _forceTypeHint?: boolean): any
    serialize(entity: PeriodPlanCustomizableFields | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PeriodPlanCustomizableFields.typeNameHint : undefined,
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
