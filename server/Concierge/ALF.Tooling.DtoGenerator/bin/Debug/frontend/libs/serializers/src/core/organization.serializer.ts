import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { Organization } from "@alf/models/core/organization";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class OrganizationSerializer implements Serializer<Organization> {

    deserialize(data: undefined): undefined
    deserialize(data: any): Organization
    deserialize(data: any): Organization | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.created !== undefined)
            copy.created = new Date(copy.created);

        if (copy.terminated !== undefined)
            copy.terminated = new Date(copy.terminated);

        if (copy.changed !== undefined)
            copy.changed = new Date(copy.changed);

        return new Organization(copy);
    }

    serialize(entity: Organization | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: Organization, _forceTypeHint?: boolean): any
    serialize(entity: Organization | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? Organization.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            organizationCode: entity.organizationCode,
            description: entity.description,
            created: serializeDate(entity.created),
            terminated: serializeDate(entity.terminated),
            changed: serializeDate(entity.changed),
            superiorOrganizationCode: entity.superiorOrganizationCode,
            address: entity.address,
            countryCode: entity.countryCode,
            postalCode: entity.postalCode,
            free01: entity.free01,
            free02: entity.free02,
            free03: entity.free03,
            free04: entity.free04,
            free05: entity.free05,
            free06: entity.free06,
            free07: entity.free07,
            managerEmployeeId: entity.managerEmployeeId,
            approverEmployeeId: entity.approverEmployeeId,
            anviserEmployeeId: entity.anviserEmployeeId,
            bankAccount: entity.bankAccount,
            liquidityBankAccount: entity.liquidityBankAccount,
            companySubNumber: entity.companySubNumber,
            municipality: entity.municipality,
            dimA: entity.dimA,
            dimB: entity.dimB,
            dimC: entity.dimC,
            dimD: entity.dimD,
            projectDim1: entity.projectDim1,
            projectDim2: entity.projectDim2,
            projectDim3: entity.projectDim3,
            projectDim4: entity.projectDim4,
            projectDim5: entity.projectDim5,
            projectDim6Amount: entity.projectDim6Amount,
            projectDim6Hours: entity.projectDim6Hours,
            companyOrganizationNumber: entity.companyOrganizationNumber,
            internalAddress: entity.internalAddress,
            organizationNumberLink: entity.organizationNumberLink,
            agreementId: entity.agreementId,
            agreementNumberTeleBank: entity.agreementNumberTeleBank,
            divisionTeleBank: entity.divisionTeleBank,
            contactName: entity.contactName,
            contactEmail: entity.contactEmail,
            contactPhone: entity.contactPhone,
            refundBankAccountNumber: entity.refundBankAccountNumber,
            klpCustomerNumber: entity.klpCustomerNumber,
            uniCustomerNumber: entity.uniCustomerNumber,
            ptsImoNumber: entity.ptsImoNumber,
            ptsShipId: entity.ptsShipId,
            immediateManagerEmployeeId: entity.immediateManagerEmployeeId,
            immediateManagerLastname: entity.immediateManagerLastname,
            immediateManagerFirstname: entity.immediateManagerFirstname,
            immediateManagerSocialSecurityNumber: entity.immediateManagerSocialSecurityNumber,
            immediateManagerMobile: entity.immediateManagerMobile,
            immediateManagerEmail: entity.immediateManagerEmail
        };
    }
}
