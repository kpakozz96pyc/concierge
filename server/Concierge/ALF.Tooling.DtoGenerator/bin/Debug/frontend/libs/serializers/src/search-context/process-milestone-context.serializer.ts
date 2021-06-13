import { Serializer } from "@alf/core/models";
import { ProcessMilestoneContext } from "@alf/models/search-context/process-milestone-context";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessMilestoneContextSerializer implements Serializer<ProcessMilestoneContext> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessMilestoneContext
    deserialize(data: any): ProcessMilestoneContext | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ProcessMilestoneContext(copy);
    }

    serialize(entity: ProcessMilestoneContext | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessMilestoneContext, _forceTypeHint?: boolean): any
    serialize(entity: ProcessMilestoneContext | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessMilestoneContext.typeNameHint : undefined,
            periodNumber: entity.periodNumber
        };
    }
}
