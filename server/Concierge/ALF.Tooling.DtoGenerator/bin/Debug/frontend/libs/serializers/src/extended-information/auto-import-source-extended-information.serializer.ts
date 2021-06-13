import { AutoImportSourceType } from "@alf/models/auto-import/enums/auto-import-source-type";
import { Serializer } from "@alf/core/models";
import { AutoImportSourceExtendedInformation } from "@alf/models/extended-information/auto-import-source-extended-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AutoImportSourceExtendedInformationSerializer implements Serializer<AutoImportSourceExtendedInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AutoImportSourceExtendedInformation
    deserialize(data: any): AutoImportSourceExtendedInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.autoImportSourceType = AutoImportSourceType[copy.autoImportSourceType];

        return new AutoImportSourceExtendedInformation(copy);
    }

    serialize(entity: AutoImportSourceExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AutoImportSourceExtendedInformation, _forceTypeHint?: boolean): any
    serialize(entity: AutoImportSourceExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AutoImportSourceExtendedInformation.typeNameHint : undefined,
            autoImportSourceType: AutoImportSourceType[entity.autoImportSourceType]
        };
    }
}
