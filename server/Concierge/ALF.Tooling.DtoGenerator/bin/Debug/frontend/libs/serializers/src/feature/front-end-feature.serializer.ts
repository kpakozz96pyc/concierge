import { AbsenceFeatureSerializer } from "../feature-providers/absence-feature.serializer";
import { AltinnMockFeatureSerializer } from "../feature-providers/altinn-mock-feature.serializer";
import { CorrectionFeatureSerializer } from "../feature-providers/correction-feature.serializer";
import { EmployeeAbsenceFeatureSerializer } from "../feature-providers/employee-absence-feature.serializer";
import { EmployeeMaintenanceFeatureSerializer } from "../feature-providers/employee-maintenance-feature.serializer";
import { FeatureFeatureSerializer } from "../feature-providers/feature-feature.serializer";
import { FieldMappingFeatureSerializer } from "../feature-providers/field-mapping-feature.serializer";
import { ImportDefinitionFeatureSerializer } from "../feature-providers/import-definition-feature.serializer";
import { ImportEmployeeFeatureSerializer } from "../feature-providers/import-employee-feature.serializer";
import { IntegrationEmployeeFeatureSerializer } from "../feature-providers/integration-employee-feature.serializer";
import { ProcessScheduleJobProcessListFeatureSerializer } from "../feature-providers/process-schedule-job-process-list-feature.serializer";
import { WebTransactionFeatureSerializer } from "../feature-providers/web-transaction-feature.serializer";
import { WorkListFeatureSerializer } from "../feature-providers/work-list-feature.serializer";
import { AbsenceFeature } from "@alf/models/feature-providers/absence-feature";
import { AltinnMockFeature } from "@alf/models/feature-providers/altinn-mock-feature";
import { CorrectionFeature } from "@alf/models/feature-providers/correction-feature";
import { EmployeeAbsenceFeature } from "@alf/models/feature-providers/employee-absence-feature";
import { EmployeeMaintenanceFeature } from "@alf/models/feature-providers/employee-maintenance-feature";
import { FeatureFeature } from "@alf/models/feature-providers/feature-feature";
import { FieldMappingFeature } from "@alf/models/feature-providers/field-mapping-feature";
import { ImportDefinitionFeature } from "@alf/models/feature-providers/import-definition-feature";
import { ImportEmployeeFeature } from "@alf/models/feature-providers/import-employee-feature";
import { IntegrationEmployeeFeature } from "@alf/models/feature-providers/integration-employee-feature";
import { ProcessScheduleJobProcessListFeature } from "@alf/models/feature-providers/process-schedule-job-process-list-feature";
import { WebTransactionFeature } from "@alf/models/feature-providers/web-transaction-feature";
import { WorkListFeature } from "@alf/models/feature-providers/work-list-feature";
import { Serializer } from "@alf/core/models";
import { FrontEndFeature } from "@alf/models/feature/front-end-feature";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FrontEndFeatureSerializer implements Serializer<FrontEndFeature> {

    deserialize(data: undefined): undefined
    deserialize(data: any): FrontEndFeature
    deserialize(data: any): FrontEndFeature | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Feature.FeatureProviders.AbsenceFeature, ALF.Shared.Dto")
            return new AbsenceFeatureSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Feature.FeatureProviders.AltinnMockFeature, ALF.Shared.Dto")
            return new AltinnMockFeatureSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Feature.FeatureProviders.CorrectionFeature, ALF.Shared.Dto")
            return new CorrectionFeatureSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Feature.FeatureProviders.EmployeeAbsenceFeature, ALF.Shared.Dto")
            return new EmployeeAbsenceFeatureSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Feature.FeatureProviders.EmployeeMaintenanceFeature, ALF.Shared.Dto")
            return new EmployeeMaintenanceFeatureSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Feature.FeatureProviders.FeatureFeature, ALF.Shared.Dto")
            return new FeatureFeatureSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Feature.FeatureProviders.FieldMappingFeature, ALF.Shared.Dto")
            return new FieldMappingFeatureSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Feature.FeatureProviders.ImportDefinitionFeature, ALF.Shared.Dto")
            return new ImportDefinitionFeatureSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Feature.FeatureProviders.ImportEmployeeFeature, ALF.Shared.Dto")
            return new ImportEmployeeFeatureSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Feature.FeatureProviders.IntegrationEmployeeFeature, ALF.Shared.Dto")
            return new IntegrationEmployeeFeatureSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Feature.FeatureProviders.ProcessScheduleJobProcessListFeature, ALF.Shared.Dto")
            return new ProcessScheduleJobProcessListFeatureSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Feature.FeatureProviders.WebTransactionFeature, ALF.Shared.Dto")
            return new WebTransactionFeatureSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Feature.FeatureProviders.WorkListFeature, ALF.Shared.Dto")
            return new WorkListFeatureSerializer().deserialize(data);

        throw new Error("Unable to deserialize FrontEndFeature, cannot infer type from " + data.$type);
    }

    serialize(entity: FrontEndFeature | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: FrontEndFeature, _forceTypeHint?: boolean): any
    serialize(entity: FrontEndFeature | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Feature.FeatureProviders.AbsenceFeature, ALF.Shared.Dto")
            return new AbsenceFeatureSerializer().serialize(entity as AbsenceFeature, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Feature.FeatureProviders.AltinnMockFeature, ALF.Shared.Dto")
            return new AltinnMockFeatureSerializer().serialize(entity as AltinnMockFeature, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Feature.FeatureProviders.CorrectionFeature, ALF.Shared.Dto")
            return new CorrectionFeatureSerializer().serialize(entity as CorrectionFeature, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Feature.FeatureProviders.EmployeeAbsenceFeature, ALF.Shared.Dto")
            return new EmployeeAbsenceFeatureSerializer().serialize(entity as EmployeeAbsenceFeature, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Feature.FeatureProviders.EmployeeMaintenanceFeature, ALF.Shared.Dto")
            return new EmployeeMaintenanceFeatureSerializer().serialize(entity as EmployeeMaintenanceFeature, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Feature.FeatureProviders.FeatureFeature, ALF.Shared.Dto")
            return new FeatureFeatureSerializer().serialize(entity as FeatureFeature, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Feature.FeatureProviders.FieldMappingFeature, ALF.Shared.Dto")
            return new FieldMappingFeatureSerializer().serialize(entity as FieldMappingFeature, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Feature.FeatureProviders.ImportDefinitionFeature, ALF.Shared.Dto")
            return new ImportDefinitionFeatureSerializer().serialize(entity as ImportDefinitionFeature, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Feature.FeatureProviders.ImportEmployeeFeature, ALF.Shared.Dto")
            return new ImportEmployeeFeatureSerializer().serialize(entity as ImportEmployeeFeature, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Feature.FeatureProviders.IntegrationEmployeeFeature, ALF.Shared.Dto")
            return new IntegrationEmployeeFeatureSerializer().serialize(entity as IntegrationEmployeeFeature, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Feature.FeatureProviders.ProcessScheduleJobProcessListFeature, ALF.Shared.Dto")
            return new ProcessScheduleJobProcessListFeatureSerializer().serialize(entity as ProcessScheduleJobProcessListFeature, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Feature.FeatureProviders.WebTransactionFeature, ALF.Shared.Dto")
            return new WebTransactionFeatureSerializer().serialize(entity as WebTransactionFeature, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Feature.FeatureProviders.WorkListFeature, ALF.Shared.Dto")
            return new WorkListFeatureSerializer().serialize(entity as WorkListFeature, _forceTypeHint);

        throw new Error("Unable to serialize FrontEndFeature, cannot infer type from " + entity.$type);
    }
}
