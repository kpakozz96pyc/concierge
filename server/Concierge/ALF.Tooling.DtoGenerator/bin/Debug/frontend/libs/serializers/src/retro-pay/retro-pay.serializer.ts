import { Serializer } from "@alf/core/models";
import { RetroPay } from "@alf/models/retro-pay/retro-pay";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RetroPaySerializer implements Serializer<RetroPay> {

    deserialize(data: undefined): undefined
    deserialize(data: any): RetroPay
    deserialize(data: any): RetroPay | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.processedAt = new Date(copy.processedAt);

        return new RetroPay(copy);
    }

    serialize(entity: RetroPay | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: RetroPay, _forceTypeHint?: boolean): any
    serialize(entity: RetroPay | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? RetroPay.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            variableTransactionImportId: entity.variableTransactionImportId,
            processedAt: entity.processedAt
                ? entity.processedAt.toISOString()
                : undefined,
            processedByUsername: entity.processedByUsername,
            processedByUserId: entity.processedByUserId,
            directImport: entity.directImport,
            firstPossibleImportPeriod: entity.firstPossibleImportPeriod,
            periodNumber: entity.periodNumber,
            waitingForJobId: entity.waitingForJobId,
            retroPayStatus: entity.retroPayStatus
        };
    }
}
