
import { CustomizeWhenRule } from "@alf/models/customization/customize-when-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class OnFirstPeriodInEveryMonth extends CustomizeWhenRule {

    static $name = "OnFirstPeriodInEveryMonth";
    static typeNameHint = "ALF.Shared.Dto.Models.Periods.Planning.Customization.OnFirstPeriodInEveryMonth, ALF.Shared.Dto"



    constructor(data?: Partial<OnFirstPeriodInEveryMonth>) {
        super(data);
        Object.assign(this, data);
        this.$type = OnFirstPeriodInEveryMonth.typeNameHint;
    }
}
