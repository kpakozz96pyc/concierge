
import { InternalMailThreadReadStatus } from "./enums/internal-mail-thread-read-status";
import { InternalMailThreadStatus } from "./enums/internal-mail-thread-status";
import { InternalMailMessageCategory } from "./enums/internal-mail-message-category";
import { InternalMailMessageType } from "./enums/internal-mail-message-type";
import { InternalMailMessageStatus } from "./enums/internal-mail-message-status";
import { InternalMailMessagePeer } from "./enums/internal-mail-message-peer";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type InternalMailThreadId = string;

export class InternalMailThread {

    static $name = "InternalMailThread";
    static typeNameHint = "ALF.Shared.Dto.Models.InternalMessaging.InternalMailThread, ALF.Shared.Dto"

    id: InternalMailThreadId;
    subject: string;
    readStatus: InternalMailThreadReadStatus;
    threadStatus: InternalMailThreadStatus;
    category: InternalMailMessageCategory;
    type: InternalMailMessageType;
    messageStatus: InternalMailMessageStatus;
    sender: InternalMailMessagePeer;
    senderEmployeeNumber: number;
    lastCorrespondent: InternalMailMessagePeer;
    lastCorrespondentUserId?: string;
    receiverEmployeeNumber: number;
    replyCount: number;
    unreadCount: number;
    attachmentCount: number;
    modifiedAt?: Date;
    createdAt: Date;
    lastActivityAt: Date;
    assignedToUserId?: string;
    isDeleted: boolean;

    constructor(data?: Partial<InternalMailThread>) {
        Object.assign(this, data);
    }
}
