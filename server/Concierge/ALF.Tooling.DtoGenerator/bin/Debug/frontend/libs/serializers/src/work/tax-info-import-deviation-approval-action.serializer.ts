import { Serializer } from "@alf/core/models";
import { TaxInfoImportDeviationApprovalAction } from "@alf/models/work/tax-info-import-deviation-approval-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TaxInfoImportDeviationApprovalActionSerializer implements Serializer<TaxInfoImportDeviationApprovalAction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TaxInfoImportDeviationApprovalAction
    deserialize(data: any): TaxInfoImportDeviationApprovalAction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new TaxInfoImportDeviationApprovalAction(copy);
    }

    serialize(entity: TaxInfoImportDeviationApprovalAction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TaxInfoImportDeviationApprovalAction, _forceTypeHint?: boolean): any
    serialize(entity: TaxInfoImportDeviationApprovalAction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            taxInformationImportDeviationId: entity.taxInformationImportDeviationId
        };
    }
}
