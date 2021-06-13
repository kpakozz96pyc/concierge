import { Serializer } from "@alf/core/models";
import { WorkItemFileDownloadAction } from "@alf/models/work/work-item-file-download-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkItemFileDownloadActionSerializer implements Serializer<WorkItemFileDownloadAction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WorkItemFileDownloadAction
    deserialize(data: any): WorkItemFileDownloadAction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new WorkItemFileDownloadAction(copy);
    }

    serialize(entity: WorkItemFileDownloadAction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WorkItemFileDownloadAction, _forceTypeHint?: boolean): any
    serialize(entity: WorkItemFileDownloadAction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            binaryItemId: entity.binaryItemId,
            fileFormat: entity.fileFormat,
            linkDescription: entity.linkDescription
        };
    }
}
