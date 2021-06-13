import { Serializer } from "@alf/core/models";
import { ProcessTemplateExtendedInformation } from "@alf/models/extended-information/process-template-extended-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessTemplateExtendedInformationSerializer implements Serializer<ProcessTemplateExtendedInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessTemplateExtendedInformation
    deserialize(data: any): ProcessTemplateExtendedInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ProcessTemplateExtendedInformation(copy);
    }

    serialize(entity: ProcessTemplateExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessTemplateExtendedInformation, _forceTypeHint?: boolean): any
    serialize(entity: ProcessTemplateExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessTemplateExtendedInformation.typeNameHint : undefined,
            isSystemShipped: entity.isSystemShipped,
            description: entity.description,
            processTemplateType: entity.processTemplateType
        };
    }
}
