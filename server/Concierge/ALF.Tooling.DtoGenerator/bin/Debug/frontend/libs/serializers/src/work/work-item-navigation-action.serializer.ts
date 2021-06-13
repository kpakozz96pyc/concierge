import { WorkItemEmployeeNavigationActionSerializer } from "./work-item-employee-navigation-action.serializer";
import { WorkItemOrganizationNavigationActionSerializer } from "./work-item-organization-navigation-action.serializer";
import { WorkItemCompanyInfoNavigationActionSerializer } from "./work-item-company-info-navigation-action.serializer";
import { WorkItemAmeldingNavigationActionSerializer } from "./work-item-amelding-navigation-action.serializer";
import { WorkItemAmeldingErrorSummaryNavigationActionSerializer } from "./work-item-amelding-error-summary-navigation-action.serializer";
import { WorkItemImmediateManagerFormNavigationActionSerializer } from "./work-item-immediate-manager-form-navigation-action.serializer";
import { WorkItemControlDefinitionNavigationActionSerializer } from "./work-item-control-definition-navigation-action.serializer";
import { WorkItemTransactionImportNavigationActionSerializer } from "./work-item-transaction-import-navigation-action.serializer";
import { ProcessPlanNavigationActionSerializer } from "./process-plan-navigation-action.serializer";
import { ManualProcessNavigationActionSerializer } from "./manual-process-navigation-action.serializer";
import { EmployeeImportNavigationActionSerializer } from "./employee-import-navigation-action.serializer";
import { BankTransferHeapNavigationActionSerializer } from "./bank-transfer-heap-navigation-action.serializer";
import { WorkItemEmployeeNavigationAction } from "@alf/models/work/work-item-employee-navigation-action";
import { WorkItemOrganizationNavigationAction } from "@alf/models/work/work-item-organization-navigation-action";
import { WorkItemCompanyInfoNavigationAction } from "@alf/models/work/work-item-company-info-navigation-action";
import { WorkItemAmeldingNavigationAction } from "@alf/models/work/work-item-amelding-navigation-action";
import { WorkItemAmeldingErrorSummaryNavigationAction } from "@alf/models/work/work-item-amelding-error-summary-navigation-action";
import { WorkItemImmediateManagerFormNavigationAction } from "@alf/models/work/work-item-immediate-manager-form-navigation-action";
import { WorkItemControlDefinitionNavigationAction } from "@alf/models/work/work-item-control-definition-navigation-action";
import { WorkItemTransactionImportNavigationAction } from "@alf/models/work/work-item-transaction-import-navigation-action";
import { ProcessPlanNavigationAction } from "@alf/models/work/process-plan-navigation-action";
import { ManualProcessNavigationAction } from "@alf/models/work/manual-process-navigation-action";
import { EmployeeImportNavigationAction } from "@alf/models/work/employee-import-navigation-action";
import { BankTransferHeapNavigationAction } from "@alf/models/work/bank-transfer-heap-navigation-action";
import { Serializer } from "@alf/core/models";
import { WorkItemNavigationAction } from "@alf/models/work/work-item-navigation-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkItemNavigationActionSerializer implements Serializer<WorkItemNavigationAction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WorkItemNavigationAction
    deserialize(data: any): WorkItemNavigationAction | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Work.WorkItemEmployeeNavigationAction, ALF.Shared.Dto")
            return new WorkItemEmployeeNavigationActionSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Work.WorkItemOrganizationNavigationAction, ALF.Shared.Dto")
            return new WorkItemOrganizationNavigationActionSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Work.WorkItemCompanyInfoNavigationAction, ALF.Shared.Dto")
            return new WorkItemCompanyInfoNavigationActionSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Work.WorkItemAmeldingNavigationAction, ALF.Shared.Dto")
            return new WorkItemAmeldingNavigationActionSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Work.WorkItemAmeldingErrorSummaryNavigationAction, ALF.Shared.Dto")
            return new WorkItemAmeldingErrorSummaryNavigationActionSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Work.WorkItemImmediateManagerFormNavigationAction, ALF.Shared.Dto")
            return new WorkItemImmediateManagerFormNavigationActionSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Work.WorkItemControlDefinitionNavigationAction, ALF.Shared.Dto")
            return new WorkItemControlDefinitionNavigationActionSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Work.WorkItemTransactionImportNavigationAction, ALF.Shared.Dto")
            return new WorkItemTransactionImportNavigationActionSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Work.ProcessPlanNavigationAction, ALF.Shared.Dto")
            return new ProcessPlanNavigationActionSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Work.ManualProcessNavigationAction, ALF.Shared.Dto")
            return new ManualProcessNavigationActionSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Work.EmployeeImportNavigationAction, ALF.Shared.Dto")
            return new EmployeeImportNavigationActionSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Work.BankTransferHeapNavigationAction, ALF.Shared.Dto")
            return new BankTransferHeapNavigationActionSerializer().deserialize(data);

        throw new Error("Unable to deserialize WorkItemNavigationAction, cannot infer type from " + data.$type);
    }

    serialize(entity: WorkItemNavigationAction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WorkItemNavigationAction, _forceTypeHint?: boolean): any
    serialize(entity: WorkItemNavigationAction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Work.WorkItemEmployeeNavigationAction, ALF.Shared.Dto")
            return new WorkItemEmployeeNavigationActionSerializer().serialize(entity as WorkItemEmployeeNavigationAction, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Work.WorkItemOrganizationNavigationAction, ALF.Shared.Dto")
            return new WorkItemOrganizationNavigationActionSerializer().serialize(entity as WorkItemOrganizationNavigationAction, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Work.WorkItemCompanyInfoNavigationAction, ALF.Shared.Dto")
            return new WorkItemCompanyInfoNavigationActionSerializer().serialize(entity as WorkItemCompanyInfoNavigationAction, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Work.WorkItemAmeldingNavigationAction, ALF.Shared.Dto")
            return new WorkItemAmeldingNavigationActionSerializer().serialize(entity as WorkItemAmeldingNavigationAction, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Work.WorkItemAmeldingErrorSummaryNavigationAction, ALF.Shared.Dto")
            return new WorkItemAmeldingErrorSummaryNavigationActionSerializer().serialize(entity as WorkItemAmeldingErrorSummaryNavigationAction, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Work.WorkItemImmediateManagerFormNavigationAction, ALF.Shared.Dto")
            return new WorkItemImmediateManagerFormNavigationActionSerializer().serialize(entity as WorkItemImmediateManagerFormNavigationAction, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Work.WorkItemControlDefinitionNavigationAction, ALF.Shared.Dto")
            return new WorkItemControlDefinitionNavigationActionSerializer().serialize(entity as WorkItemControlDefinitionNavigationAction, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Work.WorkItemTransactionImportNavigationAction, ALF.Shared.Dto")
            return new WorkItemTransactionImportNavigationActionSerializer().serialize(entity as WorkItemTransactionImportNavigationAction, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Work.ProcessPlanNavigationAction, ALF.Shared.Dto")
            return new ProcessPlanNavigationActionSerializer().serialize(entity as ProcessPlanNavigationAction, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Work.ManualProcessNavigationAction, ALF.Shared.Dto")
            return new ManualProcessNavigationActionSerializer().serialize(entity as ManualProcessNavigationAction, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Work.EmployeeImportNavigationAction, ALF.Shared.Dto")
            return new EmployeeImportNavigationActionSerializer().serialize(entity as EmployeeImportNavigationAction, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Work.BankTransferHeapNavigationAction, ALF.Shared.Dto")
            return new BankTransferHeapNavigationActionSerializer().serialize(entity as BankTransferHeapNavigationAction, _forceTypeHint);

        throw new Error("Unable to serialize WorkItemNavigationAction, cannot infer type from " + entity.$type);
    }
}
