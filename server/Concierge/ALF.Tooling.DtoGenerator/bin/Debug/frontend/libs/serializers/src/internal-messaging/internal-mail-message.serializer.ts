import { Serializer } from "@alf/core/models";
import { InternalMailMessage } from "@alf/models/internal-messaging/internal-mail-message";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class InternalMailMessageSerializer implements Serializer<InternalMailMessage> {

    deserialize(data: undefined): undefined
    deserialize(data: any): InternalMailMessage
    deserialize(data: any): InternalMailMessage | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.createdAt = new Date(copy.createdAt);

        if (copy.modifiedAt !== undefined)
            copy.modifiedAt = new Date(copy.modifiedAt);

        return new InternalMailMessage(copy);
    }

    serialize(entity: InternalMailMessage | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: InternalMailMessage, _forceTypeHint?: boolean): any
    serialize(entity: InternalMailMessage | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? InternalMailMessage.typeNameHint : undefined,
            id: entity.id,
            threadId: entity.threadId,
            companyId: entity.companyId,
            createdByUserId: entity.createdByUserId,
            assignedToUserId: entity.assignedToUserId,
            createdByUsername: entity.createdByUsername,
            createdAt: entity.createdAt
                ? entity.createdAt.toISOString()
                : undefined,
            modifiedByUserId: entity.modifiedByUserId,
            modifiedByUsername: entity.modifiedByUsername,
            modifiedAt: entity.modifiedAt
                ? entity.modifiedAt.toISOString()
                : undefined,
            sender: entity.sender,
            senderEmployeeNumber: entity.senderEmployeeNumber,
            receiver: entity.receiver,
            receiverEmployeeNumber: entity.receiverEmployeeNumber,
            threadStatus: entity.threadStatus,
            status: entity.status,
            category: entity.category,
            type: entity.type,
            actionType: entity.actionType,
            subject: entity.subject,
            message: entity.message,
            isDeleted: entity.isDeleted,
            isInternal: entity.isInternal,
            attachmentIds: entity.attachmentIds
        };
    }
}
