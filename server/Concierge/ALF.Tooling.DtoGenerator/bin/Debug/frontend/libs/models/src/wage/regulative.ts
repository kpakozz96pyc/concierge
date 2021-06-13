

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type RegulativeId = string;

export class Regulative {

    static $name = "Regulative";
    static typeNameHint = "ALF.Shared.Dto.Models.Wage.Regulative, ALF.Shared.Dto"

    id: RegulativeId;
    companyId: string;
    regulativeCode: string;
    description?: string;

    constructor(data?: Partial<Regulative>) {
        Object.assign(this, data);
    }
}
