
import { FeatureId } from "../feature/enums/feature-id";
import { FeatureStatus } from "../feature/enums/feature-status";
import { FeatureOverrideLevel } from "../feature/enums/feature-override-level";
import { FrontEndFeature } from "@alf/models/feature/front-end-feature";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AltinnMockFeature extends FrontEndFeature {

    static $name = "AltinnMockFeature";
    static typeNameHint = "ALF.Shared.Dto.Models.Feature.FeatureProviders.AltinnMockFeature, ALF.Shared.Dto"

    featureId: FeatureId;
    description?: string;
    status: FeatureStatus;
    overrideLevel: FeatureOverrideLevel;
    isFrontendReadOnly: boolean;

    constructor(data?: Partial<AltinnMockFeature>) {
        super(data);
        Object.assign(this, data);
        this.$type = AltinnMockFeature.typeNameHint;
    }
}
