
import { InternalFileUpload } from "@alf/models/internal-file-upload/internal-file-upload";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type InternalMailMessageFileUploadId = string;

export class InternalMailMessageFileUpload extends InternalFileUpload {

    static $name = "InternalMailMessageFileUpload";
    static typeNameHint = "ALF.Shared.Dto.Models.InternalMessaging.InternalMailMessageFileUpload, ALF.Shared.Dto"

    threadId: string;

    constructor(data?: Partial<InternalMailMessageFileUpload>) {
        super(data);
        Object.assign(this, data);
        this.$type = InternalMailMessageFileUpload.typeNameHint;
    }
}
