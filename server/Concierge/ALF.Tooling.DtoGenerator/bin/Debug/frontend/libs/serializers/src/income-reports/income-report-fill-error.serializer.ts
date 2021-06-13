import { Serializer } from "@alf/core/models";
import { IncomeReportFillError } from "@alf/models/income-reports/income-report-fill-error";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IncomeReportFillErrorSerializer implements Serializer<IncomeReportFillError> {

    deserialize(data: undefined): undefined
    deserialize(data: any): IncomeReportFillError
    deserialize(data: any): IncomeReportFillError | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new IncomeReportFillError(copy);
    }

    serialize(entity: IncomeReportFillError | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: IncomeReportFillError, _forceTypeHint?: boolean): any
    serialize(entity: IncomeReportFillError | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? IncomeReportFillError.typeNameHint : undefined,
            mustBeFixed: entity.mustBeFixed,
            message: entity.message
        };
    }
}
