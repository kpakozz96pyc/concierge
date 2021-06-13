import { BreakdownCategorySerializer } from "./breakdown-category.serializer";
import { Serializer } from "@alf/core/models";
import { BreakdownMetadata } from "@alf/models/metadata/breakdown-metadata";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BreakdownMetadataSerializer implements Serializer<BreakdownMetadata> {

    deserialize(data: undefined): undefined
    deserialize(data: any): BreakdownMetadata
    deserialize(data: any): BreakdownMetadata | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.categories = (copy.categories || []).map(new BreakdownCategorySerializer().deserialize);

        return new BreakdownMetadata(copy);
    }

    serialize(entity: BreakdownMetadata | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: BreakdownMetadata, _forceTypeHint?: boolean): any
    serialize(entity: BreakdownMetadata | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            categories: entity.categories
                ? entity.categories.map(e => new BreakdownCategorySerializer().serialize(e, _forceTypeHint))
                : undefined,
            label: entity.label,
            title: entity.title
        };
    }
}
