import { AssignmentFilter } from "@alf/models/internal-messaging/enums/assignment-filter";
import { Serializer } from "@alf/core/models";
import { UnreadCountFilter } from "@alf/models/internal-messaging/unread-count-filter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class UnreadCountFilterSerializer implements Serializer<UnreadCountFilter> {

    deserialize(data: undefined): undefined
    deserialize(data: any): UnreadCountFilter
    deserialize(data: any): UnreadCountFilter | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.id = AssignmentFilter[copy.id];

        return new UnreadCountFilter(copy);
    }

    serialize(entity: UnreadCountFilter | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: UnreadCountFilter, _forceTypeHint?: boolean): any
    serialize(entity: UnreadCountFilter | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? UnreadCountFilter.typeNameHint : undefined,
            id: AssignmentFilter[entity.id],
            count: entity.count
        };
    }
}
