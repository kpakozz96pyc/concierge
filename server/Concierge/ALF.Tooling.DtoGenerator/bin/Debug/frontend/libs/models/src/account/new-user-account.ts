

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class NewUserAccount {

    static $name = "NewUserAccount";
    static typeNameHint = "ALF.Shared.Dto.Models.Account.NewUserAccount, ALF.Shared.Dto"

    email?: string;
    name?: string;

    constructor(data?: Partial<NewUserAccount>) {
        Object.assign(this, data);
    }
}
