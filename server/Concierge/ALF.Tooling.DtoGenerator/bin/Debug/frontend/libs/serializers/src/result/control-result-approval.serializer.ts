import { Serializer } from "@alf/core/models";
import { ControlResultApproval } from "@alf/models/result/control-result-approval";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ControlResultApprovalSerializer implements Serializer<ControlResultApproval> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ControlResultApproval
    deserialize(data: any): ControlResultApproval | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ControlResultApproval(copy);
    }

    serialize(entity: ControlResultApproval | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ControlResultApproval, _forceTypeHint?: boolean): any
    serialize(entity: ControlResultApproval | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ControlResultApproval.typeNameHint : undefined,
            controlType: entity.controlType,
            controlDefinitionId: entity.controlDefinitionId,
            controlDefinitionVersion: entity.controlDefinitionVersion,
            controlCompanyVersion: entity.controlCompanyVersion,
            employeeNumber: entity.employeeNumber,
            controlResultIdentifier: entity.controlResultIdentifier
        };
    }
}
