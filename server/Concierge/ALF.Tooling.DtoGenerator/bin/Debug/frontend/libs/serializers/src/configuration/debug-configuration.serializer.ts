import { Serializer } from "@alf/core/models";
import { DebugConfiguration } from "@alf/models/configuration/debug-configuration";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class DebugConfigurationSerializer implements Serializer<DebugConfiguration> {

    deserialize(data: undefined): undefined
    deserialize(data: any): DebugConfiguration
    deserialize(data: any): DebugConfiguration | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new DebugConfiguration(copy);
    }

    serialize(entity: DebugConfiguration | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: DebugConfiguration, _forceTypeHint?: boolean): any
    serialize(entity: DebugConfiguration | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? DebugConfiguration.typeNameHint : undefined,
            isDebugMode: entity.isDebugMode
        };
    }
}
