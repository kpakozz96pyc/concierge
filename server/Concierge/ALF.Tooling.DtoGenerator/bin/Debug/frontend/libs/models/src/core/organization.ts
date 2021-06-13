

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type OrganizationId = string;

export class Organization {

    static $name = "Organization";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.Organization, ALF.Shared.Dto"

    id: OrganizationId;
    companyId: string;
    organizationCode: string;
    description: string;
    created?: Date;
    terminated?: Date;
    changed?: Date;
    superiorOrganizationCode?: string;
    address?: string;
    countryCode?: string;
    postalCode?: string;
    free01?: any;
    free02?: any;
    free03?: any;
    free04?: any;
    free05?: any;
    free06?: any;
    free07?: any;
    managerEmployeeId?: string;
    approverEmployeeId?: string;
    anviserEmployeeId?: string;
    bankAccount?: string;
    liquidityBankAccount?: string;
    companySubNumber?: number;
    municipality?: number;
    dimA?: any;
    dimB?: any;
    dimC?: any;
    dimD?: any;
    projectDim1?: any;
    projectDim2?: any;
    projectDim3?: any;
    projectDim4?: any;
    projectDim5?: any;
    projectDim6Amount?: any;
    projectDim6Hours?: any;
    companyOrganizationNumber?: number;
    internalAddress?: string;
    organizationNumberLink?: number;
    agreementId?: string;
    agreementNumberTeleBank?: string;
    divisionTeleBank?: string;
    contactName?: string;
    contactEmail?: string;
    contactPhone?: string;
    refundBankAccountNumber?: string;
    klpCustomerNumber?: string;
    uniCustomerNumber?: string;
    ptsImoNumber?: string;
    ptsShipId?: string;
    immediateManagerEmployeeId?: string;
    immediateManagerLastname?: string;
    immediateManagerFirstname?: string;
    immediateManagerSocialSecurityNumber?: string;
    immediateManagerMobile?: string;
    immediateManagerEmail?: string;

    constructor(data?: Partial<Organization>) {
        Object.assign(this, data);
    }
}
