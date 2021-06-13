import { TimelinePatchOperationSerializer } from "./timeline-patch-operation.serializer";
import { Serializer } from "@alf/core/models";
import { TimelinePatchDocument } from "@alf/models/timeline/timeline-patch-document";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TimelinePatchDocumentSerializer implements Serializer<TimelinePatchDocument> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TimelinePatchDocument
    deserialize(data: any): TimelinePatchDocument | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.operations = (copy.operations || []).map(new TimelinePatchOperationSerializer().deserialize);

        return new TimelinePatchDocument(copy);
    }

    serialize(entity: TimelinePatchDocument | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TimelinePatchDocument, _forceTypeHint?: boolean): any
    serialize(entity: TimelinePatchDocument | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? TimelinePatchDocument.typeNameHint : undefined,
            operations: entity.operations
                ? entity.operations.map(e => new TimelinePatchOperationSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
