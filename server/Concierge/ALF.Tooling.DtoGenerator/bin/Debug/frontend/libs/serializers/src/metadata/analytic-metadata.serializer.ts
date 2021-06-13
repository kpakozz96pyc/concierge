import { BreakdownMetadataSerializer } from "./breakdown-metadata.serializer";
import { DualValueMetadataSerializer } from "./dual-value-metadata.serializer";
import { SingleValueMetadataSerializer } from "./single-value-metadata.serializer";
import { BreakdownMetadata } from "@alf/models/metadata/breakdown-metadata";
import { DualValueMetadata } from "@alf/models/metadata/dual-value-metadata";
import { SingleValueMetadata } from "@alf/models/metadata/single-value-metadata";
import { Serializer } from "@alf/core/models";
import { AnalyticMetadata } from "@alf/models/metadata/analytic-metadata";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AnalyticMetadataSerializer implements Serializer<AnalyticMetadata> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AnalyticMetadata
    deserialize(data: any): AnalyticMetadata | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Analysis.Metadata.BreakdownMetadata, ALF.Shared.Dto")
            return new BreakdownMetadataSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Analysis.Metadata.DualValueMetadata, ALF.Shared.Dto")
            return new DualValueMetadataSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Analysis.Metadata.SingleValueMetadata, ALF.Shared.Dto")
            return new SingleValueMetadataSerializer().deserialize(data);

        throw new Error("Unable to deserialize AnalyticMetadata, cannot infer type from " + data.$type);
    }

    serialize(entity: AnalyticMetadata | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AnalyticMetadata, _forceTypeHint?: boolean): any
    serialize(entity: AnalyticMetadata | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Analysis.Metadata.BreakdownMetadata, ALF.Shared.Dto")
            return new BreakdownMetadataSerializer().serialize(entity as BreakdownMetadata, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Analysis.Metadata.DualValueMetadata, ALF.Shared.Dto")
            return new DualValueMetadataSerializer().serialize(entity as DualValueMetadata, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Analysis.Metadata.SingleValueMetadata, ALF.Shared.Dto")
            return new SingleValueMetadataSerializer().serialize(entity as SingleValueMetadata, _forceTypeHint);

        throw new Error("Unable to serialize AnalyticMetadata, cannot infer type from " + entity.$type);
    }
}
