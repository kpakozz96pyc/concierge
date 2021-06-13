import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { Activity } from "@alf/models/core/activity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ActivitySerializer implements Serializer<Activity> {

    deserialize(data: undefined): undefined
    deserialize(data: any): Activity
    deserialize(data: any): Activity | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.validFrom !== undefined)
            copy.validFrom = new Date(copy.validFrom);

        if (copy.validTo !== undefined)
            copy.validTo = new Date(copy.validTo);

        return new Activity(copy);
    }

    serialize(entity: Activity | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: Activity, _forceTypeHint?: boolean): any
    serialize(entity: Activity | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? Activity.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            activityCode: entity.activityCode,
            description: entity.description,
            isChargeable: entity.isChargeable,
            projectManagerEmployeeNumber: entity.projectManagerEmployeeNumber,
            siteManagerEmployeeNumber: entity.siteManagerEmployeeNumber,
            approverEmployeeNumber: entity.approverEmployeeNumber,
            validFrom: serializeDate(entity.validFrom),
            validTo: serializeDate(entity.validTo),
            overrideHolidayStep: entity.overrideHolidayStep,
            overrideZoneFeeCode: entity.overrideZoneFeeCode,
            overrideMunicipalityNumber: entity.overrideMunicipalityNumber,
            accountCode: entity.accountCode,
            account: entity.account,
            accountDimensionA: entity.accountDimensionA,
            accountDimensionB: entity.accountDimensionB,
            accountDimensionC: entity.accountDimensionC,
            accountDimensionD: entity.accountDimensionD,
            projectDimension1: entity.projectDimension1,
            projectDimension2: entity.projectDimension2,
            projectDimension3: entity.projectDimension3,
            projectDimension4: entity.projectDimension4,
            projectDimension5: entity.projectDimension5,
            projectDimension6Amount: entity.projectDimension6Amount,
            projectDimension6Hour: entity.projectDimension6Hour
        };
    }
}
