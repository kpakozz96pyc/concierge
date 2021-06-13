
import { FeatureId } from "../feature/enums/feature-id";
import { FeatureStatus } from "../feature/enums/feature-status";
import { FeatureOverrideLevel } from "../feature/enums/feature-override-level";
import { AbsenceCaseType } from "../absence-cases/enums/absence-case-type";
import { ReimbursementReceiptType } from "../reimbursement-receipt/enums/reimbursement-receipt-type";
import { AbsenceSubFeature } from "@alf/models/feature-providers/absence-sub-feature";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ImmediateManagerFeature extends AbsenceSubFeature {

    static $name = "ImmediateManagerFeature";
    static typeNameHint = "ALF.Shared.Dto.Models.Feature.FeatureProviders.ImmediateManagerFeature, ALF.Shared.Dto"

    featureId: FeatureId;
    description?: string;
    status: FeatureStatus;
    overrideLevel: FeatureOverrideLevel;
    reimbursementReceiptTypeMap: { [key in ReimbursementReceiptType]?: AbsenceCaseType } = {};
    incomeReportTypes?: any;

    constructor(data?: Partial<ImmediateManagerFeature>) {
        super(data);
        Object.assign(this, data);
        this.$type = ImmediateManagerFeature.typeNameHint;
    }
}
