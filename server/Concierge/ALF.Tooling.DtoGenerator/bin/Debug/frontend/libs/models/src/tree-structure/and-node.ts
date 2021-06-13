
import { BooleanOperationNode } from "@alf/models/tree-structure/boolean-operation-node";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AndNode extends BooleanOperationNode {

    static $name = "AndNode";
    static typeNameHint = "ALF.Shared.Dto.Models.DataAccess.Populations.TreeStructure.AndNode, ALF.Shared.Dto"



    constructor(data?: Partial<AndNode>) {
        super(data);
        Object.assign(this, data);
        this.$type = AndNode.typeNameHint;
    }
}
