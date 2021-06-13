
import { PostImportRule } from "@alf/models/post-import-rules/post-import-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class DoNothingPostImportRule extends PostImportRule {

    static $name = "DoNothingPostImportRule";
    static typeNameHint = "ALF.Shared.Dto.Models.AutoImport.PostImportRules.DoNothingPostImportRule, ALF.Shared.Dto"



    constructor(data?: Partial<DoNothingPostImportRule>) {
        super(data);
        Object.assign(this, data);
        this.$type = DoNothingPostImportRule.typeNameHint;
    }
}
