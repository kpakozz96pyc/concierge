import { Serializer } from "@alf/core/models";
import { ReportDefinitionExtendedInformation } from "@alf/models/extended-information/report-definition-extended-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ReportDefinitionExtendedInformationSerializer implements Serializer<ReportDefinitionExtendedInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ReportDefinitionExtendedInformation
    deserialize(data: any): ReportDefinitionExtendedInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ReportDefinitionExtendedInformation(copy);
    }

    serialize(entity: ReportDefinitionExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ReportDefinitionExtendedInformation, _forceTypeHint?: boolean): any
    serialize(entity: ReportDefinitionExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ReportDefinitionExtendedInformation.typeNameHint : undefined,
            tableNumber: entity.tableNumber,
            areaMetadata: entity.areaMetadata
        };
    }
}
