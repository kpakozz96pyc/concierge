import { InputTransactionSerializer } from "./input-transaction.serializer";
import { TransactionFieldInputSerializer } from "./transaction-field-input.serializer";
import { Serializer } from "@alf/core/models";
import { TransactionTemplate } from "@alf/models/transactions/transaction-template";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TransactionTemplateSerializer implements Serializer<TransactionTemplate> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TransactionTemplate
    deserialize(data: any): TransactionTemplate | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.parameters = (copy.parameters || []).map(new TransactionFieldInputSerializer().deserialize);

        copy.transaction = new InputTransactionSerializer().deserialize(copy.transaction);

        return new TransactionTemplate(copy);
    }

    serialize(entity: TransactionTemplate | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TransactionTemplate, _forceTypeHint?: boolean): any
    serialize(entity: TransactionTemplate | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? TransactionTemplate.typeNameHint : undefined,
            id: entity.id,
            code: entity.code,
            name: entity.name,
            parameters: entity.parameters
                ? entity.parameters.map(e => new TransactionFieldInputSerializer().serialize(e, _forceTypeHint))
                : undefined,
            transaction: new InputTransactionSerializer().serialize(entity.transaction, _forceTypeHint),
            isPersonalOnly: entity.isPersonalOnly,
            allowAttachment: entity.allowAttachment,
            requiredAttachmentInWebTrans: entity.requiredAttachmentInWebTrans,
            requiredAttachmentInVariableTrans: entity.requiredAttachmentInVariableTrans,
            requiredAttachmentInFixedTrans: entity.requiredAttachmentInFixedTrans,
            employmentId: entity.employmentId
        };
    }
}
