
import { InternalFileUploadType } from "./enums/internal-file-upload-type";
import { InternalFileUploadStatus } from "./enums/internal-file-upload-status";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type InternalFileUploadId = string;

export class InternalFileUpload {

    static $name = "InternalFileUpload";
    static typeNameHint = "ALF.Shared.Dto.Models.InternalFileUpload.InternalFileUpload, ALF.Shared.Dto"

    $type: string;
    id: InternalFileUploadId;
    generalFileDataId: string;
    binaryItemId?: string;
    companyId?: string;
    createdByUserId?: string;
    createdByUsername?: string;
    createdAt: Date;
    modifiedByUserId?: string;
    modifiedByUsername?: string;
    modifiedAt?: Date;
    type: InternalFileUploadType;
    status: InternalFileUploadStatus;
    description?: string;
    fileName?: string;
    mimeType?: string;
    isDeleted: boolean;

    constructor(data?: Partial<InternalFileUpload>) {
        Object.assign(this, data);
    }
}
