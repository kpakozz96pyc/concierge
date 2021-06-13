import { Serializer } from "@alf/core/models";
import { ActionCode } from "@alf/models/core/action-code";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ActionCodeSerializer implements Serializer<ActionCode> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ActionCode
    deserialize(data: any): ActionCode | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ActionCode(copy);
    }

    serialize(entity: ActionCode | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ActionCode, _forceTypeHint?: boolean): any
    serialize(entity: ActionCode | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ActionCode.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            code: entity.code,
            description: entity.description,
            terminationCode: entity.terminationCode,
            logTableNumber: entity.logTableNumber,
            logFieldNumber: entity.logFieldNumber,
            free01: entity.free01,
            withdrawalCode: entity.withdrawalCode,
            withdrawalAddressCode: entity.withdrawalAddressCode,
            actionTableNumber: entity.actionTableNumber,
            actionFieldNumber: entity.actionFieldNumber,
            free02: entity.free02,
            deletingStatus: entity.deletingStatus
        };
    }
}
