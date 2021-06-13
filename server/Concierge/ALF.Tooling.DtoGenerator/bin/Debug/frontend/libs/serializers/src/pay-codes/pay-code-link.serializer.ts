import { PayCodeLinkFieldSerializer } from "./pay-code-link-field.serializer";
import { Serializer } from "@alf/core/models";
import { PayCodeLink } from "@alf/models/pay-codes/pay-code-link";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PayCodeLinkSerializer implements Serializer<PayCodeLink> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PayCodeLink
    deserialize(data: any): PayCodeLink | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.fields = (copy.fields || []).map(new PayCodeLinkFieldSerializer().deserialize);

        return new PayCodeLink(copy);
    }

    serialize(entity: PayCodeLink | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PayCodeLink, _forceTypeHint?: boolean): any
    serialize(entity: PayCodeLink | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PayCodeLink.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            payCodeId: entity.payCodeId,
            payCodeNumber: entity.payCodeNumber,
            linkedPayCodeNumber: entity.linkedPayCodeNumber,
            linkTriggerBehavior: entity.linkTriggerBehavior,
            fields: entity.fields
                ? entity.fields.map(e => new PayCodeLinkFieldSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
