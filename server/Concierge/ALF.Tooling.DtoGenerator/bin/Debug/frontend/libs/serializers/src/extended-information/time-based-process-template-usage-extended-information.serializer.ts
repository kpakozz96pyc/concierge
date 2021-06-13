import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { TimeBasedProcessTemplateUsageExtendedInformation } from "@alf/models/extended-information/time-based-process-template-usage-extended-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TimeBasedProcessTemplateUsageExtendedInformationSerializer implements Serializer<TimeBasedProcessTemplateUsageExtendedInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TimeBasedProcessTemplateUsageExtendedInformation
    deserialize(data: any): TimeBasedProcessTemplateUsageExtendedInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.useFrom = new Date(copy.useFrom);

        if (copy.useUntil !== undefined)
            copy.useUntil = new Date(copy.useUntil);

        return new TimeBasedProcessTemplateUsageExtendedInformation(copy);
    }

    serialize(entity: TimeBasedProcessTemplateUsageExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TimeBasedProcessTemplateUsageExtendedInformation, _forceTypeHint?: boolean): any
    serialize(entity: TimeBasedProcessTemplateUsageExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? TimeBasedProcessTemplateUsageExtendedInformation.typeNameHint : undefined,
            processTemplateId: entity.processTemplateId,
            useFrom: serializeDate(entity.useFrom),
            useUntil: serializeDate(entity.useUntil),
            isPreview: entity.isPreview
        };
    }
}
