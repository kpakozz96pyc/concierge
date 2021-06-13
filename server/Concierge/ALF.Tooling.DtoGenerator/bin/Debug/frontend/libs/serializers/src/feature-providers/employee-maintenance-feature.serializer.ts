import { FeatureStatus } from "@alf/models/feature/enums/feature-status";
import { Serializer } from "@alf/core/models";
import { EmployeeMaintenanceFeature } from "@alf/models/feature-providers/employee-maintenance-feature";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeMaintenanceFeatureSerializer implements Serializer<EmployeeMaintenanceFeature> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeMaintenanceFeature
    deserialize(data: any): EmployeeMaintenanceFeature | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.status = FeatureStatus[copy.status];

        return new EmployeeMaintenanceFeature(copy);
    }

    serialize(entity: EmployeeMaintenanceFeature | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeMaintenanceFeature, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeMaintenanceFeature | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            featureId: entity.featureId,
            description: entity.description,
            status: FeatureStatus[entity.status],
            overrideLevel: entity.overrideLevel,
            isVisibleInProduction: entity.isVisibleInProduction,
            isVisibleInDevelopment: entity.isVisibleInDevelopment,
            isVisible: entity.isVisible,
            id: entity.id,
            companyId: entity.companyId,
            isDevEnv: entity.isDevEnv
        };
    }
}
