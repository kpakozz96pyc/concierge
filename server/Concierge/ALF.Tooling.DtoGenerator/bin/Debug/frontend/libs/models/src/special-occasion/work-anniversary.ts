
import { Occasion } from "@alf/models/special-occasion/occasion";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkAnniversary extends Occasion {

    static $name = "WorkAnniversary";
    static typeNameHint = "ALF.Shared.Dto.Models.SpecialOccasion.WorkAnniversary, ALF.Shared.Dto"

    employmentId?: string;
    isFiveYearAnniversary: boolean;
    isTenYearAnniversary: boolean;

    constructor(data?: Partial<WorkAnniversary>) {
        super(data);
        Object.assign(this, data);
        this.$type = WorkAnniversary.typeNameHint;
    }
}
