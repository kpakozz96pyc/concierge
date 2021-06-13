import { SystemParameterIncomeReportSenderInformationCategorySerializer } from "./system-parameter-income-report-sender-information-category.serializer";
import { SystemParameterPeriodPlanCategorySerializer } from "./system-parameter-period-plan-category.serializer";
import { SystemParameterProcessTemplateSetCategorySerializer } from "./system-parameter-process-template-set-category.serializer";
import { SystemParameterRetroPayCategorySerializer } from "./system-parameter-retro-pay-category.serializer";
import { SystemParameterTaxInformationCategorySerializer } from "./system-parameter-tax-information-category.serializer";
import { SystemParameterIncomeReportSenderInformationCategory } from "@alf/models/system-parameters/system-parameter-income-report-sender-information-category";
import { SystemParameterPeriodPlanCategory } from "@alf/models/system-parameters/system-parameter-period-plan-category";
import { SystemParameterProcessTemplateSetCategory } from "@alf/models/system-parameters/system-parameter-process-template-set-category";
import { SystemParameterRetroPayCategory } from "@alf/models/system-parameters/system-parameter-retro-pay-category";
import { SystemParameterTaxInformationCategory } from "@alf/models/system-parameters/system-parameter-tax-information-category";
import { Serializer } from "@alf/core/models";
import { SystemParameterCategory } from "@alf/models/system-parameters/system-parameter-category";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SystemParameterCategorySerializer implements Serializer<SystemParameterCategory> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SystemParameterCategory
    deserialize(data: any): SystemParameterCategory | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.SystemParameters.SystemParameterIncomeReportSenderInformationCategory, ALF.Shared.Dto")
            return new SystemParameterIncomeReportSenderInformationCategorySerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.SystemParameters.SystemParameterPeriodPlanCategory, ALF.Shared.Dto")
            return new SystemParameterPeriodPlanCategorySerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.SystemParameters.SystemParameterProcessTemplateSetCategory, ALF.Shared.Dto")
            return new SystemParameterProcessTemplateSetCategorySerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.SystemParameters.SystemParameterRetroPayCategory, ALF.Shared.Dto")
            return new SystemParameterRetroPayCategorySerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.SystemParameters.SystemParameterTaxInformationCategory, ALF.Shared.Dto")
            return new SystemParameterTaxInformationCategorySerializer().deserialize(data);

        throw new Error("Unable to deserialize SystemParameterCategory, cannot infer type from " + data.$type);
    }

    serialize(entity: SystemParameterCategory | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SystemParameterCategory, _forceTypeHint?: boolean): any
    serialize(entity: SystemParameterCategory | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.SystemParameters.SystemParameterIncomeReportSenderInformationCategory, ALF.Shared.Dto")
            return new SystemParameterIncomeReportSenderInformationCategorySerializer().serialize(entity as SystemParameterIncomeReportSenderInformationCategory, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.SystemParameters.SystemParameterPeriodPlanCategory, ALF.Shared.Dto")
            return new SystemParameterPeriodPlanCategorySerializer().serialize(entity as SystemParameterPeriodPlanCategory, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.SystemParameters.SystemParameterProcessTemplateSetCategory, ALF.Shared.Dto")
            return new SystemParameterProcessTemplateSetCategorySerializer().serialize(entity as SystemParameterProcessTemplateSetCategory, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.SystemParameters.SystemParameterRetroPayCategory, ALF.Shared.Dto")
            return new SystemParameterRetroPayCategorySerializer().serialize(entity as SystemParameterRetroPayCategory, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.SystemParameters.SystemParameterTaxInformationCategory, ALF.Shared.Dto")
            return new SystemParameterTaxInformationCategorySerializer().serialize(entity as SystemParameterTaxInformationCategory, _forceTypeHint);

        throw new Error("Unable to serialize SystemParameterCategory, cannot infer type from " + entity.$type);
    }
}
