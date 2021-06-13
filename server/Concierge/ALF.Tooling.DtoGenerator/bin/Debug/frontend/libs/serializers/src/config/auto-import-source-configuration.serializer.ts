import { SftpSourceConfigSerializer } from "./sftp-source-config.serializer";
import { WebApiSourceConfigSerializer } from "./web-api-source-config.serializer";
import { SftpSourceConfig } from "@alf/models/config/sftp-source-config";
import { WebApiSourceConfig } from "@alf/models/config/web-api-source-config";
import { Serializer } from "@alf/core/models";
import { AutoImportSourceConfiguration } from "@alf/models/config/auto-import-source-configuration";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AutoImportSourceConfigurationSerializer implements Serializer<AutoImportSourceConfiguration> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AutoImportSourceConfiguration
    deserialize(data: any): AutoImportSourceConfiguration | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.AutoImport.Config.SftpSourceConfig, ALF.Shared.Dto")
            return new SftpSourceConfigSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.AutoImport.Config.WebApiSourceConfig, ALF.Shared.Dto")
            return new WebApiSourceConfigSerializer().deserialize(data);

        throw new Error("Unable to deserialize AutoImportSourceConfiguration, cannot infer type from " + data.$type);
    }

    serialize(entity: AutoImportSourceConfiguration | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AutoImportSourceConfiguration, _forceTypeHint?: boolean): any
    serialize(entity: AutoImportSourceConfiguration | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.AutoImport.Config.SftpSourceConfig, ALF.Shared.Dto")
            return new SftpSourceConfigSerializer().serialize(entity as SftpSourceConfig, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.AutoImport.Config.WebApiSourceConfig, ALF.Shared.Dto")
            return new WebApiSourceConfigSerializer().serialize(entity as WebApiSourceConfig, _forceTypeHint);

        throw new Error("Unable to serialize AutoImportSourceConfiguration, cannot infer type from " + entity.$type);
    }
}
