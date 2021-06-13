import { Serializer } from "@alf/core/models";
import { ControlResultOverview } from "@alf/models/salary-calculation/control-result-overview";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ControlResultOverviewSerializer implements Serializer<ControlResultOverview> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ControlResultOverview
    deserialize(data: any): ControlResultOverview | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ControlResultOverview(copy);
    }

    serialize(entity: ControlResultOverview | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ControlResultOverview, _forceTypeHint?: boolean): any
    serialize(entity: ControlResultOverview | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ControlResultOverview.typeNameHint : undefined,
            approvedFailureCount: entity.approvedFailureCount,
            unapprovedFailureCount: entity.unapprovedFailureCount,
            approvedWarningCount: entity.approvedWarningCount,
            unapprovedWarningCount: entity.unapprovedWarningCount,
            approvedInfoCount: entity.approvedInfoCount,
            unapprovedInfoCount: entity.unapprovedInfoCount
        };
    }
}
