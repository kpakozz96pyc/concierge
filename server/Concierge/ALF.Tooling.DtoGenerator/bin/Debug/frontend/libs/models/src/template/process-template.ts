
import { ProcessTemplateType } from "./enums/process-template-type";
import { CreationCondition } from "./enums/creation-condition";
import { ProcessCycleTimeUnit } from "../process/enums/process-cycle-time-unit";
import { ProcessTemplateMilestoneId } from "./process-template-milestone";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ProcessTemplateId = string;

export class ProcessTemplate {

    static $name = "ProcessTemplate";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.Template.ProcessTemplate, ALF.Shared.Dto"

    id: ProcessTemplateId;
    inheritTemplateId?: string;
    processTemplateType: ProcessTemplateType;
    isSystemShipped: boolean;
    milestones: ProcessTemplateMilestoneId[] = [];
    title: string;
    description?: string;
    tags: string[] = [];
    startFormula?: string;
    earliestPossibleCreationFormula?: string;
    latestPossibleCreationFormula?: string;
    creationCondition?: CreationCondition;
    cycleTimeUnit?: ProcessCycleTimeUnit;
    cycleTimeFilter: number[] = [];
    intervalStartFormula?: string;
    intervalEndFormula?: string;

    constructor(data?: Partial<ProcessTemplate>) {
        Object.assign(this, data);
    }
}
