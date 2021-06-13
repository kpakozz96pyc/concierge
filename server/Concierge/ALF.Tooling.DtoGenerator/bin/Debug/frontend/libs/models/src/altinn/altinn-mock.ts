

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type AltinnMockId = string;

export class AltinnMock {

    static $name = "AltinnMock";
    static typeNameHint = "ALF.Shared.Dto.Models.Altinn.AltinnMock, ALF.Shared.Dto"

    id: AltinnMockId;
    companyId: string;
    createdAt: Date;
    binaryItemId?: string;
    active: boolean;
    fileName?: string;
    listOfFiles: string[] = [];

    constructor(data?: Partial<AltinnMock>) {
        Object.assign(this, data);
    }
}
