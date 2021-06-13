import { TextCodeDataType } from "@alf/models/core/enums/text-code-data-type";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { TextCode } from "@alf/models/core/text-code";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TextCodeSerializer implements Serializer<TextCode> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TextCode
    deserialize(data: any): TextCode | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.dataType = TextCodeDataType[copy.dataType];

        if (copy.validFrom !== undefined)
            copy.validFrom = new Date(copy.validFrom);

        if (copy.validTo !== undefined)
            copy.validTo = new Date(copy.validTo);

        return new TextCode(copy);
    }

    serialize(entity: TextCode | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TextCode, _forceTypeHint?: boolean): any
    serialize(entity: TextCode | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? TextCode.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            type: entity.type,
            typeName: entity.typeName,
            code: entity.code,
            dataType: TextCodeDataType[entity.dataType],
            fieldLength: entity.fieldLength,
            deleteStatus: entity.deleteStatus,
            validFrom: serializeDate(entity.validFrom),
            validTo: serializeDate(entity.validTo),
            cleared: entity.cleared,
            description: entity.description
        };
    }
}
