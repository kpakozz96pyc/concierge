
import { CompanyCertificateUserCredentials } from "@alf/models/altinn/company-certificate-user-credentials";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CompanyCertificateInfo extends CompanyCertificateUserCredentials {

    static $name = "CompanyCertificateInfo";
    static typeNameHint = "ALF.Shared.Dto.Models.Altinn.CompanyCertificateInfo, ALF.Shared.Dto"

    certificateCompanyId?: string;
    data?: string;
    logicalFileId: number;
    password?: string;

    constructor(data?: Partial<CompanyCertificateInfo>) {
        super(data);
        Object.assign(this, data);
        this.$type = CompanyCertificateInfo.typeNameHint;
    }
}
