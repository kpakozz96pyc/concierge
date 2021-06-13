import { AccountType } from "@alf/models/account/enums/account-type";
import { Serializer } from "@alf/core/models";
import { UserAccount } from "@alf/models/account/user-account";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class UserAccountSerializer implements Serializer<UserAccount> {

    deserialize(data: undefined): undefined
    deserialize(data: any): UserAccount
    deserialize(data: any): UserAccount | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.type = AccountType[copy.type];

        return new UserAccount(copy);
    }

    serialize(entity: UserAccount | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: UserAccount, _forceTypeHint?: boolean): any
    serialize(entity: UserAccount | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? UserAccount.typeNameHint : undefined,
            id: entity.id,
            username: entity.username,
            email: entity.email,
            type: AccountType[entity.type],
            name: entity.name,
            phoneNumber: entity.phoneNumber,
            imageData: entity.imageData,
            isActive: entity.isActive
        };
    }
}
