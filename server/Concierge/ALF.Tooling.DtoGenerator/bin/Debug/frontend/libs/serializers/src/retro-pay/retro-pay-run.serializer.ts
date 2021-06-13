import { RetroPayRunType } from "@alf/models/retro-pay/enums/retro-pay-run-type";
import { Serializer } from "@alf/core/models";
import { RetroPayRun } from "@alf/models/retro-pay/retro-pay-run";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RetroPayRunSerializer implements Serializer<RetroPayRun> {

    deserialize(data: undefined): undefined
    deserialize(data: any): RetroPayRun
    deserialize(data: any): RetroPayRun | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.retroPayRunType = RetroPayRunType[copy.retroPayRunType];

        copy.retroPayRunStartContext = new Date(copy.retroPayRunStartContext);

        copy.orderedAt = new Date(copy.orderedAt);

        copy.runStartedAt = new Date(copy.runStartedAt);

        if (copy.runCompletedAt !== undefined)
            copy.runCompletedAt = new Date(copy.runCompletedAt);

        return new RetroPayRun(copy);
    }

    serialize(entity: RetroPayRun | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: RetroPayRun, _forceTypeHint?: boolean): any
    serialize(entity: RetroPayRun | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? RetroPayRun.typeNameHint : undefined,
            id: entity.id,
            code: entity.code,
            companyId: entity.companyId,
            calculationRunId: entity.calculationRunId,
            waitingForJobId: entity.waitingForJobId,
            retroPayRunType: RetroPayRunType[entity.retroPayRunType],
            retroPayRunStatus: entity.retroPayRunStatus,
            retroPayRunContext: entity.retroPayRunContext,
            retroPayRunStartContext: entity.retroPayRunStartContext
                ? entity.retroPayRunStartContext.toISOString()
                : undefined,
            fromPeriod: entity.fromPeriod,
            toPeriod: entity.toPeriod,
            employeeSelection: entity.employeeSelection,
            orderedByUsername: entity.orderedByUsername,
            orderedByuserId: entity.orderedByuserId,
            orderedAt: entity.orderedAt
                ? entity.orderedAt.toISOString()
                : undefined,
            runStartedAt: entity.runStartedAt
                ? entity.runStartedAt.toISOString()
                : undefined,
            runCompletedAt: entity.runCompletedAt
                ? entity.runCompletedAt.toISOString()
                : undefined,
            message: entity.message
        };
    }
}
