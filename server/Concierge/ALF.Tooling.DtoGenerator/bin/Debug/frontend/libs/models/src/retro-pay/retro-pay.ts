

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RetroPay {

    static $name = "RetroPay";
    static typeNameHint = "ALF.Shared.Dto.Models.RetroPay.RetroPay, ALF.Shared.Dto"

    id: string;
    companyId?: string;
    variableTransactionImportId?: string;
    processedAt: Date;
    processedByUsername?: string;
    processedByUserId?: string;
    directImport: boolean;
    firstPossibleImportPeriod?: number;
    periodNumber: number;
    waitingForJobId?: string;
    retroPayStatus?: string;

    constructor(data?: Partial<RetroPay>) {
        Object.assign(this, data);
    }
}
