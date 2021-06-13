import { Serializer } from "@alf/core/models";
import { ProcessTemplateSetExtendedInformation } from "@alf/models/extended-information/process-template-set-extended-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessTemplateSetExtendedInformationSerializer implements Serializer<ProcessTemplateSetExtendedInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessTemplateSetExtendedInformation
    deserialize(data: any): ProcessTemplateSetExtendedInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ProcessTemplateSetExtendedInformation(copy);
    }

    serialize(entity: ProcessTemplateSetExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessTemplateSetExtendedInformation, _forceTypeHint?: boolean): any
    serialize(entity: ProcessTemplateSetExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessTemplateSetExtendedInformation.typeNameHint : undefined,
            isSystemShipped: entity.isSystemShipped,
            description: entity.description
        };
    }
}
