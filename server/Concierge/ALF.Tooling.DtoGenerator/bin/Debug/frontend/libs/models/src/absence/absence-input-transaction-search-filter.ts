

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AbsenceInputTransactionSearchFilter {

    static $name = "AbsenceInputTransactionSearchFilter";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.AbsenceInputTransactionSearchFilter, ALF.Shared.Dto"

    fromDate?: Date;
    toDate?: Date;
    exclude?: any;

    constructor(data?: Partial<AbsenceInputTransactionSearchFilter>) {
        Object.assign(this, data);
    }
}
