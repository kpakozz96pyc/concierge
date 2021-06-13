
import { FeatureId } from "../feature/enums/feature-id";
import { FeatureStatus } from "../feature/enums/feature-status";
import { FeatureOverrideLevel } from "../feature/enums/feature-override-level";
import { FrontEndFeature } from "@alf/models/feature/front-end-feature";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkListFeature extends FrontEndFeature {

    static $name = "WorkListFeature";
    static typeNameHint = "ALF.Shared.Dto.Models.Feature.FeatureProviders.WorkListFeature, ALF.Shared.Dto"

    featureId: FeatureId;
    description?: string;
    status: FeatureStatus;
    overrideLevel: FeatureOverrideLevel;

    constructor(data?: Partial<WorkListFeature>) {
        super(data);
        Object.assign(this, data);
        this.$type = WorkListFeature.typeNameHint;
    }
}
