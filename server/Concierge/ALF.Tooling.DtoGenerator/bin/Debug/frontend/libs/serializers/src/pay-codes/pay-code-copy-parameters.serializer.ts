import { Serializer } from "@alf/core/models";
import { PayCodeCopyParameters } from "@alf/models/pay-codes/pay-code-copy-parameters";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PayCodeCopyParametersSerializer implements Serializer<PayCodeCopyParameters> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PayCodeCopyParameters
    deserialize(data: any): PayCodeCopyParameters | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new PayCodeCopyParameters(copy);
    }

    serialize(entity: PayCodeCopyParameters | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PayCodeCopyParameters, _forceTypeHint?: boolean): any
    serialize(entity: PayCodeCopyParameters | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PayCodeCopyParameters.typeNameHint : undefined,
            copyFromId: entity.copyFromId,
            copyToPayCodeNumber: entity.copyToPayCodeNumber,
            description: entity.description
        };
    }
}
