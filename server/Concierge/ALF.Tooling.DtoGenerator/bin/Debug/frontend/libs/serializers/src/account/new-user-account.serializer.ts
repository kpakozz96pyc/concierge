import { Serializer } from "@alf/core/models";
import { NewUserAccount } from "@alf/models/account/new-user-account";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class NewUserAccountSerializer implements Serializer<NewUserAccount> {

    deserialize(data: undefined): undefined
    deserialize(data: any): NewUserAccount
    deserialize(data: any): NewUserAccount | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new NewUserAccount(copy);
    }

    serialize(entity: NewUserAccount | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: NewUserAccount, _forceTypeHint?: boolean): any
    serialize(entity: NewUserAccount | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? NewUserAccount.typeNameHint : undefined,
            email: entity.email,
            name: entity.name
        };
    }
}
