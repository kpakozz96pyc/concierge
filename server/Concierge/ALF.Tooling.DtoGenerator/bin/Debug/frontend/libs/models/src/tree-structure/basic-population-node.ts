
import { PopulationTreeNode } from "@alf/models/tree-structure/population-tree-node";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BasicPopulationNode extends PopulationTreeNode {

    static $name = "BasicPopulationNode";
    static typeNameHint = "ALF.Shared.Dto.Models.DataAccess.Populations.TreeStructure.BasicPopulationNode, ALF.Shared.Dto"

    basicPopulationType?: string;
    parameters?: string;
    negateExpression: boolean;

    constructor(data?: Partial<BasicPopulationNode>) {
        super(data);
        Object.assign(this, data);
        this.$type = BasicPopulationNode.typeNameHint;
    }
}
