import { Serializer } from "@alf/core/models";
import { ReportDefinitionDetails } from "@alf/models/reports/report-definition-details";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ReportDefinitionDetailsSerializer implements Serializer<ReportDefinitionDetails> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ReportDefinitionDetails
    deserialize(data: any): ReportDefinitionDetails | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ReportDefinitionDetails(copy);
    }

    serialize(entity: ReportDefinitionDetails | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ReportDefinitionDetails, _forceTypeHint?: boolean): any
    serialize(entity: ReportDefinitionDetails | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ReportDefinitionDetails.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            serialNumber: entity.serialNumber,
            tableNumber: entity.tableNumber,
            fieldNumber: entity.fieldNumber,
            dataType: entity.dataType,
            fieldLength: entity.fieldLength,
            numberOfDecimals: entity.numberOfDecimals,
            heading: entity.heading,
            filterRule: entity.filterRule,
            sortOrder: entity.sortOrder,
            breakOnNewGroup: entity.breakOnNewGroup,
            pageBreakOnNewGroup: entity.pageBreakOnNewGroup,
            summary: entity.summary,
            leadingNull: entity.leadingNull,
            simplifiedSelection: entity.simplifiedSelection,
            hiddenField: entity.hiddenField,
            blankNULLValues: entity.blankNULLValues,
            lookup: entity.lookup,
            lookupLength: entity.lookupLength,
            lookupHeading: entity.lookupHeading,
            isTimelineField: entity.isTimelineField
        };
    }
}
