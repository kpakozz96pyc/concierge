import { UnreadCountFilterSerializer } from "./unread-count-filter.serializer";
import { Serializer } from "@alf/core/models";
import { UnreadCountsFilter } from "@alf/models/internal-messaging/unread-counts-filter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class UnreadCountsFilterSerializer implements Serializer<UnreadCountsFilter> {

    deserialize(data: undefined): undefined
    deserialize(data: any): UnreadCountsFilter
    deserialize(data: any): UnreadCountsFilter | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.counts = (copy.counts || []).map(new UnreadCountFilterSerializer().deserialize);

        return new UnreadCountsFilter(copy);
    }

    serialize(entity: UnreadCountsFilter | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: UnreadCountsFilter, _forceTypeHint?: boolean): any
    serialize(entity: UnreadCountsFilter | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? UnreadCountsFilter.typeNameHint : undefined,
            id: entity.id,
            counts: entity.counts
                ? entity.counts.map(e => new UnreadCountFilterSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
