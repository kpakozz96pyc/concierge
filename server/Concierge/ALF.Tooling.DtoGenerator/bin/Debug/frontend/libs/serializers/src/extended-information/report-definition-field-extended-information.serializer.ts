import { Serializer } from "@alf/core/models";
import { ReportDefinitionFieldExtendedInformation } from "@alf/models/extended-information/report-definition-field-extended-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ReportDefinitionFieldExtendedInformationSerializer implements Serializer<ReportDefinitionFieldExtendedInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ReportDefinitionFieldExtendedInformation
    deserialize(data: any): ReportDefinitionFieldExtendedInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ReportDefinitionFieldExtendedInformation(copy);
    }

    serialize(entity: ReportDefinitionFieldExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ReportDefinitionFieldExtendedInformation, _forceTypeHint?: boolean): any
    serialize(entity: ReportDefinitionFieldExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ReportDefinitionFieldExtendedInformation.typeNameHint : undefined,
            tableNumber: entity.tableNumber,
            tableName: entity.tableName,
            dataType: entity.dataType,
            decimalPlaces: entity.decimalPlaces,
            totalLength: entity.totalLength,
            displayName: entity.displayName,
            lookupName: entity.lookupName,
            lookupLength: entity.lookupLength,
            isVirtualField: entity.isVirtualField
        };
    }
}
