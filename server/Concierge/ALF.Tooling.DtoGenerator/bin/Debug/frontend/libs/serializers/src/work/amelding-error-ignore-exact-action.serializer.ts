import { Serializer } from "@alf/core/models";
import { AmeldingErrorIgnoreExactAction } from "@alf/models/work/amelding-error-ignore-exact-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AmeldingErrorIgnoreExactActionSerializer implements Serializer<AmeldingErrorIgnoreExactAction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AmeldingErrorIgnoreExactAction
    deserialize(data: any): AmeldingErrorIgnoreExactAction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new AmeldingErrorIgnoreExactAction(copy);
    }

    serialize(entity: AmeldingErrorIgnoreExactAction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AmeldingErrorIgnoreExactAction, _forceTypeHint?: boolean): any
    serialize(entity: AmeldingErrorIgnoreExactAction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            companyId: entity.companyId,
            ameldingId: entity.ameldingId,
            internalEntity: entity.internalEntity,
            ameldingErrorId: entity.ameldingErrorId,
            mostSevereSeverity: entity.mostSevereSeverity
        };
    }
}
