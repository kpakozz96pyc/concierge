
import { FeatureId } from "./enums/feature-id";
import { FeatureStatus } from "./enums/feature-status";
import { FeatureOverrideLevel } from "./enums/feature-override-level";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class Feature {

    static $name = "Feature";
    static typeNameHint = "ALF.Shared.Dto.Models.Feature.Feature, ALF.Shared.Dto"

    $type: string;
    id?: string;
    companyId?: string;
    featureId: FeatureId;
    isDevEnv: boolean;
    description?: string;
    status: FeatureStatus;
    overrideLevel: FeatureOverrideLevel;

    constructor(data?: Partial<Feature>) {
        Object.assign(this, data);
    }
}
