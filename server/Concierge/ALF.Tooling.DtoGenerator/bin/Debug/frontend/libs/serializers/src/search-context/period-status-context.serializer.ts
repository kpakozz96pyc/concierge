import { PeriodStatus } from "@alf/models/periods/enums/period-status";
import { Serializer } from "@alf/core/models";
import { PeriodStatusContext } from "@alf/models/search-context/period-status-context";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PeriodStatusContextSerializer implements Serializer<PeriodStatusContext> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PeriodStatusContext
    deserialize(data: any): PeriodStatusContext | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.periodStatus = PeriodStatus[copy.periodStatus];

        return new PeriodStatusContext(copy);
    }

    serialize(entity: PeriodStatusContext | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PeriodStatusContext, _forceTypeHint?: boolean): any
    serialize(entity: PeriodStatusContext | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PeriodStatusContext.typeNameHint : undefined,
            periodStatus: PeriodStatus[entity.periodStatus]
        };
    }
}
