import { ControlTypeCategory } from "@alf/models/control/enums/control-type-category";
import { Serializer } from "@alf/core/models";
import { ControlTypeExtendedInformation } from "@alf/models/extended-information/control-type-extended-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ControlTypeExtendedInformationSerializer implements Serializer<ControlTypeExtendedInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ControlTypeExtendedInformation
    deserialize(data: any): ControlTypeExtendedInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.categories = (copy.categories || []).map((item: any) => ControlTypeCategory[item]);

        return new ControlTypeExtendedInformation(copy);
    }

    serialize(entity: ControlTypeExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ControlTypeExtendedInformation, _forceTypeHint?: boolean): any
    serialize(entity: ControlTypeExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ControlTypeExtendedInformation.typeNameHint : undefined,
            isInstanceable: entity.isInstanceable,
            categories: entity.categories
                ? entity.categories.map(item => ControlTypeCategory[item])
                : undefined
        };
    }
}
