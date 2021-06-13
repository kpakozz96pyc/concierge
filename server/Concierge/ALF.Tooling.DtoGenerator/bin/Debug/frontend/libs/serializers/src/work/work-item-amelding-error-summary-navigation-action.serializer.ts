import { Serializer } from "@alf/core/models";
import { WorkItemAmeldingErrorSummaryNavigationAction } from "@alf/models/work/work-item-amelding-error-summary-navigation-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkItemAmeldingErrorSummaryNavigationActionSerializer implements Serializer<WorkItemAmeldingErrorSummaryNavigationAction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WorkItemAmeldingErrorSummaryNavigationAction
    deserialize(data: any): WorkItemAmeldingErrorSummaryNavigationAction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new WorkItemAmeldingErrorSummaryNavigationAction(copy);
    }

    serialize(entity: WorkItemAmeldingErrorSummaryNavigationAction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WorkItemAmeldingErrorSummaryNavigationAction, _forceTypeHint?: boolean): any
    serialize(entity: WorkItemAmeldingErrorSummaryNavigationAction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            companyId: entity.companyId,
            ameldingId: entity.ameldingId,
            errorType: entity.errorType
        };
    }
}
