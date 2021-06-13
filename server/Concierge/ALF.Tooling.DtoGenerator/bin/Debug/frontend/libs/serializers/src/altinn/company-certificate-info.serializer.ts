import { Serializer } from "@alf/core/models";
import { CompanyCertificateInfo } from "@alf/models/altinn/company-certificate-info";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CompanyCertificateInfoSerializer implements Serializer<CompanyCertificateInfo> {

    deserialize(data: undefined): undefined
    deserialize(data: any): CompanyCertificateInfo
    deserialize(data: any): CompanyCertificateInfo | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new CompanyCertificateInfo(copy);
    }

    serialize(entity: CompanyCertificateInfo | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: CompanyCertificateInfo, _forceTypeHint?: boolean): any
    serialize(entity: CompanyCertificateInfo | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            certificateCompanyId: entity.certificateCompanyId,
            data: entity.data,
            logicalFileId: entity.logicalFileId,
            password: entity.password,
            userUsername: entity.userUsername,
            userPassword: entity.userPassword
        };
    }
}
