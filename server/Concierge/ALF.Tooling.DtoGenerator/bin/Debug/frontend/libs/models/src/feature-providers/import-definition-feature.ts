
import { FeatureId } from "../feature/enums/feature-id";
import { FeatureStatus } from "../feature/enums/feature-status";
import { FeatureOverrideLevel } from "../feature/enums/feature-override-level";
import { FrontEndFeature } from "@alf/models/feature/front-end-feature";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ImportDefinitionFeature extends FrontEndFeature {

    static $name = "ImportDefinitionFeature";
    static typeNameHint = "ALF.Shared.Dto.Models.Feature.FeatureProviders.ImportDefinitionFeature, ALF.Shared.Dto"

    featureId: FeatureId;
    description?: string;
    status: FeatureStatus;
    overrideLevel: FeatureOverrideLevel;

    constructor(data?: Partial<ImportDefinitionFeature>) {
        super(data);
        Object.assign(this, data);
        this.$type = ImportDefinitionFeature.typeNameHint;
    }
}
