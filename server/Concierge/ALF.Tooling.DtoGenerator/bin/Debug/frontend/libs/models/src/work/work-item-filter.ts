
import { WorkItemClassification } from "./enums/work-item-classification";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkItemFilter {

    static $name = "WorkItemFilter";
    static typeNameHint = "ALF.Shared.Dto.Models.Work.WorkItemFilter, ALF.Shared.Dto"

    companyIds: string[] = [];
    periodIds: string[] = [];
    employeeIds: string[] = [];
    payslipDistributionForCompanyIds: string[] = [];
    payslipDistributionForCompanyAndPeriodIds: string[] = [];
    ameldingIds: string[] = [];
    ameldingErrorIds: string[] = [];
    controlDefinitionIds: string[] = [];
    processPlanIds: string[] = [];
    processMilestoneIds: string[] = [];
    employeeImportIds: string[] = [];
    taxInformationImportIds: string[] = [];
    taxInformationImportDeviationCodes: string[] = [];
    companyIndependentPeriodNumbers: number[] = [];
    workItemClassifications: WorkItemClassification[] = [];
    assignedToMe: boolean;
    assignedToOthers: boolean;
    notAssigned: boolean;
    usersAssigned: string[] = [];

    constructor(data?: Partial<WorkItemFilter>) {
        Object.assign(this, data);
    }
}
