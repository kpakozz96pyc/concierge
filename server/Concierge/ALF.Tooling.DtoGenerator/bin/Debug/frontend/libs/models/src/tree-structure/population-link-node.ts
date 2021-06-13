
import { PopulationId } from "../populations/population";
import { PopulationTreeNode } from "@alf/models/tree-structure/population-tree-node";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PopulationLinkNode extends PopulationTreeNode {

    static $name = "PopulationLinkNode";
    static typeNameHint = "ALF.Shared.Dto.Models.DataAccess.Populations.TreeStructure.PopulationLinkNode, ALF.Shared.Dto"

    populationId: PopulationId;

    constructor(data?: Partial<PopulationLinkNode>) {
        super(data);
        Object.assign(this, data);
        this.$type = PopulationLinkNode.typeNameHint;
    }
}
