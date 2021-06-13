

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ElectronicCommunicationId = string;

export class ElectronicCommunication {

    static $name = "ElectronicCommunication";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.ElectronicCommunication, ALF.Shared.Dto"

    id: ElectronicCommunicationId;
    companyId: string;
    schemeCode: string;
    description?: string;
    companyCoversAmount?: number;
    employeeCoversAmount?: number;
    payCodeIdConsumption?: string;
    invoicesPerYear?: number;
    shouldGenerateTax?: boolean;

    constructor(data?: Partial<ElectronicCommunication>) {
        Object.assign(this, data);
    }
}
