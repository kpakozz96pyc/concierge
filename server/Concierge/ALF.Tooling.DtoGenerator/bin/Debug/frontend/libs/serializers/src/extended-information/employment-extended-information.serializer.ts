import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { EmploymentExtendedInformation } from "@alf/models/extended-information/employment-extended-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmploymentExtendedInformationSerializer implements Serializer<EmploymentExtendedInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmploymentExtendedInformation
    deserialize(data: any): EmploymentExtendedInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.hiredDate !== undefined)
            copy.hiredDate = new Date(copy.hiredDate);

        if (copy.terminatedDate !== undefined)
            copy.terminatedDate = new Date(copy.terminatedDate);

        return new EmploymentExtendedInformation(copy);
    }

    serialize(entity: EmploymentExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmploymentExtendedInformation, _forceTypeHint?: boolean): any
    serialize(entity: EmploymentExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmploymentExtendedInformation.typeNameHint : undefined,
            hiredDate: serializeDate(entity.hiredDate),
            terminatedDate: serializeDate(entity.terminatedDate),
            positionPercent: entity.positionPercent,
            organizationCode: entity.organizationCode,
            isActive: entity.isActive,
            isMainEmployment: entity.isMainEmployment,
            isRelevant: entity.isRelevant,
            dimensionA: entity.dimensionA,
            dimensionB: entity.dimensionB,
            dimensionC: entity.dimensionC,
            dimensionD: entity.dimensionD,
            projectDimension1: entity.projectDimension1,
            projectDimension2: entity.projectDimension2,
            projectDimension3: entity.projectDimension3,
            projectDimension4: entity.projectDimension4,
            projectDimension5: entity.projectDimension5,
            projectDimension6Amount: entity.projectDimension6Amount,
            projectDimension6Hours: entity.projectDimension6Hours,
            activityCode: entity.activityCode
        };
    }
}
