

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type TipId = string;

export class Tip {

    static $name = "Tip";
    static typeNameHint = "ALF.Shared.Dto.Models.TipOfTheDay.Tip, ALF.Shared.Dto"

    id: TipId;
    text: string;

    constructor(data?: Partial<Tip>) {
        Object.assign(this, data);
    }
}
