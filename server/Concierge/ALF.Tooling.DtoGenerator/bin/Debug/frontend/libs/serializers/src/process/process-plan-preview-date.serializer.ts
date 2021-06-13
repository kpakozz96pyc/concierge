import { Serializer } from "@alf/core/models";
import { ProcessPlanPreviewDate } from "@alf/models/process/process-plan-preview-date";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessPlanPreviewDateSerializer implements Serializer<ProcessPlanPreviewDate> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessPlanPreviewDate
    deserialize(data: any): ProcessPlanPreviewDate | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.date = new Date(copy.date);

        return new ProcessPlanPreviewDate(copy);
    }

    serialize(entity: ProcessPlanPreviewDate | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessPlanPreviewDate, _forceTypeHint?: boolean): any
    serialize(entity: ProcessPlanPreviewDate | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessPlanPreviewDate.typeNameHint : undefined,
            label: entity.label,
            date: entity.date
                ? entity.date.toISOString()
                : undefined,
            warning: entity.warning
        };
    }
}
