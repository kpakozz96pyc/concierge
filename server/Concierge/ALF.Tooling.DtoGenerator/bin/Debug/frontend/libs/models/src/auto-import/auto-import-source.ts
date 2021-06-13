
import { AutoImportSourceType } from "./enums/auto-import-source-type";
import { AutoImportSourceConfiguration } from "../config/auto-import-source-configuration";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type AutoImportSourceId = string;

export class AutoImportSource {

    static $name = "AutoImportSource";
    static typeNameHint = "ALF.Shared.Dto.Models.AutoImport.AutoImportSource, ALF.Shared.Dto"

    id: AutoImportSourceId;
    type: AutoImportSourceType;
    basePath: string;
    configuration: AutoImportSourceConfiguration;

    constructor(data?: Partial<AutoImportSource>) {
        Object.assign(this, data);
    }
}
