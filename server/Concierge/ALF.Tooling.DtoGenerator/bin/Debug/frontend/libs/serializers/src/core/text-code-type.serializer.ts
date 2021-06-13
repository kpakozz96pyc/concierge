import { TextCodeDataType } from "@alf/models/core/enums/text-code-data-type";
import { Serializer } from "@alf/core/models";
import { TextCodeType } from "@alf/models/core/text-code-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TextCodeTypeSerializer implements Serializer<TextCodeType> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TextCodeType
    deserialize(data: any): TextCodeType | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.dataType = TextCodeDataType[copy.dataType];

        return new TextCodeType(copy);
    }

    serialize(entity: TextCodeType | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TextCodeType, _forceTypeHint?: boolean): any
    serialize(entity: TextCodeType | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? TextCodeType.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            type: entity.type,
            description: entity.description,
            dataType: TextCodeDataType[entity.dataType],
            fieldLength: entity.fieldLength
        };
    }
}
