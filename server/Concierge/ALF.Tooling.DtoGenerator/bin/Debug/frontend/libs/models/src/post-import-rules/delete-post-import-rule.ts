
import { PostImportRule } from "@alf/models/post-import-rules/post-import-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class DeletePostImportRule extends PostImportRule {

    static $name = "DeletePostImportRule";
    static typeNameHint = "ALF.Shared.Dto.Models.AutoImport.PostImportRules.DeletePostImportRule, ALF.Shared.Dto"



    constructor(data?: Partial<DeletePostImportRule>) {
        super(data);
        Object.assign(this, data);
        this.$type = DeletePostImportRule.typeNameHint;
    }
}
