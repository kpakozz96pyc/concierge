import { StackType } from "@alf/models/amelding/enums/stack-type";
import { Serializer } from "@alf/core/models";
import { AmeldingStack } from "@alf/models/amelding/amelding-stack";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AmeldingStackSerializer implements Serializer<AmeldingStack> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AmeldingStack
    deserialize(data: any): AmeldingStack | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.stackType = StackType[copy.stackType];

        return new AmeldingStack(copy);
    }

    serialize(entity: AmeldingStack | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AmeldingStack, _forceTypeHint?: boolean): any
    serialize(entity: AmeldingStack | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AmeldingStack.typeNameHint : undefined,
            id: entity.id,
            stackType: StackType[entity.stackType],
            ameldings: entity.ameldings
        };
    }
}
