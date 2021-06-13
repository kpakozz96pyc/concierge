import { Serializer } from "@alf/core/models";
import { RegulativeContext } from "@alf/models/search-context/regulative-context";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RegulativeContextSerializer implements Serializer<RegulativeContext> {

    deserialize(data: undefined): undefined
    deserialize(data: any): RegulativeContext
    deserialize(data: any): RegulativeContext | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new RegulativeContext(copy);
    }

    serialize(entity: RegulativeContext | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: RegulativeContext, _forceTypeHint?: boolean): any
    serialize(entity: RegulativeContext | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? RegulativeContext.typeNameHint : undefined,
            regulativeCode: entity.regulativeCode
        };
    }
}
