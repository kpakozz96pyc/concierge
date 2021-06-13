import { Serializer } from "@alf/core/models";
import { RunnerState } from "@alf/models/yggdrasil/runner-state";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RunnerStateSerializer implements Serializer<RunnerState> {

    deserialize(data: undefined): undefined
    deserialize(data: any): RunnerState
    deserialize(data: any): RunnerState | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.startTimeUtc = new Date(copy.startTimeUtc);

        copy.lastActivityTime = new Date(copy.lastActivityTime);

        return new RunnerState(copy);
    }

    serialize(entity: RunnerState | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: RunnerState, _forceTypeHint?: boolean): any
    serialize(entity: RunnerState | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? RunnerState.typeNameHint : undefined,
            type: entity.type,
            startTimeUtc: entity.startTimeUtc
                ? entity.startTimeUtc.toISOString()
                : undefined,
            lastActivityTime: entity.lastActivityTime
                ? entity.lastActivityTime.toISOString()
                : undefined,
            online: entity.online
        };
    }
}
