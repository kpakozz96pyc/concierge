import { AssignmentFilter } from "@alf/models/internal-messaging/enums/assignment-filter";
import { Serializer } from "@alf/core/models";
import { InternalMailThreadFilter } from "@alf/models/internal-messaging/internal-mail-thread-filter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class InternalMailThreadFilterSerializer implements Serializer<InternalMailThreadFilter> {

    deserialize(data: undefined): undefined
    deserialize(data: any): InternalMailThreadFilter
    deserialize(data: any): InternalMailThreadFilter | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.assignment = AssignmentFilter[copy.assignment];

        return new InternalMailThreadFilter(copy);
    }

    serialize(entity: InternalMailThreadFilter | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: InternalMailThreadFilter, _forceTypeHint?: boolean): any
    serialize(entity: InternalMailThreadFilter | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? InternalMailThreadFilter.typeNameHint : undefined,
            id: entity.id,
            statuses: entity.statuses,
            searchString: entity.searchString,
            assignment: AssignmentFilter[entity.assignment]
        };
    }
}
