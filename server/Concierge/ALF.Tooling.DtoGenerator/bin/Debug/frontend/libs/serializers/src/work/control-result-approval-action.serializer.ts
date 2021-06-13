import { Serializer } from "@alf/core/models";
import { ControlResultApprovalAction } from "@alf/models/work/control-result-approval-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ControlResultApprovalActionSerializer implements Serializer<ControlResultApprovalAction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ControlResultApprovalAction
    deserialize(data: any): ControlResultApprovalAction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ControlResultApprovalAction(copy);
    }

    serialize(entity: ControlResultApprovalAction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ControlResultApprovalAction, _forceTypeHint?: boolean): any
    serialize(entity: ControlResultApprovalAction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            controlType: entity.controlType,
            controlDefinitionId: entity.controlDefinitionId,
            controlDefinitionVersion: entity.controlDefinitionVersion,
            controlCompanyVersion: entity.controlCompanyVersion,
            employeeNumber: entity.employeeNumber,
            controlResultIdentifier: entity.controlResultIdentifier,
            companyId: entity.companyId,
            periodNumber: entity.periodNumber
        };
    }
}
