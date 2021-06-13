import { FeatureStatus } from "@alf/models/feature/enums/feature-status";
import { Serializer } from "@alf/core/models";
import { EmployeeAbsenceFeature } from "@alf/models/feature-providers/employee-absence-feature";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeAbsenceFeatureSerializer implements Serializer<EmployeeAbsenceFeature> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeAbsenceFeature
    deserialize(data: any): EmployeeAbsenceFeature | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.status = FeatureStatus[copy.status];

        return new EmployeeAbsenceFeature(copy);
    }

    serialize(entity: EmployeeAbsenceFeature | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeAbsenceFeature, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeAbsenceFeature | undefined, _forceTypeHint?: boolean): any | undefined {
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
