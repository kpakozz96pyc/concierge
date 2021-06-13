import { Serializer } from "@alf/core/models";
import { InternalMailMessageFileUpload } from "@alf/models/internal-messaging/internal-mail-message-file-upload";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class InternalMailMessageFileUploadSerializer implements Serializer<InternalMailMessageFileUpload> {

    deserialize(data: undefined): undefined
    deserialize(data: any): InternalMailMessageFileUpload
    deserialize(data: any): InternalMailMessageFileUpload | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.createdAt = new Date(copy.createdAt);

        if (copy.modifiedAt !== undefined)
            copy.modifiedAt = new Date(copy.modifiedAt);

        return new InternalMailMessageFileUpload(copy);
    }

    serialize(entity: InternalMailMessageFileUpload | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: InternalMailMessageFileUpload, _forceTypeHint?: boolean): any
    serialize(entity: InternalMailMessageFileUpload | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            threadId: entity.threadId,
            id: entity.id,
            generalFileDataId: entity.generalFileDataId,
            binaryItemId: entity.binaryItemId,
            companyId: entity.companyId,
            createdByUserId: entity.createdByUserId,
            createdByUsername: entity.createdByUsername,
            createdAt: entity.createdAt
                ? entity.createdAt.toISOString()
                : undefined,
            modifiedByUserId: entity.modifiedByUserId,
            modifiedByUsername: entity.modifiedByUsername,
            modifiedAt: entity.modifiedAt
                ? entity.modifiedAt.toISOString()
                : undefined,
            type: entity.type,
            status: entity.status,
            description: entity.description,
            fileName: entity.fileName,
            mimeType: entity.mimeType,
            isDeleted: entity.isDeleted
        };
    }
}
