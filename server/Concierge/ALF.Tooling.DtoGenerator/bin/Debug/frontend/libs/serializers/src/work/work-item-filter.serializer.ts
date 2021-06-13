import { Serializer } from "@alf/core/models";
import { WorkItemFilter } from "@alf/models/work/work-item-filter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkItemFilterSerializer implements Serializer<WorkItemFilter> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WorkItemFilter
    deserialize(data: any): WorkItemFilter | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new WorkItemFilter(copy);
    }

    serialize(entity: WorkItemFilter | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WorkItemFilter, _forceTypeHint?: boolean): any
    serialize(entity: WorkItemFilter | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? WorkItemFilter.typeNameHint : undefined,
            companyIds: entity.companyIds,
            periodIds: entity.periodIds,
            employeeIds: entity.employeeIds,
            payslipDistributionForCompanyIds: entity.payslipDistributionForCompanyIds,
            payslipDistributionForCompanyAndPeriodIds: entity.payslipDistributionForCompanyAndPeriodIds,
            ameldingIds: entity.ameldingIds,
            ameldingErrorIds: entity.ameldingErrorIds,
            controlDefinitionIds: entity.controlDefinitionIds,
            processPlanIds: entity.processPlanIds,
            processMilestoneIds: entity.processMilestoneIds,
            employeeImportIds: entity.employeeImportIds,
            taxInformationImportIds: entity.taxInformationImportIds,
            taxInformationImportDeviationCodes: entity.taxInformationImportDeviationCodes,
            companyIndependentPeriodNumbers: entity.companyIndependentPeriodNumbers,
            workItemClassifications: entity.workItemClassifications,
            assignedToMe: entity.assignedToMe,
            assignedToOthers: entity.assignedToOthers,
            notAssigned: entity.notAssigned,
            usersAssigned: entity.usersAssigned
        };
    }
}
