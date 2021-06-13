import { AmeldingFeedbackErrorIgnoringExactSerializer } from "./amelding-feedback-error-ignoring-exact.serializer";
import { Serializer } from "@alf/core/models";
import { AmeldingFeedbackErrorIgnoringExactSet } from "@alf/models/amelding/amelding-feedback-error-ignoring-exact-set";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AmeldingFeedbackErrorIgnoringExactSetSerializer implements Serializer<AmeldingFeedbackErrorIgnoringExactSet> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AmeldingFeedbackErrorIgnoringExactSet
    deserialize(data: any): AmeldingFeedbackErrorIgnoringExactSet | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.ignorings = (copy.ignorings || []).map(new AmeldingFeedbackErrorIgnoringExactSerializer().deserialize);

        return new AmeldingFeedbackErrorIgnoringExactSet(copy);
    }

    serialize(entity: AmeldingFeedbackErrorIgnoringExactSet | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AmeldingFeedbackErrorIgnoringExactSet, _forceTypeHint?: boolean): any
    serialize(entity: AmeldingFeedbackErrorIgnoringExactSet | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AmeldingFeedbackErrorIgnoringExactSet.typeNameHint : undefined,
            companyId: entity.companyId,
            year: entity.year,
            month: entity.month,
            ameldingId: entity.ameldingId,
            ignorings: entity.ignorings
                ? entity.ignorings.map(e => new AmeldingFeedbackErrorIgnoringExactSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
