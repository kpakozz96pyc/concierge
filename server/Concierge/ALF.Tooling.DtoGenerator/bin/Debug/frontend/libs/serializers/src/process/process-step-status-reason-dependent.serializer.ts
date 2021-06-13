import { ProcessStepStatusReasonDependsOnMilestoneSerializer } from "./process-step-status-reason-depends-on-milestone.serializer";
import { ProcessStepStatusReasonDependsOnStepSerializer } from "./process-step-status-reason-depends-on-step.serializer";
import { ProcessStepStatusReasonDependsOnMilestone } from "@alf/models/process/process-step-status-reason-depends-on-milestone";
import { ProcessStepStatusReasonDependsOnStep } from "@alf/models/process/process-step-status-reason-depends-on-step";
import { Serializer } from "@alf/core/models";
import { ProcessStepStatusReasonDependent } from "@alf/models/process/process-step-status-reason-dependent";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessStepStatusReasonDependentSerializer implements Serializer<ProcessStepStatusReasonDependent> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessStepStatusReasonDependent
    deserialize(data: any): ProcessStepStatusReasonDependent | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonDependsOnMilestone, ALF.Shared.Dto")
            return new ProcessStepStatusReasonDependsOnMilestoneSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonDependsOnStep, ALF.Shared.Dto")
            return new ProcessStepStatusReasonDependsOnStepSerializer().deserialize(data);

        throw new Error("Unable to deserialize ProcessStepStatusReasonDependent, cannot infer type from " + data.$type);
    }

    serialize(entity: ProcessStepStatusReasonDependent | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessStepStatusReasonDependent, _forceTypeHint?: boolean): any
    serialize(entity: ProcessStepStatusReasonDependent | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonDependsOnMilestone, ALF.Shared.Dto")
            return new ProcessStepStatusReasonDependsOnMilestoneSerializer().serialize(entity as ProcessStepStatusReasonDependsOnMilestone, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.ProcessStepStatusReasonDependsOnStep, ALF.Shared.Dto")
            return new ProcessStepStatusReasonDependsOnStepSerializer().serialize(entity as ProcessStepStatusReasonDependsOnStep, _forceTypeHint);

        throw new Error("Unable to serialize ProcessStepStatusReasonDependent, cannot infer type from " + entity.$type);
    }
}
