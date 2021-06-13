
import { AltinnBackend } from "../altinn/enums/altinn-backend";
import { ReimbursementReceiptType } from "../reimbursement-receipt/enums/reimbursement-receipt-type";
import { AbsenceCaseType } from "../absence-cases/enums/absence-case-type";
import { Feature } from "@alf/models/feature/feature";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AbsenceSubFeature extends Feature {

    static $name = "AbsenceSubFeature";
    static typeNameHint = "ALF.Shared.Dto.Models.Feature.FeatureProviders.AbsenceSubFeature, ALF.Shared.Dto"

    mode?: AltinnBackend;
    activeFrom?: Date;
    paused: boolean;
    reimbursementReceiptTypes: ReimbursementReceiptType[] = [];
    reimbursementReceiptTypeMap: { [key in ReimbursementReceiptType]?: AbsenceCaseType } = {};
    incomeReportTypes?: any;

    constructor(data?: Partial<AbsenceSubFeature>) {
        super(data);
        Object.assign(this, data);
        this.$type = AbsenceSubFeature.typeNameHint;
    }
}
