import { Serializer } from "@alf/core/models";
import { MoveToCompanyAction } from "@alf/models/import/move-to-company-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class MoveToCompanyActionSerializer implements Serializer<MoveToCompanyAction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): MoveToCompanyAction
    deserialize(data: any): MoveToCompanyAction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new MoveToCompanyAction(copy);
    }

    serialize(entity: MoveToCompanyAction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: MoveToCompanyAction, _forceTypeHint?: boolean): any
    serialize(entity: MoveToCompanyAction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            companyId: entity.companyId,
            variableTransactionImportHeapId: entity.variableTransactionImportHeapId,
            transactionIds: entity.transactionIds
        };
    }
}
