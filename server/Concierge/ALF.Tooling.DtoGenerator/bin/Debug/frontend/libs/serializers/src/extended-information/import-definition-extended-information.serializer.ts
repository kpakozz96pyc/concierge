import { Serializer } from "@alf/core/models";
import { ImportDefinitionExtendedInformation } from "@alf/models/extended-information/import-definition-extended-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ImportDefinitionExtendedInformationSerializer implements Serializer<ImportDefinitionExtendedInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ImportDefinitionExtendedInformation
    deserialize(data: any): ImportDefinitionExtendedInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ImportDefinitionExtendedInformation(copy);
    }

    serialize(entity: ImportDefinitionExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ImportDefinitionExtendedInformation, _forceTypeHint?: boolean): any
    serialize(entity: ImportDefinitionExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ImportDefinitionExtendedInformation.typeNameHint : undefined,
            shortDescription: entity.shortDescription,
            longDescription: entity.longDescription,
            hiddenInPayrollPortal: entity.hiddenInPayrollPortal,
            availableInCustomerPortal: entity.availableInCustomerPortal
        };
    }
}
