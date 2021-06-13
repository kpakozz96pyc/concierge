import { Serializer } from "@alf/core/models";
import { ProcessStepStatusReasonDependsOnStep } from "@alf/models/process/process-step-status-reason-depends-on-step";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessStepStatusReasonDependsOnStepSerializer implements Serializer<ProcessStepStatusReasonDependsOnStep> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessStepStatusReasonDependsOnStep
    deserialize(data: any): ProcessStepStatusReasonDependsOnStep | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ProcessStepStatusReasonDependsOnStep(copy);
    }

    serialize(entity: ProcessStepStatusReasonDependsOnStep | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessStepStatusReasonDependsOnStep, _forceTypeHint?: boolean): any
    serialize(entity: ProcessStepStatusReasonDependsOnStep | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            stepId: entity.stepId
        };
    }
}
