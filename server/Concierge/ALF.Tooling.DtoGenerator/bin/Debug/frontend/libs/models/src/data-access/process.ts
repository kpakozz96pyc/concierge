
import { ProcessLevel } from "./enums/process-level";
import { FeatureGroup } from "./enums/feature-group";
import { Feature } from "./enums/feature";
import { ProcessPopulationType } from "./process-population-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ProcessId = string;

export class Process {

    static $name = "Process";
    static typeNameHint = "ALF.Shared.Dto.Models.DataAccess.Process, ALF.Shared.Dto"

    id: ProcessId;
    name?: string;
    processLevel: ProcessLevel;
    featureGroup: FeatureGroup;
    feature: Feature;
    populationTypes: ProcessPopulationType[] = [];

    constructor(data?: Partial<Process>) {
        Object.assign(this, data);
    }
}
