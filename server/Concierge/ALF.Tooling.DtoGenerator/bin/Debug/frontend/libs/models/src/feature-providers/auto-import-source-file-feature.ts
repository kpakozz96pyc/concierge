
import { FeatureId } from "../feature/enums/feature-id";
import { FeatureStatus } from "../feature/enums/feature-status";
import { FeatureOverrideLevel } from "../feature/enums/feature-override-level";
import { Feature } from "@alf/models/feature/feature";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AutoImportSourceFileFeature extends Feature {

    static $name = "AutoImportSourceFileFeature";
    static typeNameHint = "ALF.Shared.Dto.Models.Feature.FeatureProviders.AutoImportSourceFileFeature, ALF.Shared.Dto"

    featureId: FeatureId;
    description?: string;
    status: FeatureStatus;
    overrideLevel: FeatureOverrideLevel;
    useFileSystem: boolean;

    constructor(data?: Partial<AutoImportSourceFileFeature>) {
        super(data);
        Object.assign(this, data);
        this.$type = AutoImportSourceFileFeature.typeNameHint;
    }
}
