import { BaseDateType } from "@alf/models/relative-date/enums/base-date-type";
import { Serializer } from "@alf/core/models";
import { BaseDateContext } from "@alf/models/search-context/base-date-context";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BaseDateContextSerializer implements Serializer<BaseDateContext> {

    deserialize(data: undefined): undefined
    deserialize(data: any): BaseDateContext
    deserialize(data: any): BaseDateContext | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.type = BaseDateType[copy.type];

        return new BaseDateContext(copy);
    }

    serialize(entity: BaseDateContext | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: BaseDateContext, _forceTypeHint?: boolean): any
    serialize(entity: BaseDateContext | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? BaseDateContext.typeNameHint : undefined,
            type: BaseDateType[entity.type]
        };
    }
}
