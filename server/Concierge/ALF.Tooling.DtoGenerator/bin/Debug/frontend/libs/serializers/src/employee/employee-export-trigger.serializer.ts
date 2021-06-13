import { Serializer } from "@alf/core/models";
import { EmployeeExportTrigger } from "@alf/models/employee/employee-export-trigger";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeExportTriggerSerializer implements Serializer<EmployeeExportTrigger> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeExportTrigger
    deserialize(data: any): EmployeeExportTrigger | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new EmployeeExportTrigger(copy);
    }

    serialize(entity: EmployeeExportTrigger | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeExportTrigger, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeExportTrigger | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmployeeExportTrigger.typeNameHint : undefined,
            id: entity.id,
            integrationPipelineId: entity.integrationPipelineId,
            exportDestinationId: entity.exportDestinationId,
            description: entity.description,
            event: entity.event,
            contextType: entity.contextType,
            packageSplit: entity.packageSplit,
            minimumPullIntervalSeconds: entity.minimumPullIntervalSeconds,
            isActive: entity.isActive,
            filterQuery: entity.filterQuery,
            dataType: entity.dataType,
            exportType: entity.exportType
        };
    }
}
