import { Serializer } from "@alf/core/models";
import { ProcessAccessList } from "@alf/models/data-access/process-access-list";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessAccessListSerializer implements Serializer<ProcessAccessList> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessAccessList
    deserialize(data: any): ProcessAccessList | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ProcessAccessList(copy);
    }

    serialize(entity: ProcessAccessList | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessAccessList, _forceTypeHint?: boolean): any
    serialize(entity: ProcessAccessList | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessAccessList.typeNameHint : undefined,
            id: entity.id,
            accessEntityId: entity.accessEntityId,
            processes: entity.processes
        };
    }
}
