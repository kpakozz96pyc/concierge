import { Serializer } from "@alf/core/models";
import { SftpSourceConfig } from "@alf/models/config/sftp-source-config";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SftpSourceConfigSerializer implements Serializer<SftpSourceConfig> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SftpSourceConfig
    deserialize(data: any): SftpSourceConfig | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new SftpSourceConfig(copy);
    }

    serialize(entity: SftpSourceConfig | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SftpSourceConfig, _forceTypeHint?: boolean): any
    serialize(entity: SftpSourceConfig | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            hostName: entity.hostName,
            portNumber: entity.portNumber,
            username: entity.username,
            password: entity.password
        };
    }
}
