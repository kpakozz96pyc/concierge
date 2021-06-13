
import { CustomizeWhenRule } from "@alf/models/customization/customize-when-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class OnSpecificMonthsRule extends CustomizeWhenRule {

    static $name = "OnSpecificMonthsRule";
    static typeNameHint = "ALF.Shared.Dto.Models.Periods.Planning.Customization.OnSpecificMonthsRule, ALF.Shared.Dto"

    months: number[] = [];

    constructor(data?: Partial<OnSpecificMonthsRule>) {
        super(data);
        Object.assign(this, data);
        this.$type = OnSpecificMonthsRule.typeNameHint;
    }
}
