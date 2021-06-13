
import { UserSettingsType } from "./enums/user-settings-type";
import { UserSettingsValue } from "./user-settings-value";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type MaintainableUserSettingsId = string;

export class MaintainableUserSettings {

    static $name = "MaintainableUserSettings";
    static typeNameHint = "ALF.Shared.Dto.Models.Configuration.MaintainableUserSettings, ALF.Shared.Dto"

    id: MaintainableUserSettingsId;
    type: UserSettingsType;
    value: UserSettingsValue;

    constructor(data?: Partial<MaintainableUserSettings>) {
        Object.assign(this, data);
    }
}
