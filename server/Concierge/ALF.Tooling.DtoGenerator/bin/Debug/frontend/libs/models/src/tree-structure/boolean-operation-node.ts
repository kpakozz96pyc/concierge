
import { PopulationTreeNode } from "@alf/models/tree-structure/population-tree-node";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BooleanOperationNode extends PopulationTreeNode {

    static $name = "BooleanOperationNode";
    static typeNameHint = "ALF.Shared.Dto.Models.DataAccess.Populations.TreeStructure.BooleanOperationNode, ALF.Shared.Dto"

    children: PopulationTreeNode[] = [];

    constructor(data?: Partial<BooleanOperationNode>) {
        super(data);
        Object.assign(this, data);
        this.$type = BooleanOperationNode.typeNameHint;
    }
}
