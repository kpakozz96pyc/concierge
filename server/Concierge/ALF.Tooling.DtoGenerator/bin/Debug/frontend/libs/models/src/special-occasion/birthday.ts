
import { Occasion } from "@alf/models/special-occasion/occasion";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class Birthday extends Occasion {

    static $name = "Birthday";
    static typeNameHint = "ALF.Shared.Dto.Models.SpecialOccasion.Birthday, ALF.Shared.Dto"

    isFiveYearSomething: boolean;
    isTenYearSomething: boolean;

    constructor(data?: Partial<Birthday>) {
        super(data);
        Object.assign(this, data);
        this.$type = Birthday.typeNameHint;
    }
}
