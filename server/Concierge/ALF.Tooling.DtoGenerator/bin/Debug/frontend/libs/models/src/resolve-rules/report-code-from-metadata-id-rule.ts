﻿
import { MetaJobParameterResolveRule } from "@alf/models/parameters/meta-job-parameter-resolve-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ReportCodeFromMetadataIdRule extends MetaJobParameterResolveRule {

    static $name = "ReportCodeFromMetadataIdRule";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.Jobs.Parameters.ResolveRules.ReportCodeFromMetadataIdRule, ALF.Shared.Dto"



    constructor(data?: Partial<ReportCodeFromMetadataIdRule>) {
        super(data);
        Object.assign(this, data);
        this.$type = ReportCodeFromMetadataIdRule.typeNameHint;
    }
}