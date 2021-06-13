import { RuntimeFieldDataType } from "@alf/models/database-metadata/enums/runtime-field-data-type";
import { FinanceSystemCounterType } from "@alf/models/transfers/enums/finance-system-counter-type";
import { Serializer } from "@alf/core/models";
import { FinanceSystemFreeField } from "@alf/models/transfers/finance-system-free-field";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FinanceSystemFreeFieldSerializer implements Serializer<FinanceSystemFreeField> {

    deserialize(data: undefined): undefined
    deserialize(data: any): FinanceSystemFreeField
    deserialize(data: any): FinanceSystemFreeField | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.dataType = RuntimeFieldDataType[copy.dataType];

        copy.typeOfCounter = FinanceSystemCounterType[copy.typeOfCounter];

        return new FinanceSystemFreeField(copy);
    }

    serialize(entity: FinanceSystemFreeField | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: FinanceSystemFreeField, _forceTypeHint?: boolean): any
    serialize(entity: FinanceSystemFreeField | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? FinanceSystemFreeField.typeNameHint : undefined,
            sortOrder: entity.sortOrder,
            labelText: entity.labelText,
            dataType: RuntimeFieldDataType[entity.dataType],
            fieldLength: entity.fieldLength,
            value: entity.value,
            disabledInputField: entity.disabledInputField,
            inUse: entity.inUse,
            typeOfCounter: FinanceSystemCounterType[entity.typeOfCounter],
            numberOfDecimals: entity.numberOfDecimals
        };
    }
}
