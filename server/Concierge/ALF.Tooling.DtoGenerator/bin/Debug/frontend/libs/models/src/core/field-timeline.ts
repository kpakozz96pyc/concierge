
import { DtoFieldMetadataId } from "../database-metadata/dto-field-metadata";
import { FieldTimelineValue } from "./field-timeline-value";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type FieldTimelineId = string;

export class FieldTimeline {

    static $name = "FieldTimeline";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.FieldTimeline, ALF.Shared.Dto"

    id: FieldTimelineId;
    fieldId: string;
    entityId: string;
    isReadOnly: boolean;
    dtoFieldMetadataId: DtoFieldMetadataId;
    timeline: FieldTimelineValue[] = [];

    constructor(data?: Partial<FieldTimeline>) {
        Object.assign(this, data);
    }
}
