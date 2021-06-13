
import { ProcessTemplateId } from "./process-template";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ProcessTemplateSetId = string;

export class ProcessTemplateSet {

    static $name = "ProcessTemplateSet";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.Template.ProcessTemplateSet, ALF.Shared.Dto"

    id: ProcessTemplateSetId;
    isSystemShipped: boolean;
    title: string;
    description?: string;
    canConnectToCompany: boolean;
    templateIds: ProcessTemplateId[] = [];
    linkedTemplateSets: { [key: string]: string[] } = {};

    constructor(data?: Partial<ProcessTemplateSet>) {
        Object.assign(this, data);
    }
}
