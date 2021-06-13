import { Serializer } from "@alf/core/models";
import { CompanyControlExtendedInformation } from "@alf/models/extended-information/company-control-extended-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CompanyControlExtendedInformationSerializer implements Serializer<CompanyControlExtendedInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): CompanyControlExtendedInformation
    deserialize(data: any): CompanyControlExtendedInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new CompanyControlExtendedInformation(copy);
    }

    serialize(entity: CompanyControlExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: CompanyControlExtendedInformation, _forceTypeHint?: boolean): any
    serialize(entity: CompanyControlExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? CompanyControlExtendedInformation.typeNameHint : undefined,
            active: entity.active,
            isCompanyControl: entity.isCompanyControl
        };
    }
}
