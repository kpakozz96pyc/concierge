
import { InputTransactionType } from "./enums/input-transaction-type";
import { InputTransaction } from "./input-transaction";
import { InternalFileUpload } from "../internal-file-upload/internal-file-upload";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class NewInputTransaction {

    static $name = "NewInputTransaction";
    static typeNameHint = "ALF.Shared.Dto.Models.Transactions.NewInputTransaction, ALF.Shared.Dto"

    inputTransactionType: InputTransactionType;
    companyId?: string;
    periodId?: string;
    employeeId?: string;
    payCodeId?: string;
    isPersonal: boolean;
    employmentId?: string;
    positionId?: string;
    newInputTransactionFields?: InputTransaction;
    attachments: InternalFileUpload[] = [];

    constructor(data?: Partial<NewInputTransaction>) {
        Object.assign(this, data);
    }
}
