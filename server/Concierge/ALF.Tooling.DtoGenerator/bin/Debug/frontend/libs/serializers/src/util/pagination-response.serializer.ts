import { Serializer } from "@alf/core/models";
import { PaginationResponse } from "@alf/models/util/pagination-response";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PaginationResponseSerializer implements Serializer<PaginationResponse> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PaginationResponse
    deserialize(data: any): PaginationResponse | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new PaginationResponse(copy);
    }

    serialize(entity: PaginationResponse | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PaginationResponse, _forceTypeHint?: boolean): any
    serialize(entity: PaginationResponse | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PaginationResponse.typeNameHint : undefined,
            members: entity.members,
            memberHashes: entity.memberHashes,
            hasMore: entity.hasMore
        };
    }
}
