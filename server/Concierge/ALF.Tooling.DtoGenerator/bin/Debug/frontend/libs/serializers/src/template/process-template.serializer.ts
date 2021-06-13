import { Serializer } from "@alf/core/models";
import { ProcessTemplate } from "@alf/models/template/process-template";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessTemplateSerializer implements Serializer<ProcessTemplate> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ProcessTemplate
    deserialize(data: any): ProcessTemplate | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ProcessTemplate(copy);
    }

    serialize(entity: ProcessTemplate | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ProcessTemplate, _forceTypeHint?: boolean): any
    serialize(entity: ProcessTemplate | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ProcessTemplate.typeNameHint : undefined,
            id: entity.id,
            inheritTemplateId: entity.inheritTemplateId,
            processTemplateType: entity.processTemplateType,
            isSystemShipped: entity.isSystemShipped,
            milestones: entity.milestones,
            title: entity.title,
            description: entity.description,
            tags: entity.tags,
            startFormula: entity.startFormula,
            earliestPossibleCreationFormula: entity.earliestPossibleCreationFormula,
            latestPossibleCreationFormula: entity.latestPossibleCreationFormula,
            creationCondition: entity.creationCondition,
            cycleTimeUnit: entity.cycleTimeUnit,
            cycleTimeFilter: entity.cycleTimeFilter,
            intervalStartFormula: entity.intervalStartFormula,
            intervalEndFormula: entity.intervalEndFormula
        };
    }
}
