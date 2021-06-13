
import { InternalMailMessagePeer } from "./enums/internal-mail-message-peer";
import { InternalMailMessageStatus } from "./enums/internal-mail-message-status";
import { InternalMailMessageCategory } from "./enums/internal-mail-message-category";
import { InternalMailMessageType } from "./enums/internal-mail-message-type";
import { InternalMailThreadStatus } from "./enums/internal-mail-thread-status";
import { InternalMailMessageActionType } from "./enums/internal-mail-message-action-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type InternalMailMessageId = string;

export class InternalMailMessage {

    static $name = "InternalMailMessage";
    static typeNameHint = "ALF.Shared.Dto.Models.InternalMessaging.InternalMailMessage, ALF.Shared.Dto"

    id: InternalMailMessageId;
    threadId: string;
    companyId?: string;
    createdByUserId?: string;
    assignedToUserId?: string;
    createdByUsername?: string;
    createdAt: Date;
    modifiedByUserId?: string;
    modifiedByUsername?: string;
    modifiedAt?: Date;
    sender: InternalMailMessagePeer;
    senderEmployeeNumber?: number;
    receiver: InternalMailMessagePeer;
    receiverEmployeeNumber?: number;
    threadStatus?: InternalMailThreadStatus;
    status: InternalMailMessageStatus;
    category: InternalMailMessageCategory;
    type: InternalMailMessageType;
    actionType?: InternalMailMessageActionType;
    subject?: string;
    message?: string;
    isDeleted: boolean;
    isInternal: boolean;
    attachmentIds: string[] = [];

    constructor(data?: Partial<InternalMailMessage>) {
        Object.assign(this, data);
    }
}
