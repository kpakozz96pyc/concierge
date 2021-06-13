import { Serializer } from "@alf/core/models";
import { AmeldingFeedbackErrorIgnoringExact } from "@alf/models/amelding/amelding-feedback-error-ignoring-exact";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AmeldingFeedbackErrorIgnoringExactSerializer implements Serializer<AmeldingFeedbackErrorIgnoringExact> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AmeldingFeedbackErrorIgnoringExact
    deserialize(data: any): AmeldingFeedbackErrorIgnoringExact | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new AmeldingFeedbackErrorIgnoringExact(copy);
    }

    serialize(entity: AmeldingFeedbackErrorIgnoringExact | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AmeldingFeedbackErrorIgnoringExact, _forceTypeHint?: boolean): any
    serialize(entity: AmeldingFeedbackErrorIgnoringExact | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AmeldingFeedbackErrorIgnoringExact.typeNameHint : undefined,
            ameldingErrorId: entity.ameldingErrorId,
            internalEntity: entity.internalEntity
        };
    }
}
