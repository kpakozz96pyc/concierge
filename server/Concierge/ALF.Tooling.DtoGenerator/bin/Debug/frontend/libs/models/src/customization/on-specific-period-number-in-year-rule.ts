
import { CustomizeWhenRule } from "@alf/models/customization/customize-when-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class OnSpecificPeriodNumberInYearRule extends CustomizeWhenRule {

    static $name = "OnSpecificPeriodNumberInYearRule";
    static typeNameHint = "ALF.Shared.Dto.Models.Periods.Planning.Customization.OnSpecificPeriodNumberInYearRule, ALF.Shared.Dto"

    periodNumberInYear: number;

    constructor(data?: Partial<OnSpecificPeriodNumberInYearRule>) {
        super(data);
        Object.assign(this, data);
        this.$type = OnSpecificPeriodNumberInYearRule.typeNameHint;
    }
}
