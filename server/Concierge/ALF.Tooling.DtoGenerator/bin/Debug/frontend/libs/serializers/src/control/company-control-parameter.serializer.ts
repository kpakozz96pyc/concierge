import { Serializer } from "@alf/core/models";
import { CompanyControlParameter } from "@alf/models/control/company-control-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CompanyControlParameterSerializer implements Serializer<CompanyControlParameter> {

    deserialize(data: undefined): undefined
    deserialize(data: any): CompanyControlParameter
    deserialize(data: any): CompanyControlParameter | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new CompanyControlParameter(copy);
    }

    serialize(entity: CompanyControlParameter | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: CompanyControlParameter, _forceTypeHint?: boolean): any
    serialize(entity: CompanyControlParameter | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? CompanyControlParameter.typeNameHint : undefined,
            parameterName: entity.parameterName,
            subPart: entity.subPart,
            overriddenValue: entity.overriddenValue
        };
    }
}
