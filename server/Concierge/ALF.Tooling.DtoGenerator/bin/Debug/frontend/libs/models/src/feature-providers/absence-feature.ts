
import { FeatureId } from "../feature/enums/feature-id";
import { FeatureStatus } from "../feature/enums/feature-status";
import { FeatureOverrideLevel } from "../feature/enums/feature-override-level";
import { FrontEndFeature } from "@alf/models/feature/front-end-feature";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AbsenceFeature extends FrontEndFeature {

    static $name = "AbsenceFeature";
    static typeNameHint = "ALF.Shared.Dto.Models.Feature.FeatureProviders.AbsenceFeature, ALF.Shared.Dto"

    featureId: FeatureId;
    description?: string;
    status: FeatureStatus;
    overrideLevel: FeatureOverrideLevel;
    activeFrom?: Date;
    paused: boolean;
    showModeInFrontend: boolean;

    constructor(data?: Partial<AbsenceFeature>) {
        super(data);
        Object.assign(this, data);
        this.$type = AbsenceFeature.typeNameHint;
    }
}
