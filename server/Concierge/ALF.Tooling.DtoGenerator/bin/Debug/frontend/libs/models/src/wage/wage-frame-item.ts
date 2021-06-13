
import { WageFrameAdvancementType } from "./enums/wage-frame-advancement-type";
import { CompanyId } from "../core/company";
import { WageFrameItemStep } from "./wage-frame-item-step";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type WageFrameItemId = string;

export class WageFrameItem {

    static $name = "WageFrameItem";
    static typeNameHint = "ALF.Shared.Dto.Models.Wage.WageFrameItem, ALF.Shared.Dto"

    id: WageFrameItemId;
    companyId: CompanyId;
    wageFrameCode: string;
    fromDate: Date;
    wageFrameId?: string;
    regulative?: string;
    advancementType: WageFrameAdvancementType;
    positionSeries?: number;
    wagePlan?: number;
    positionGroup?: number;
    requiredEducation?: string;
    steps: WageFrameItemStep[] = [];

    constructor(data?: Partial<WageFrameItem>) {
        Object.assign(this, data);
    }
}
