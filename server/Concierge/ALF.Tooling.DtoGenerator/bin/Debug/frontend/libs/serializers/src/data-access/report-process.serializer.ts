import { Serializer } from "@alf/core/models";
import { ReportProcess } from "@alf/models/data-access/report-process";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ReportProcessSerializer implements Serializer<ReportProcess> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ReportProcess
    deserialize(data: any): ReportProcess | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ReportProcess(copy);
    }

    serialize(entity: ReportProcess | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ReportProcess, _forceTypeHint?: boolean): any
    serialize(entity: ReportProcess | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ReportProcess.typeNameHint : undefined,
            id: entity.id,
            name: entity.name,
            processType: entity.processType,
            isSystemShipped: entity.isSystemShipped,
            availableInPayrollPortal: entity.availableInPayrollPortal,
            availableInCustomerPortal: entity.availableInCustomerPortal,
            availableInManagerPortal: entity.availableInManagerPortal
        };
    }
}
