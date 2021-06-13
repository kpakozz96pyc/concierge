
import { PaymentMethod } from "./enums/payment-method";
import { EnterpriseCertificateRelationType } from "./enums/enterprise-certificate-relation-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type CompanyId = string;

export class Company {

    static $name = "Company";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.Company, ALF.Shared.Dto"

    companyId: CompanyId;
    useCertFlow: boolean;
    hasExplicitCertificateFileReference: boolean;
    name: string;
    address1?: string;
    address2?: string;
    postalCode?: string;
    phone?: string;
    fax?: string;
    primaryContact?: string;
    primaryContactEmail?: string;
    organizationNumber?: string;
    bankAccountNumber?: string;
    municipality?: number;
    orgNrAUN?: number;
    orgNrJur?: number;
    stateAdministration: number;
    personalCompanyNationalIdentityNumber?: string;
    flexBankMinLimit?: number;
    flexBankMaxLimit?: number;
    coreCompanyId?: string;
    companyLocation?: string;
    companyDefaultLanguage?: string;
    bankSwift?: string;
    paymentMethod: PaymentMethod;
    immediateManagerEmployeeId?: string;
    immediateManagerLastName?: string;
    immediateManagerFirstName?: string;
    immediateManagerNationalIdentityNumber?: string;
    immediateManagerMobileNumber?: string;
    immediateManagerEmail?: string;
    certificateFrom: EnterpriseCertificateRelationType;
    certificateFromCompanyId?: string;
    certificatePassword?: string;
    certificateUserUsername?: string;
    certificateUserPassword?: string;
    startupDate?: Date;
    endDate?: Date;
    externalCompanyKey?: string;

    constructor(data?: Partial<Company>) {
        Object.assign(this, data);
    }
}
