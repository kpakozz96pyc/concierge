import { UserSettingsValueSerializer } from "./user-settings-value.serializer";
import { Serializer } from "@alf/core/models";
import { MaintainableUserSettings } from "@alf/models/configuration/maintainable-user-settings";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class MaintainableUserSettingsSerializer implements Serializer<MaintainableUserSettings> {

    deserialize(data: undefined): undefined
    deserialize(data: any): MaintainableUserSettings
    deserialize(data: any): MaintainableUserSettings | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.value = new UserSettingsValueSerializer().deserialize(copy.value);

        return new MaintainableUserSettings(copy);
    }

    serialize(entity: MaintainableUserSettings | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: MaintainableUserSettings, _forceTypeHint?: boolean): any
    serialize(entity: MaintainableUserSettings | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? MaintainableUserSettings.typeNameHint : undefined,
            id: entity.id,
            type: entity.type,
            value: new UserSettingsValueSerializer().serialize(entity.value, _forceTypeHint)
        };
    }
}
