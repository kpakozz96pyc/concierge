import { Serializer } from "@alf/core/models";
import { AltinnPingResult } from "@alf/models/rest-api/altinn-ping-result";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AltinnPingResultSerializer implements Serializer<AltinnPingResult> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AltinnPingResult
    deserialize(data: any): AltinnPingResult | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.date = new Date(copy.date);

        return new AltinnPingResult(copy);
    }

    serialize(entity: AltinnPingResult | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AltinnPingResult, _forceTypeHint?: boolean): any
    serialize(entity: AltinnPingResult | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AltinnPingResult.typeNameHint : undefined,
            success: entity.success,
            url: entity.url,
            date: entity.date
                ? entity.date.toISOString()
                : undefined,
            errorMessage: entity.errorMessage
        };
    }
}
