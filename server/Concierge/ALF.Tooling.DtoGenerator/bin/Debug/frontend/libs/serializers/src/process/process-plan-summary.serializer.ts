import { ProcessPlanSummaryType } from "@alf/models/process/enums/process-plan-summary-type";
import { Serializer } from "@alf/core/models";
import { ProcessPlanSummary } from "@alf/models/process/process-plan-summary";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessPlanSummarySerializer implements Serializer<ProcessPlanSummary> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessPlanSummary
    deserialize(data: any): ProcessPlanSummary | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.deadline !== undefined)
            copy.deadline = new Date(copy.deadline);

        copy.summaryType = ProcessPlanSummaryType[copy.summaryType];

        return new ProcessPlanSummary(copy);
    }

    serialize(entity: ProcessPlanSummary | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessPlanSummary, _forceTypeHint?: boolean): any
    serialize(entity: ProcessPlanSummary | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessPlanSummary.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            planId: entity.planId,
            deadline: entity.deadline
                ? entity.deadline.toISOString()
                : undefined,
            manualActionNeeded: entity.manualActionNeeded,
            periodId: entity.periodId,
            summaryType: ProcessPlanSummaryType[entity.summaryType],
            title: entity.title,
            subTitle: entity.subTitle,
            status: entity.status,
            periodState: entity.periodState,
            jobCount: entity.jobCount,
            taskCount: entity.taskCount,
            completedJobCount: entity.completedJobCount,
            completedTaskCount: entity.completedTaskCount,
            completedPercent: entity.completedPercent
        };
    }
}
