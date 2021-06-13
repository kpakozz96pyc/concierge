import { VocationCodeSerializer } from "./vocation-code.serializer";
import { Serializer } from "@alf/core/models";
import { VocationCompanyOverview } from "@alf/models/core/vocation-company-overview";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class VocationCompanyOverviewSerializer implements Serializer<VocationCompanyOverview> {

    deserialize(data: undefined): undefined
    deserialize(data: any): VocationCompanyOverview
    deserialize(data: any): VocationCompanyOverview | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.selectedVocations = (copy.selectedVocations || []).map(new VocationCodeSerializer().deserialize);

        return new VocationCompanyOverview(copy);
    }

    serialize(entity: VocationCompanyOverview | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: VocationCompanyOverview, _forceTypeHint?: boolean): any
    serialize(entity: VocationCompanyOverview | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? VocationCompanyOverview.typeNameHint : undefined,
            companyId: entity.companyId,
            selectedVocations: entity.selectedVocations
                ? entity.selectedVocations.map(e => new VocationCodeSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
