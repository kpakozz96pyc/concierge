
import { AltinnBackend } from "../altinn/enums/altinn-backend";
import { ImmediateManagerFormEditableFields } from "@alf/models/immediate-manager/immediate-manager-form-editable-fields";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ImmediateManagerFormId = string;

export class ImmediateManagerForm extends ImmediateManagerFormEditableFields {

    static $name = "ImmediateManagerForm";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.ImmediateManager.ImmediateManagerForm, ALF.Shared.Dto"

    id: ImmediateManagerFormId;
    referenceDate: Date;
    messageId?: any;
    companyId?: string;
    isActive: boolean;
    isProcessing: boolean;
    hasError: boolean;
    isManuallyCreated: boolean;
    createdAt: Date;
    createdByUserId?: string;
    mode: AltinnBackend;
    employeeIdOptions: string[] = [];
    employmentIdOptions: string[] = [];

    constructor(data?: Partial<ImmediateManagerForm>) {
        super(data);
        Object.assign(this, data);
        this.$type = ImmediateManagerForm.typeNameHint;
    }
}
