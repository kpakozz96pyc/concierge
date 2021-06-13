import { Serializer } from "@alf/core/models";
import { SystemParameterIncomeReportSenderInformationCategory } from "@alf/models/system-parameters/system-parameter-income-report-sender-information-category";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SystemParameterIncomeReportSenderInformationCategorySerializer implements Serializer<SystemParameterIncomeReportSenderInformationCategory> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SystemParameterIncomeReportSenderInformationCategory
    deserialize(data: any): SystemParameterIncomeReportSenderInformationCategory | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new SystemParameterIncomeReportSenderInformationCategory(copy);
    }

    serialize(entity: SystemParameterIncomeReportSenderInformationCategory | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SystemParameterIncomeReportSenderInformationCategory, _forceTypeHint?: boolean): any
    serialize(entity: SystemParameterIncomeReportSenderInformationCategory | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            senderName: entity.senderName,
            senderPhoneNumber: entity.senderPhoneNumber,
            id: entity.id,
            code: entity.code,
            description: entity.description
        };
    }
}
