import { TimeBasedProcessPlanPreviewInputSerializer } from "./time-based-process-plan-preview-input.serializer";
import { TimeBasedProcessPlanPreviewInput } from "@alf/models/template/time-based-process-plan-preview-input";
import { Serializer } from "@alf/core/models";
import { TimeBasedProcessPlanInput } from "@alf/models/template/time-based-process-plan-input";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TimeBasedProcessPlanInputSerializer implements Serializer<TimeBasedProcessPlanInput> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TimeBasedProcessPlanInput
    deserialize(data: any): TimeBasedProcessPlanInput | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Process.Template.TimeBasedProcessPlanPreviewInput, ALF.Shared.Dto")
            return new TimeBasedProcessPlanPreviewInputSerializer().deserialize(data);

        const copy = { ...data };

        return new TimeBasedProcessPlanInput(copy);
    }

    serialize(entity: TimeBasedProcessPlanInput | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TimeBasedProcessPlanInput, _forceTypeHint?: boolean): any
    serialize(entity: TimeBasedProcessPlanInput | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Process.Template.TimeBasedProcessPlanPreviewInput, ALF.Shared.Dto")
            return new TimeBasedProcessPlanPreviewInputSerializer().serialize(entity as TimeBasedProcessPlanPreviewInput, _forceTypeHint);

        return {
            $type: _forceTypeHint ? TimeBasedProcessPlanInput.typeNameHint : undefined,
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
