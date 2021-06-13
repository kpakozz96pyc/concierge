import { AutoImportSourceType } from "@alf/models/auto-import/enums/auto-import-source-type";
import { AutoImportSourceConfigurationSerializer } from "../config/auto-import-source-configuration.serializer";
import { Serializer } from "@alf/core/models";
import { AutoImportSource } from "@alf/models/auto-import/auto-import-source";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AutoImportSourceSerializer implements Serializer<AutoImportSource> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AutoImportSource
    deserialize(data: any): AutoImportSource | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.type = AutoImportSourceType[copy.type];

        copy.configuration = new AutoImportSourceConfigurationSerializer().deserialize(copy.configuration);

        return new AutoImportSource(copy);
    }

    serialize(entity: AutoImportSource | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AutoImportSource, _forceTypeHint?: boolean): any
    serialize(entity: AutoImportSource | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AutoImportSource.typeNameHint : undefined,
            id: entity.id,
            type: AutoImportSourceType[entity.type],
            basePath: entity.basePath,
            configuration: new AutoImportSourceConfigurationSerializer().serialize(entity.configuration, _forceTypeHint)
        };
    }
}
