import { Serializer } from "@alf/core/models";
import { AmeldingFeedbackErrorIgnoringMonth } from "@alf/models/amelding/amelding-feedback-error-ignoring-month";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AmeldingFeedbackErrorIgnoringMonthSerializer implements Serializer<AmeldingFeedbackErrorIgnoringMonth> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AmeldingFeedbackErrorIgnoringMonth
    deserialize(data: any): AmeldingFeedbackErrorIgnoringMonth | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new AmeldingFeedbackErrorIgnoringMonth(copy);
    }

    serialize(entity: AmeldingFeedbackErrorIgnoringMonth | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AmeldingFeedbackErrorIgnoringMonth, _forceTypeHint?: boolean): any
    serialize(entity: AmeldingFeedbackErrorIgnoringMonth | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AmeldingFeedbackErrorIgnoringMonth.typeNameHint : undefined,
            id: entity.id,
            ameldingId: entity.ameldingId,
            companyId: entity.companyId,
            year: entity.year,
            month: entity.month,
            comment: entity.comment,
            additionalInformation: entity.additionalInformation
        };
    }
}
