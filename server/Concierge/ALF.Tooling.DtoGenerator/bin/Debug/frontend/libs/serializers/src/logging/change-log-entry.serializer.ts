import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { ChangeLogEntry } from "@alf/models/logging/change-log-entry";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ChangeLogEntrySerializer implements Serializer<ChangeLogEntry> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ChangeLogEntry
    deserialize(data: any): ChangeLogEntry | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.changeDate !== undefined)
            copy.changeDate = new Date(copy.changeDate);

        if (copy.validFrom !== undefined)
            copy.validFrom = new Date(copy.validFrom);

        return new ChangeLogEntry(copy);
    }

    serialize(entity: ChangeLogEntry | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ChangeLogEntry, _forceTypeHint?: boolean): any
    serialize(entity: ChangeLogEntry | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ChangeLogEntry.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            employeeId: entity.employeeId,
            employmentId: entity.employmentId,
            tableNumber: entity.tableNumber,
            fieldNumber: entity.fieldNumber,
            fieldDescription: entity.fieldDescription,
            key1: entity.key1,
            keyText1: entity.keyText1,
            key2: entity.key2,
            keyText2: entity.keyText2,
            oldValue: entity.oldValue,
            newValue: entity.newValue,
            changeDate: serializeDate(entity.changeDate),
            kode1: entity.kode1,
            kode2: entity.kode2,
            validFrom: serializeDate(entity.validFrom),
            changedBy: entity.changedBy,
            periode: entity.periode,
            origin: entity.origin,
            changeDescription: entity.changeDescription
        };
    }
}
