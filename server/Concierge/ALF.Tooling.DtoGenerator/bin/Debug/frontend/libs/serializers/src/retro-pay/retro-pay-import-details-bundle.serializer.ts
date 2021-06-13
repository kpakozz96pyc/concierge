import { RetroPaySerializer } from "./retro-pay.serializer";
import { RetroPaySummarySerializer } from "./retro-pay-summary.serializer";
import { Serializer } from "@alf/core/models";
import { RetroPayImportDetailsBundle } from "@alf/models/retro-pay/retro-pay-import-details-bundle";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RetroPayImportDetailsBundleSerializer implements Serializer<RetroPayImportDetailsBundle> {

    deserialize(data: undefined): undefined
    deserialize(data: any): RetroPayImportDetailsBundle
    deserialize(data: any): RetroPayImportDetailsBundle | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.retroPay = new RetroPaySerializer().deserialize(copy.retroPay);

        copy.retroPaySummary = new RetroPaySummarySerializer().deserialize(copy.retroPaySummary);

        return new RetroPayImportDetailsBundle(copy);
    }

    serialize(entity: RetroPayImportDetailsBundle | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: RetroPayImportDetailsBundle, _forceTypeHint?: boolean): any
    serialize(entity: RetroPayImportDetailsBundle | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? RetroPayImportDetailsBundle.typeNameHint : undefined,
            retroPay: new RetroPaySerializer().serialize(entity.retroPay, _forceTypeHint),
            retroPaySummary: new RetroPaySummarySerializer().serialize(entity.retroPaySummary, _forceTypeHint)
        };
    }
}
