import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { TimeBasedProcessTemplateUsage } from "@alf/models/process/time-based-process-template-usage";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TimeBasedProcessTemplateUsageSerializer implements Serializer<TimeBasedProcessTemplateUsage> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TimeBasedProcessTemplateUsage
    deserialize(data: any): TimeBasedProcessTemplateUsage | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.useFrom = new Date(copy.useFrom);

        if (copy.useUntil !== undefined)
            copy.useUntil = new Date(copy.useUntil);

        return new TimeBasedProcessTemplateUsage(copy);
    }

    serialize(entity: TimeBasedProcessTemplateUsage | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TimeBasedProcessTemplateUsage, _forceTypeHint?: boolean): any
    serialize(entity: TimeBasedProcessTemplateUsage | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? TimeBasedProcessTemplateUsage.typeNameHint : undefined,
            id: entity.id,
            processTemplateUsageCode: entity.processTemplateUsageCode,
            companyId: entity.companyId,
            processTemplateId: entity.processTemplateId,
            useFrom: serializeDate(entity.useFrom),
            useUntil: serializeDate(entity.useUntil),
            isPreview: entity.isPreview
        };
    }
}
