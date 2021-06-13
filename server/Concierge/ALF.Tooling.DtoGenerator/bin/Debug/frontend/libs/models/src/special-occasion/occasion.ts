

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class Occasion {

    static $name = "Occasion";
    static typeNameHint = "ALF.Shared.Dto.Models.SpecialOccasion.Occasion, ALF.Shared.Dto"

    $type: string;
    employeeId?: string;
    name?: string;
    date: Date;
    years: number;

    constructor(data?: Partial<Occasion>) {
        Object.assign(this, data);
    }
}
