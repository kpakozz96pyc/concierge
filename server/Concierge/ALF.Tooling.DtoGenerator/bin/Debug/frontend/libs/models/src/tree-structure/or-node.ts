
import { BooleanOperationNode } from "@alf/models/tree-structure/boolean-operation-node";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class OrNode extends BooleanOperationNode {

    static $name = "OrNode";
    static typeNameHint = "ALF.Shared.Dto.Models.DataAccess.Populations.TreeStructure.OrNode, ALF.Shared.Dto"



    constructor(data?: Partial<OrNode>) {
        super(data);
        Object.assign(this, data);
        this.$type = OrNode.typeNameHint;
    }
}
