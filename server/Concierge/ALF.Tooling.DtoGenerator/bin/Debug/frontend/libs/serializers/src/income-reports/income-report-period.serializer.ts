import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { IncomeReportPeriod } from "@alf/models/income-reports/income-report-period";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IncomeReportPeriodSerializer implements Serializer<IncomeReportPeriod> {

    deserialize(data: undefined): undefined
    deserialize(data: any): IncomeReportPeriod
    deserialize(data: any): IncomeReportPeriod | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.from = new Date(copy.from);

        copy.to = new Date(copy.to);

        return new IncomeReportPeriod(copy);
    }

    serialize(entity: IncomeReportPeriod | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: IncomeReportPeriod, _forceTypeHint?: boolean): any
    serialize(entity: IncomeReportPeriod | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? IncomeReportPeriod.typeNameHint : undefined,
            type: entity.type,
            from: serializeDate(entity.from),
            to: serializeDate(entity.to)
        };
    }
}
