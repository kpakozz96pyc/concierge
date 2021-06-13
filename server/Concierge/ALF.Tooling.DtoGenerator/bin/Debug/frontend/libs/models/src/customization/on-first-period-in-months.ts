
import { CustomizeWhenRule } from "@alf/models/customization/customize-when-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class OnFirstPeriodInMonths extends CustomizeWhenRule {

    static $name = "OnFirstPeriodInMonths";
    static typeNameHint = "ALF.Shared.Dto.Models.Periods.Planning.Customization.OnFirstPeriodInMonths, ALF.Shared.Dto"

    months: number[] = [];

    constructor(data?: Partial<OnFirstPeriodInMonths>) {
        super(data);
        Object.assign(this, data);
        this.$type = OnFirstPeriodInMonths.typeNameHint;
    }
}
