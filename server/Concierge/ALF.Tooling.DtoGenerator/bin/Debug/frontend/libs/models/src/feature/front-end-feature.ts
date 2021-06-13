
import { Feature } from "@alf/models/feature/feature";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FrontEndFeature extends Feature {

    static $name = "FrontEndFeature";
    static typeNameHint = "ALF.Shared.Dto.Models.Feature.FrontEndFeature, ALF.Shared.Dto"

    isVisibleInProduction: boolean;
    isVisibleInDevelopment: boolean;
    isVisible: boolean;

    constructor(data?: Partial<FrontEndFeature>) {
        super(data);
        Object.assign(this, data);
        this.$type = FrontEndFeature.typeNameHint;
    }
}
