import { Serializer } from "@alf/core/models";
import { PayslipReportInformation } from "@alf/models/payslip/payslip-report-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PayslipReportInformationSerializer implements Serializer<PayslipReportInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PayslipReportInformation
    deserialize(data: any): PayslipReportInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.generatedAt !== undefined)
            copy.generatedAt = new Date(copy.generatedAt);

        return new PayslipReportInformation(copy);
    }

    serialize(entity: PayslipReportInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PayslipReportInformation, _forceTypeHint?: boolean): any
    serialize(entity: PayslipReportInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PayslipReportInformation.typeNameHint : undefined,
            reportExists: entity.reportExists,
            reportBinaryFileId: entity.reportBinaryFileId,
            reportBinaryFileFormat: entity.reportBinaryFileFormat,
            generatedAt: entity.generatedAt
                ? entity.generatedAt.toISOString()
                : undefined,
            isStale: entity.isStale
        };
    }
}
