
import { AutoImportSourceConfiguration } from "@alf/models/config/auto-import-source-configuration";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SftpSourceConfig extends AutoImportSourceConfiguration {

    static $name = "SftpSourceConfig";
    static typeNameHint = "ALF.Shared.Dto.Models.AutoImport.Config.SftpSourceConfig, ALF.Shared.Dto"

    hostName?: string;
    portNumber: number;
    username?: string;
    password?: string;

    constructor(data?: Partial<SftpSourceConfig>) {
        super(data);
        Object.assign(this, data);
        this.$type = SftpSourceConfig.typeNameHint;
    }
}
