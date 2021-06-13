
import { UserSettingsValue } from "@alf/models/configuration/user-settings-value";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class UserSettingsAltinnCredentials extends UserSettingsValue {

    static $name = "UserSettingsAltinnCredentials";
    static typeNameHint = "ALF.Shared.Dto.Models.Configuration.UserSettingsAltinnCredentials, ALF.Shared.Dto"

    altinnUser?: string;
    altinnPassword?: string;
    altinnSystemId?: string;
    altinnSystemPassword?: string;

    constructor(data?: Partial<UserSettingsAltinnCredentials>) {
        super(data);
        Object.assign(this, data);
        this.$type = UserSettingsAltinnCredentials.typeNameHint;
    }
}
