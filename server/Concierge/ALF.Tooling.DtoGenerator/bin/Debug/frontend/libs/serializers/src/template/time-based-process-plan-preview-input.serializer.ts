import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { TimeBasedProcessPlanPreviewInput } from "@alf/models/template/time-based-process-plan-preview-input";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TimeBasedProcessPlanPreviewInputSerializer implements Serializer<TimeBasedProcessPlanPreviewInput> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TimeBasedProcessPlanPreviewInput
    deserialize(data: any): TimeBasedProcessPlanPreviewInput | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.previewUseFrom = new Date(copy.previewUseFrom);

        if (copy.previewUseUntil !== undefined)
            copy.previewUseUntil = new Date(copy.previewUseUntil);

        return new TimeBasedProcessPlanPreviewInput(copy);
    }

    serialize(entity: TimeBasedProcessPlanPreviewInput | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TimeBasedProcessPlanPreviewInput, _forceTypeHint?: boolean): any
    serialize(entity: TimeBasedProcessPlanPreviewInput | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            previewUseFrom: serializeDate(entity.previewUseFrom),
            previewUseUntil: serializeDate(entity.previewUseUntil),
            timeUnit: entity.timeUnit,
            timeFilter: entity.timeFilter,
            earliestPossibleCreationFormula: entity.earliestPossibleCreationFormula,
            latestPossibleCreationFormula: entity.latestPossibleCreationFormula,
            startFormula: entity.startFormula,
            intervalStartFormula: entity.intervalStartFormula,
            intervalEndFormula: entity.intervalEndFormula,
            creationCondition: entity.creationCondition
        };
    }
}
