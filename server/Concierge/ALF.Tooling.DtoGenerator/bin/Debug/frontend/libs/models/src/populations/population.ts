
import { PopulationType } from "./enums/population-type";
import { PopulationTreeNode } from "../tree-structure/population-tree-node";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type PopulationId = string;

export class Population {

    static $name = "Population";
    static typeNameHint = "ALF.Shared.Dto.Models.DataAccess.Populations.Population, ALF.Shared.Dto"

    id: PopulationId;
    description?: string;
    populationType: PopulationType;
    rootNode?: PopulationTreeNode;
    isSystemShipped: boolean;

    constructor(data?: Partial<Population>) {
        Object.assign(this, data);
    }
}
