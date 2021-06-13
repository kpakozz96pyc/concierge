import { InternalMailThreadReadStatus } from "@alf/models/internal-messaging/enums/internal-mail-thread-read-status";
import { Serializer } from "@alf/core/models";
import { InternalMailThread } from "@alf/models/internal-messaging/internal-mail-thread";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class InternalMailThreadSerializer implements Serializer<InternalMailThread> {

    deserialize(data: undefined): undefined
    deserialize(data: any): InternalMailThread
    deserialize(data: any): InternalMailThread | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.readStatus = InternalMailThreadReadStatus[copy.readStatus];

        if (copy.modifiedAt !== undefined)
            copy.modifiedAt = new Date(copy.modifiedAt);

        copy.createdAt = new Date(copy.createdAt);

        copy.lastActivityAt = new Date(copy.lastActivityAt);

        return new InternalMailThread(copy);
    }

    serialize(entity: InternalMailThread | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: InternalMailThread, _forceTypeHint?: boolean): any
    serialize(entity: InternalMailThread | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? InternalMailThread.typeNameHint : undefined,
            id: entity.id,
            subject: entity.subject,
            readStatus: InternalMailThreadReadStatus[entity.readStatus],
            threadStatus: entity.threadStatus,
            category: entity.category,
            type: entity.type,
            messageStatus: entity.messageStatus,
            sender: entity.sender,
            senderEmployeeNumber: entity.senderEmployeeNumber,
            lastCorrespondent: entity.lastCorrespondent,
            lastCorrespondentUserId: entity.lastCorrespondentUserId,
            receiverEmployeeNumber: entity.receiverEmployeeNumber,
            replyCount: entity.replyCount,
            unreadCount: entity.unreadCount,
            attachmentCount: entity.attachmentCount,
            modifiedAt: entity.modifiedAt
                ? entity.modifiedAt.toISOString()
                : undefined,
            createdAt: entity.createdAt
                ? entity.createdAt.toISOString()
                : undefined,
            lastActivityAt: entity.lastActivityAt
                ? entity.lastActivityAt.toISOString()
                : undefined,
            assignedToUserId: entity.assignedToUserId,
            isDeleted: entity.isDeleted
        };
    }
}
