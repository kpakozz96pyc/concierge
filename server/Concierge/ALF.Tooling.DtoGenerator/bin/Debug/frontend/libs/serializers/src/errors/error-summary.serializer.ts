import { AmeldingFeedbackErrorIgnoringMonthSerializer } from "../amelding/amelding-feedback-error-ignoring-month.serializer";
import { RootLevelErrorSerializer } from "./root-level-error.serializer";
import { EmployeeWithErrorsSerializer } from "./employee-with-errors.serializer";
import { Serializer } from "@alf/core/models";
import { ErrorSummary } from "@alf/models/errors/error-summary";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ErrorSummarySerializer implements Serializer<ErrorSummary> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ErrorSummary
    deserialize(data: any): ErrorSummary | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.rootLevelErrors = (copy.rootLevelErrors || []).map(new RootLevelErrorSerializer().deserialize);

        copy.employeesWithErrors = (copy.employeesWithErrors || []).map(new EmployeeWithErrorsSerializer().deserialize);

        copy.ameldingFeedbackErrorIgnoringMonth = new AmeldingFeedbackErrorIgnoringMonthSerializer().deserialize(copy.ameldingFeedbackErrorIgnoringMonth);

        return new ErrorSummary(copy);
    }

    serialize(entity: ErrorSummary | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ErrorSummary, _forceTypeHint?: boolean): any
    serialize(entity: ErrorSummary | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ErrorSummary.typeNameHint : undefined,
            rootLevelErrors: entity.rootLevelErrors
                ? entity.rootLevelErrors.map(e => new RootLevelErrorSerializer().serialize(e, _forceTypeHint))
                : undefined,
            employeesWithErrors: entity.employeesWithErrors
                ? entity.employeesWithErrors.map(e => new EmployeeWithErrorsSerializer().serialize(e, _forceTypeHint))
                : undefined,
            ameldingFeedbackErrorIgnoringMonth: new AmeldingFeedbackErrorIgnoringMonthSerializer().serialize(entity.ameldingFeedbackErrorIgnoringMonth, _forceTypeHint)
        };
    }
}
