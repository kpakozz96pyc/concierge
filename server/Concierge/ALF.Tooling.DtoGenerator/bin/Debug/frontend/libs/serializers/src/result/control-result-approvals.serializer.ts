import { ControlResultApprovalSerializer } from "./control-result-approval.serializer";
import { Serializer } from "@alf/core/models";
import { ControlResultApprovals } from "@alf/models/result/control-result-approvals";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ControlResultApprovalsSerializer implements Serializer<ControlResultApprovals> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ControlResultApprovals
    deserialize(data: any): ControlResultApprovals | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.approvals = (copy.approvals || []).map(new ControlResultApprovalSerializer().deserialize);

        return new ControlResultApprovals(copy);
    }

    serialize(entity: ControlResultApprovals | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ControlResultApprovals, _forceTypeHint?: boolean): any
    serialize(entity: ControlResultApprovals | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ControlResultApprovals.typeNameHint : undefined,
            companyId: entity.companyId,
            periodNumber: entity.periodNumber,
            approvals: entity.approvals
                ? entity.approvals.map(e => new ControlResultApprovalSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
