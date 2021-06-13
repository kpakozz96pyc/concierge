import { IncomeReportChildrensCareBenefitDataSerializer } from "./income-report-childrens-care-benefit-data.serializer";
import { IncomeReportCloseRelationCareBenefitDataSerializer } from "./income-report-close-relation-care-benefit-data.serializer";
import { IncomeReportSickChildBenefitDataSerializer } from "./income-report-sick-child-benefit-data.serializer";
import { IncomeReportParentalBenefitDataSerializer } from "./income-report-parental-benefit-data.serializer";
import { IncomeReportPregnancyBenefitDataSerializer } from "./income-report-pregnancy-benefit-data.serializer";
import { IncomeReportSicknessBenefitDataSerializer } from "./income-report-sickness-benefit-data.serializer";
import { IncomeReportTrainingBenefitDataSerializer } from "./income-report-training-benefit-data.serializer";
import { IncomeReportChildrensCareBenefitData } from "@alf/models/income-reports/income-report-childrens-care-benefit-data";
import { IncomeReportCloseRelationCareBenefitData } from "@alf/models/income-reports/income-report-close-relation-care-benefit-data";
import { IncomeReportSickChildBenefitData } from "@alf/models/income-reports/income-report-sick-child-benefit-data";
import { IncomeReportParentalBenefitData } from "@alf/models/income-reports/income-report-parental-benefit-data";
import { IncomeReportPregnancyBenefitData } from "@alf/models/income-reports/income-report-pregnancy-benefit-data";
import { IncomeReportSicknessBenefitData } from "@alf/models/income-reports/income-report-sickness-benefit-data";
import { IncomeReportTrainingBenefitData } from "@alf/models/income-reports/income-report-training-benefit-data";
import { Serializer } from "@alf/core/models";
import { IncomeReportBenefitData } from "@alf/models/income-reports/income-report-benefit-data";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IncomeReportBenefitDataSerializer implements Serializer<IncomeReportBenefitData> {

    deserialize(data: undefined): undefined
    deserialize(data: any): IncomeReportBenefitData
    deserialize(data: any): IncomeReportBenefitData | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Absence.IncomeReports.IncomeReportChildrensCareBenefitData, ALF.Shared.Dto")
            return new IncomeReportChildrensCareBenefitDataSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Absence.IncomeReports.IncomeReportCloseRelationCareBenefitData, ALF.Shared.Dto")
            return new IncomeReportCloseRelationCareBenefitDataSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Absence.IncomeReports.IncomeReportSickChildBenefitData, ALF.Shared.Dto")
            return new IncomeReportSickChildBenefitDataSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Absence.IncomeReports.IncomeReportParentalBenefitData, ALF.Shared.Dto")
            return new IncomeReportParentalBenefitDataSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Absence.IncomeReports.IncomeReportPregnancyBenefitData, ALF.Shared.Dto")
            return new IncomeReportPregnancyBenefitDataSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Absence.IncomeReports.IncomeReportSicknessBenefitData, ALF.Shared.Dto")
            return new IncomeReportSicknessBenefitDataSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Absence.IncomeReports.IncomeReportTrainingBenefitData, ALF.Shared.Dto")
            return new IncomeReportTrainingBenefitDataSerializer().deserialize(data);

        throw new Error("Unable to deserialize IncomeReportBenefitData, cannot infer type from " + data.$type);
    }

    serialize(entity: IncomeReportBenefitData | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: IncomeReportBenefitData, _forceTypeHint?: boolean): any
    serialize(entity: IncomeReportBenefitData | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Absence.IncomeReports.IncomeReportChildrensCareBenefitData, ALF.Shared.Dto")
            return new IncomeReportChildrensCareBenefitDataSerializer().serialize(entity as IncomeReportChildrensCareBenefitData, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Absence.IncomeReports.IncomeReportCloseRelationCareBenefitData, ALF.Shared.Dto")
            return new IncomeReportCloseRelationCareBenefitDataSerializer().serialize(entity as IncomeReportCloseRelationCareBenefitData, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Absence.IncomeReports.IncomeReportSickChildBenefitData, ALF.Shared.Dto")
            return new IncomeReportSickChildBenefitDataSerializer().serialize(entity as IncomeReportSickChildBenefitData, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Absence.IncomeReports.IncomeReportParentalBenefitData, ALF.Shared.Dto")
            return new IncomeReportParentalBenefitDataSerializer().serialize(entity as IncomeReportParentalBenefitData, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Absence.IncomeReports.IncomeReportPregnancyBenefitData, ALF.Shared.Dto")
            return new IncomeReportPregnancyBenefitDataSerializer().serialize(entity as IncomeReportPregnancyBenefitData, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Absence.IncomeReports.IncomeReportSicknessBenefitData, ALF.Shared.Dto")
            return new IncomeReportSicknessBenefitDataSerializer().serialize(entity as IncomeReportSicknessBenefitData, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Absence.IncomeReports.IncomeReportTrainingBenefitData, ALF.Shared.Dto")
            return new IncomeReportTrainingBenefitDataSerializer().serialize(entity as IncomeReportTrainingBenefitData, _forceTypeHint);

        throw new Error("Unable to serialize IncomeReportBenefitData, cannot infer type from " + entity.$type);
    }
}
