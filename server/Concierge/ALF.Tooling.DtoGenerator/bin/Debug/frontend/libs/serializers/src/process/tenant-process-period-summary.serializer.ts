import { ProcessPlanSummaryType } from "@alf/models/process/enums/process-plan-summary-type";
import { PayrollPeriodDisplayInfoSerializer } from "../periods/payroll-period-display-info.serializer";
import { Serializer } from "@alf/core/models";
import { TenantProcessPeriodSummary } from "@alf/models/process/tenant-process-period-summary";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TenantProcessPeriodSummarySerializer implements Serializer<TenantProcessPeriodSummary> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TenantProcessPeriodSummary
    deserialize(data: any): TenantProcessPeriodSummary | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.summaryType = ProcessPlanSummaryType[copy.summaryType];

        if (copy.deadline !== undefined)
            copy.deadline = new Date(copy.deadline);

        copy.period = new PayrollPeriodDisplayInfoSerializer().deserialize(copy.period);

        return new TenantProcessPeriodSummary(copy);
    }

    serialize(entity: TenantProcessPeriodSummary | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TenantProcessPeriodSummary, _forceTypeHint?: boolean): any
    serialize(entity: TenantProcessPeriodSummary | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? TenantProcessPeriodSummary.typeNameHint : undefined,
            companyId: entity.companyId,
            planId: entity.planId,
            summaryType: ProcessPlanSummaryType[entity.summaryType],
            title: entity.title,
            subTitle: entity.subTitle,
            manualActionNeeded: entity.manualActionNeeded,
            deadline: entity.deadline
                ? entity.deadline.toISOString()
                : undefined,
            period: new PayrollPeriodDisplayInfoSerializer().serialize(entity.period, _forceTypeHint)
        };
    }
}
