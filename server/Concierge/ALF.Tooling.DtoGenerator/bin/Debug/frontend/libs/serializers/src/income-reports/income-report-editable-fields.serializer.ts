import { IncomeReportBenefitDataSerializer } from "./income-report-benefit-data.serializer";
import { IncomeReportFringeBenefitChangeSerializer } from "./income-report-fringe-benefit-change.serializer";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { IncomeReportEditableFields } from "@alf/models/income-reports/income-report-editable-fields";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IncomeReportEditableFieldsSerializer implements Serializer<IncomeReportEditableFields> {

    deserialize(data: undefined): undefined
    deserialize(data: any): IncomeReportEditableFields
    deserialize(data: any): IncomeReportEditableFields | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.reimbursementEndDate !== undefined)
            copy.reimbursementEndDate = new Date(copy.reimbursementEndDate);

        copy.fringeBenefitChanges = (copy.fringeBenefitChanges || []).map(new IncomeReportFringeBenefitChangeSerializer().deserialize);

        copy.benefitData = new IncomeReportBenefitDataSerializer().deserialize(copy.benefitData);

        return new IncomeReportEditableFields(copy);
    }

    serialize(entity: IncomeReportEditableFields | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: IncomeReportEditableFields, _forceTypeHint?: boolean): any
    serialize(entity: IncomeReportEditableFields | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? IncomeReportEditableFields.typeNameHint : undefined,
            hasCloseRelation: entity.hasCloseRelation,
            senderName: entity.senderName,
            senderPhoneNumber: entity.senderPhoneNumber,
            income: entity.income,
            incomeChangeReason: entity.incomeChangeReason,
            reimbursementAmountPerMonth: entity.reimbursementAmountPerMonth,
            reimbursementEndDate: serializeDate(entity.reimbursementEndDate),
            fringeBenefitChanges: entity.fringeBenefitChanges
                ? entity.fringeBenefitChanges.map(e => new IncomeReportFringeBenefitChangeSerializer().serialize(e, _forceTypeHint))
                : undefined,
            benefitData: new IncomeReportBenefitDataSerializer().serialize(entity.benefitData, _forceTypeHint)
        };
    }
}
