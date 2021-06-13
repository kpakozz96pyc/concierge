
import { PostImportRule } from "@alf/models/post-import-rules/post-import-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class MovePostImportRule extends PostImportRule {

    static $name = "MovePostImportRule";
    static typeNameHint = "ALF.Shared.Dto.Models.AutoImport.PostImportRules.MovePostImportRule, ALF.Shared.Dto"

    directoryToMoveTo?: string;
    shouldAppendCurrentDate: boolean;

    constructor(data?: Partial<MovePostImportRule>) {
        super(data);
        Object.assign(this, data);
        this.$type = MovePostImportRule.typeNameHint;
    }
}
