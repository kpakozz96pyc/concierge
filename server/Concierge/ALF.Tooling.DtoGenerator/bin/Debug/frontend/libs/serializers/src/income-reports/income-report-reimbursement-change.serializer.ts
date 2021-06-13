import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { IncomeReportReimbursementChange } from "@alf/models/income-reports/income-report-reimbursement-change";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IncomeReportReimbursementChangeSerializer implements Serializer<IncomeReportReimbursementChange> {

    deserialize(data: undefined): undefined
    deserialize(data: any): IncomeReportReimbursementChange
    deserialize(data: any): IncomeReportReimbursementChange | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.changeDate = new Date(copy.changeDate);

        return new IncomeReportReimbursementChange(copy);
    }

    serialize(entity: IncomeReportReimbursementChange | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: IncomeReportReimbursementChange, _forceTypeHint?: boolean): any
    serialize(entity: IncomeReportReimbursementChange | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? IncomeReportReimbursementChange.typeNameHint : undefined,
            changeDate: serializeDate(entity.changeDate),
            amount: entity.amount
        };
    }
}
