import { Serializer } from "@alf/core/models";
import { TenantRuntimeSettings } from "@alf/models/configuration/tenant-runtime-settings";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TenantRuntimeSettingsSerializer implements Serializer<TenantRuntimeSettings> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TenantRuntimeSettings
    deserialize(data: any): TenantRuntimeSettings | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new TenantRuntimeSettings(copy);
    }

    serialize(entity: TenantRuntimeSettings | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TenantRuntimeSettings, _forceTypeHint?: boolean): any
    serialize(entity: TenantRuntimeSettings | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? TenantRuntimeSettings.typeNameHint : undefined,
            tenantMasterCompanyId: entity.tenantMasterCompanyId
        };
    }
}
