

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PopulationTreeNode {

    static $name = "PopulationTreeNode";
    static typeNameHint = "ALF.Shared.Dto.Models.DataAccess.Populations.TreeStructure.PopulationTreeNode, ALF.Shared.Dto"

    $type: string;
    id: string;
    projectedFromPopulationTreeNodeId?: string;
    isSystemShipped: boolean;

    constructor(data?: Partial<PopulationTreeNode>) {
        Object.assign(this, data);
    }
}
