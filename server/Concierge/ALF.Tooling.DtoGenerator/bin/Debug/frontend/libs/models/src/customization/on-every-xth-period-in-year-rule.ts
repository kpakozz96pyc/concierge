
import { CustomizeWhenRule } from "@alf/models/customization/customize-when-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class OnEveryXthPeriodInYearRule extends CustomizeWhenRule {

    static $name = "OnEveryXthPeriodInYearRule";
    static typeNameHint = "ALF.Shared.Dto.Models.Periods.Planning.Customization.OnEveryXthPeriodInYearRule, ALF.Shared.Dto"

    everyXth: number;

    constructor(data?: Partial<OnEveryXthPeriodInYearRule>) {
        super(data);
        Object.assign(this, data);
        this.$type = OnEveryXthPeriodInYearRule.typeNameHint;
    }
}
