import { FeatureStatus } from "@alf/models/feature/enums/feature-status";
import { Serializer } from "@alf/core/models";
import { ProcessScheduleJobProcessListFeature } from "@alf/models/feature-providers/process-schedule-job-process-list-feature";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessScheduleJobProcessListFeatureSerializer implements Serializer<ProcessScheduleJobProcessListFeature> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessScheduleJobProcessListFeature
    deserialize(data: any): ProcessScheduleJobProcessListFeature | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.status = FeatureStatus[copy.status];

        return new ProcessScheduleJobProcessListFeature(copy);
    }

    serialize(entity: ProcessScheduleJobProcessListFeature | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessScheduleJobProcessListFeature, _forceTypeHint?: boolean): any
    serialize(entity: ProcessScheduleJobProcessListFeature | undefined, _forceTypeHint?: boolean): any | undefined {
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
