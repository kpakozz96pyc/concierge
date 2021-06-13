import { PaymentMethod } from "@alf/models/core/enums/payment-method";
import { EnterpriseCertificateRelationType } from "@alf/models/core/enums/enterprise-certificate-relation-type";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { Company } from "@alf/models/core/company";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CompanySerializer implements Serializer<Company> {

    deserialize(data: undefined): undefined
    deserialize(data: any): Company
    deserialize(data: any): Company | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.paymentMethod = PaymentMethod[copy.paymentMethod];

        copy.certificateFrom = EnterpriseCertificateRelationType[copy.certificateFrom];

        if (copy.startupDate !== undefined)
            copy.startupDate = new Date(copy.startupDate);

        if (copy.endDate !== undefined)
            copy.endDate = new Date(copy.endDate);

        return new Company(copy);
    }

    serialize(entity: Company | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: Company, _forceTypeHint?: boolean): any
    serialize(entity: Company | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? Company.typeNameHint : undefined,
            companyId: entity.companyId,
            useCertFlow: entity.useCertFlow,
            hasExplicitCertificateFileReference: entity.hasExplicitCertificateFileReference,
            name: entity.name,
            address1: entity.address1,
            address2: entity.address2,
            postalCode: entity.postalCode,
            phone: entity.phone,
            fax: entity.fax,
            primaryContact: entity.primaryContact,
            primaryContactEmail: entity.primaryContactEmail,
            organizationNumber: entity.organizationNumber,
            bankAccountNumber: entity.bankAccountNumber,
            municipality: entity.municipality,
            orgNrAUN: entity.orgNrAUN,
            orgNrJur: entity.orgNrJur,
            stateAdministration: entity.stateAdministration,
            personalCompanyNationalIdentityNumber: entity.personalCompanyNationalIdentityNumber,
            flexBankMinLimit: entity.flexBankMinLimit,
            flexBankMaxLimit: entity.flexBankMaxLimit,
            coreCompanyId: entity.coreCompanyId,
            companyLocation: entity.companyLocation,
            companyDefaultLanguage: entity.companyDefaultLanguage,
            bankSwift: entity.bankSwift,
            paymentMethod: PaymentMethod[entity.paymentMethod],
            immediateManagerEmployeeId: entity.immediateManagerEmployeeId,
            immediateManagerLastName: entity.immediateManagerLastName,
            immediateManagerFirstName: entity.immediateManagerFirstName,
            immediateManagerNationalIdentityNumber: entity.immediateManagerNationalIdentityNumber,
            immediateManagerMobileNumber: entity.immediateManagerMobileNumber,
            immediateManagerEmail: entity.immediateManagerEmail,
            certificateFrom: EnterpriseCertificateRelationType[entity.certificateFrom],
            certificateFromCompanyId: entity.certificateFromCompanyId,
            certificatePassword: entity.certificatePassword,
            certificateUserUsername: entity.certificateUserUsername,
            certificateUserPassword: entity.certificateUserPassword,
            startupDate: serializeDate(entity.startupDate),
            endDate: serializeDate(entity.endDate),
            externalCompanyKey: entity.externalCompanyKey
        };
    }
}
