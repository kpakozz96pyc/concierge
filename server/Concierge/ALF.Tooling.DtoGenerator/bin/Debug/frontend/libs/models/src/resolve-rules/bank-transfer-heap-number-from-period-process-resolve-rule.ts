
import { MetaJobParameterResolveRule } from "@alf/models/parameters/meta-job-parameter-resolve-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BankTransferHeapNumberFromPeriodProcessResolveRule extends MetaJobParameterResolveRule {

    static $name = "BankTransferHeapNumberFromPeriodProcessResolveRule";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.BankTransferHeapNumberFromPeriodProcessResolveRule, ALF.Shared.Dto"



    constructor(data?: Partial<BankTransferHeapNumberFromPeriodProcessResolveRule>) {
        super(data);
        Object.assign(this, data);
        this.$type = BankTransferHeapNumberFromPeriodProcessResolveRule.typeNameHint;
    }
}
