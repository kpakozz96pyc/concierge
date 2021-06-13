import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { AbsenceCaseStatusInfo } from "@alf/models/absence-cases/absence-case-status-info";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AbsenceCaseStatusInfoSerializer implements Serializer<AbsenceCaseStatusInfo> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AbsenceCaseStatusInfo
    deserialize(data: any): AbsenceCaseStatusInfo | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.referenceDate !== undefined)
            copy.referenceDate = new Date(copy.referenceDate);

        return new AbsenceCaseStatusInfo(copy);
    }

    serialize(entity: AbsenceCaseStatusInfo | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AbsenceCaseStatusInfo, _forceTypeHint?: boolean): any
    serialize(entity: AbsenceCaseStatusInfo | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AbsenceCaseStatusInfo.typeNameHint : undefined,
            id: entity.id,
            absenceCaseId: entity.absenceCaseId,
            entityId: entity.entityId,
            severity: entity.severity,
            type: entity.type,
            description: entity.description,
            referenceDate: serializeDate(entity.referenceDate)
        };
    }
}
