import { Serializer } from "@alf/core/models";
import { Regulative } from "@alf/models/wage/regulative";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RegulativeSerializer implements Serializer<Regulative> {

    deserialize(data: undefined): undefined
    deserialize(data: any): Regulative
    deserialize(data: any): Regulative | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new Regulative(copy);
    }

    serialize(entity: Regulative | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: Regulative, _forceTypeHint?: boolean): any
    serialize(entity: Regulative | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? Regulative.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            regulativeCode: entity.regulativeCode,
            description: entity.description
        };
    }
}
