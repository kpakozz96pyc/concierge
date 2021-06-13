
import { AccountType } from "./enums/account-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type UserAccountId = string;

export class UserAccount {

    static $name = "UserAccount";
    static typeNameHint = "ALF.Shared.Dto.Models.Account.UserAccount, ALF.Shared.Dto"

    id: UserAccountId;
    username?: string;
    email?: string;
    type: AccountType;
    name?: string;
    phoneNumber?: string;
    imageData?: string;
    isActive: boolean;

    constructor(data?: Partial<UserAccount>) {
        Object.assign(this, data);
    }
}
