import { CompanyCertificateInfoSerializer } from "./company-certificate-info.serializer";
import { CompanyCertificateInfo } from "@alf/models/altinn/company-certificate-info";
import { Serializer } from "@alf/core/models";
import { CompanyCertificateUserCredentials } from "@alf/models/altinn/company-certificate-user-credentials";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CompanyCertificateUserCredentialsSerializer implements Serializer<CompanyCertificateUserCredentials> {

    deserialize(data: undefined): undefined
    deserialize(data: any): CompanyCertificateUserCredentials
    deserialize(data: any): CompanyCertificateUserCredentials | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Altinn.CompanyCertificateInfo, ALF.Shared.Dto")
            return new CompanyCertificateInfoSerializer().deserialize(data);

        const copy = { ...data };

        return new CompanyCertificateUserCredentials(copy);
    }

    serialize(entity: CompanyCertificateUserCredentials | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: CompanyCertificateUserCredentials, _forceTypeHint?: boolean): any
    serialize(entity: CompanyCertificateUserCredentials | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Altinn.CompanyCertificateInfo, ALF.Shared.Dto")
            return new CompanyCertificateInfoSerializer().serialize(entity as CompanyCertificateInfo, _forceTypeHint);

        return {
            $type: _forceTypeHint ? CompanyCertificateUserCredentials.typeNameHint : undefined,
            userUsername: entity.userUsername,
            userPassword: entity.userPassword
        };
    }
}
