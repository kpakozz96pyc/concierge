
import { FeatureId } from "../feature/enums/feature-id";
import { FeatureStatus } from "../feature/enums/feature-status";
import { FeatureOverrideLevel } from "../feature/enums/feature-override-level";
import { AltinnBackend } from "../altinn/enums/altinn-backend";
import { Feature } from "@alf/models/feature/feature";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AltinnBackendFeature extends Feature {

    static $name = "AltinnBackendFeature";
    static typeNameHint = "ALF.Shared.Dto.Models.Feature.FeatureProviders.AltinnBackendFeature, ALF.Shared.Dto"

    featureId: FeatureId;
    description?: string;
    status: FeatureStatus;
    overrideLevel: FeatureOverrideLevel;
    mode?: AltinnBackend;
    includeArchived: boolean;

    constructor(data?: Partial<AltinnBackendFeature>) {
        super(data);
        Object.assign(this, data);
        this.$type = AltinnBackendFeature.typeNameHint;
    }
}
