
import { TargetType } from "./enums/target-type";
import { PopulationType } from "../populations/enums/population-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class GrantPopulation {

    static $name = "GrantPopulation";
    static typeNameHint = "ALF.Shared.Dto.Models.DataAccess.GrantPopulation, ALF.Shared.Dto"

    grantId: string;
    targetType: TargetType;
    targetRoleId?: string;
    targetGrantGroupId?: string;
    populationType: PopulationType;
    populationId?: string;
    isSystemShipped: boolean;

    constructor(data?: Partial<GrantPopulation>) {
        Object.assign(this, data);
    }
}
