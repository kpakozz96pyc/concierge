
import { TargetType } from "./enums/target-type";
import { GrantType } from "./enums/grant-type";
import { GrantPopulation } from "./grant-population";
import { GrantExtraField } from "./grant-extra-field";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type GrantId = string;

export class Grant {

    static $name = "Grant";
    static typeNameHint = "ALF.Shared.Dto.Models.DataAccess.Grant, ALF.Shared.Dto"

    id: GrantId;
    targetType: TargetType;
    targetRoleId?: string;
    targetGrantGroupId?: string;
    isSystemShipped: boolean;
    grantType: GrantType;
    grantProcessId?: string;
    grantReportProcessId?: string;
    grantGrantGroupId?: string;
    requiredRoleId?: string;
    populations: GrantPopulation[] = [];
    grantExtraFields: GrantExtraField[] = [];

    constructor(data?: Partial<Grant>) {
        Object.assign(this, data);
    }
}
