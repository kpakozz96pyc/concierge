import { Serializer } from "@alf/core/models";
import { GenerateOrder } from "@alf/models/generate-order/generate-order";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class GenerateOrderSerializer implements Serializer<GenerateOrder> {

    deserialize(data: undefined): undefined
    deserialize(data: any): GenerateOrder
    deserialize(data: any): GenerateOrder | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new GenerateOrder(copy);
    }

    serialize(entity: GenerateOrder | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: GenerateOrder, _forceTypeHint?: boolean): any
    serialize(entity: GenerateOrder | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? GenerateOrder.typeNameHint : undefined,
            ameldingMonthlySubmissionId: entity.ameldingMonthlySubmissionId,
            replacingAmeldingId: entity.replacingAmeldingId,
            isDraft: entity.isDraft,
            isBlank: entity.isBlank,
            includePaymentInfo: entity.includePaymentInfo,
            periodIds: entity.periodIds
        };
    }
}
