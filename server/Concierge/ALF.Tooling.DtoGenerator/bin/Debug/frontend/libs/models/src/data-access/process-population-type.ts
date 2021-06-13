
import { PopulationType } from "../populations/enums/population-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessPopulationType {

    static $name = "ProcessPopulationType";
    static typeNameHint = "ALF.Shared.Dto.Models.DataAccess.ProcessPopulationType, ALF.Shared.Dto"

    processId?: string;
    populationType: PopulationType;

    constructor(data?: Partial<ProcessPopulationType>) {
        Object.assign(this, data);
    }
}
