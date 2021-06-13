import { WageFrameAdvancementType } from "@alf/models/wage/enums/wage-frame-advancement-type";
import { WageFrameItemStepSerializer } from "./wage-frame-item-step.serializer";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { WageFrameItem } from "@alf/models/wage/wage-frame-item";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WageFrameItemSerializer implements Serializer<WageFrameItem> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WageFrameItem
    deserialize(data: any): WageFrameItem | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.fromDate = new Date(copy.fromDate);

        copy.advancementType = WageFrameAdvancementType[copy.advancementType];

        copy.steps = (copy.steps || []).map(new WageFrameItemStepSerializer().deserialize);

        return new WageFrameItem(copy);
    }

    serialize(entity: WageFrameItem | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WageFrameItem, _forceTypeHint?: boolean): any
    serialize(entity: WageFrameItem | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? WageFrameItem.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            wageFrameCode: entity.wageFrameCode,
            fromDate: serializeDate(entity.fromDate),
            wageFrameId: entity.wageFrameId,
            regulative: entity.regulative,
            advancementType: WageFrameAdvancementType[entity.advancementType],
            positionSeries: entity.positionSeries,
            wagePlan: entity.wagePlan,
            positionGroup: entity.positionGroup,
            requiredEducation: entity.requiredEducation,
            steps: entity.steps
                ? entity.steps.map(e => new WageFrameItemStepSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
