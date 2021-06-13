
import { PopulationType } from "../populations/enums/population-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PopulationTypeContext {

    static $name = "PopulationTypeContext";
    static typeNameHint = "ALF.Shared.Dto.Models.SearchContext.PopulationTypeContext, ALF.Shared.Dto"

    populationType: PopulationType;

    constructor(data?: Partial<PopulationTypeContext>) {
        Object.assign(this, data);
    }
}
