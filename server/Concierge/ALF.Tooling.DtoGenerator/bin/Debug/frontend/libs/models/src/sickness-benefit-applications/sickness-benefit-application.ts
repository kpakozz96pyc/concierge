
import { AltinnBackend } from "../altinn/enums/altinn-backend";
import { SicknessBenefitApplicationEditableFields } from "@alf/models/sickness-benefit-applications/sickness-benefit-application-editable-fields";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type SicknessBenefitApplicationId = string;

export class SicknessBenefitApplication extends SicknessBenefitApplicationEditableFields {

    static $name = "SicknessBenefitApplication";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.SicknessBenefitApplications.SicknessBenefitApplication, ALF.Shared.Dto"

    id: SicknessBenefitApplicationId;
    messageId?: any;
    companyId?: string;
    createdAt: Date;
    createdByUserId?: string;
    createdByUsername?: string;
    mode: AltinnBackend;
    isActive: boolean;
    isProcessing: boolean;
    hasError: boolean;
    isCorrected: boolean;
    hasBeenParsed: boolean;
    employeeIdOptions: string[] = [];
    employmentIds: string[] = [];

    constructor(data?: Partial<SicknessBenefitApplication>) {
        super(data);
        Object.assign(this, data);
        this.$type = SicknessBenefitApplication.typeNameHint;
    }
}
