import { InternalMailMessageFileUploadSerializer } from "../internal-messaging/internal-mail-message-file-upload.serializer";
import { InternalMailMessageFileUpload } from "@alf/models/internal-messaging/internal-mail-message-file-upload";
import { Serializer } from "@alf/core/models";
import { InternalFileUpload } from "@alf/models/internal-file-upload/internal-file-upload";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class InternalFileUploadSerializer implements Serializer<InternalFileUpload> {

    deserialize(data: undefined): undefined
    deserialize(data: any): InternalFileUpload
    deserialize(data: any): InternalFileUpload | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.InternalMessaging.InternalMailMessageFileUpload, ALF.Shared.Dto")
            return new InternalMailMessageFileUploadSerializer().deserialize(data);

        const copy = { ...data };
        copy.createdAt = new Date(copy.createdAt);

        if (copy.modifiedAt !== undefined)
            copy.modifiedAt = new Date(copy.modifiedAt);

        return new InternalFileUpload(copy);
    }

    serialize(entity: InternalFileUpload | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: InternalFileUpload, _forceTypeHint?: boolean): any
    serialize(entity: InternalFileUpload | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.InternalMessaging.InternalMailMessageFileUpload, ALF.Shared.Dto")
            return new InternalMailMessageFileUploadSerializer().serialize(entity as InternalMailMessageFileUpload, _forceTypeHint);

        return {
            $type: _forceTypeHint ? InternalFileUpload.typeNameHint : undefined,
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
