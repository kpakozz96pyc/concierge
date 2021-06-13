import { CompanyControlParameterSerializer } from "./company-control-parameter.serializer";
import { Serializer } from "@alf/core/models";
import { CompanyControl } from "@alf/models/control/company-control";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CompanyControlSerializer implements Serializer<CompanyControl> {

    deserialize(data: undefined): undefined
    deserialize(data: any): CompanyControl
    deserialize(data: any): CompanyControl | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.overriddenValues = (copy.overriddenValues || []).map(new CompanyControlParameterSerializer().deserialize);

        return new CompanyControl(copy);
    }

    serialize(entity: CompanyControl | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: CompanyControl, _forceTypeHint?: boolean): any
    serialize(entity: CompanyControl | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? CompanyControl.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            controlDefinitionId: entity.controlDefinitionId,
            overriddenValues: entity.overriddenValues
                ? entity.overriddenValues.map(e => new CompanyControlParameterSerializer().serialize(e, _forceTypeHint))
                : undefined,
            active: entity.active
        };
    }
}
