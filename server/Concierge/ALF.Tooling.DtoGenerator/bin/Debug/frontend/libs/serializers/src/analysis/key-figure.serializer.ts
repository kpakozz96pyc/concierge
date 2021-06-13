import { KeyFigureTemplate } from "@alf/models/analysis/enums/key-figure-template";
import { AnalyticMetadataSerializer } from "../metadata/analytic-metadata.serializer";
import { AnalyticSummarySerializer } from "../summary/analytic-summary.serializer";
import { AnalyticGraphSerializer } from "../graph/analytic-graph.serializer";
import { Serializer } from "@alf/core/models";
import { KeyFigure } from "@alf/models/analysis/key-figure";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class KeyFigureSerializer implements Serializer<KeyFigure> {

    deserialize(data: undefined): undefined
    deserialize(data: any): KeyFigure
    deserialize(data: any): KeyFigure | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.metadata = new AnalyticMetadataSerializer().deserialize(copy.metadata);

        copy.template = KeyFigureTemplate[copy.template];

        copy.summary = new AnalyticSummarySerializer().deserialize(copy.summary);

        copy.graphs = (copy.graphs || []).map(new AnalyticGraphSerializer().deserialize);

        return new KeyFigure(copy);
    }

    serialize(entity: KeyFigure | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: KeyFigure, _forceTypeHint?: boolean): any
    serialize(entity: KeyFigure | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? KeyFigure.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            metadata: new AnalyticMetadataSerializer().serialize(entity.metadata, _forceTypeHint),
            template: KeyFigureTemplate[entity.template],
            summary: new AnalyticSummarySerializer().serialize(entity.summary, _forceTypeHint),
            graphs: entity.graphs
                ? entity.graphs.map(e => new AnalyticGraphSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
