import { Serializer } from "@alf/core/models";
import { WorkItemTransactionImportNavigationAction } from "@alf/models/work/work-item-transaction-import-navigation-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkItemTransactionImportNavigationActionSerializer implements Serializer<WorkItemTransactionImportNavigationAction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WorkItemTransactionImportNavigationAction
    deserialize(data: any): WorkItemTransactionImportNavigationAction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new WorkItemTransactionImportNavigationAction(copy);
    }

    serialize(entity: WorkItemTransactionImportNavigationAction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WorkItemTransactionImportNavigationAction, _forceTypeHint?: boolean): any
    serialize(entity: WorkItemTransactionImportNavigationAction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            companyId: entity.companyId,
            importId: entity.importId
        };
    }
}
