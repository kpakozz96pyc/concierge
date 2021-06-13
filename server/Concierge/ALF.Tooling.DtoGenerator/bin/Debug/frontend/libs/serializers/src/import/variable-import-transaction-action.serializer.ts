import { DeleteActionSerializer } from "./delete-action.serializer";
import { DeleteRejectedActionSerializer } from "./delete-rejected-action.serializer";
import { ImportActionSerializer } from "./import-action.serializer";
import { MoveToCompanyActionSerializer } from "./move-to-company-action.serializer";
import { MoveToNewHeapActionSerializer } from "./move-to-new-heap-action.serializer";
import { DeleteAction } from "@alf/models/import/delete-action";
import { DeleteRejectedAction } from "@alf/models/import/delete-rejected-action";
import { ImportAction } from "@alf/models/import/import-action";
import { MoveToCompanyAction } from "@alf/models/import/move-to-company-action";
import { MoveToNewHeapAction } from "@alf/models/import/move-to-new-heap-action";
import { Serializer } from "@alf/core/models";
import { VariableImportTransactionAction } from "@alf/models/import/variable-import-transaction-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class VariableImportTransactionActionSerializer implements Serializer<VariableImportTransactionAction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): VariableImportTransactionAction
    deserialize(data: any): VariableImportTransactionAction | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Import.DeleteAction, ALF.Shared.Dto")
            return new DeleteActionSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Import.DeleteRejectedAction, ALF.Shared.Dto")
            return new DeleteRejectedActionSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Import.ImportAction, ALF.Shared.Dto")
            return new ImportActionSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Import.MoveToCompanyAction, ALF.Shared.Dto")
            return new MoveToCompanyActionSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Import.MoveToNewHeapAction, ALF.Shared.Dto")
            return new MoveToNewHeapActionSerializer().deserialize(data);

        throw new Error("Unable to deserialize VariableImportTransactionAction, cannot infer type from " + data.$type);
    }

    serialize(entity: VariableImportTransactionAction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: VariableImportTransactionAction, _forceTypeHint?: boolean): any
    serialize(entity: VariableImportTransactionAction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Import.DeleteAction, ALF.Shared.Dto")
            return new DeleteActionSerializer().serialize(entity as DeleteAction, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Import.DeleteRejectedAction, ALF.Shared.Dto")
            return new DeleteRejectedActionSerializer().serialize(entity as DeleteRejectedAction, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Import.ImportAction, ALF.Shared.Dto")
            return new ImportActionSerializer().serialize(entity as ImportAction, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Import.MoveToCompanyAction, ALF.Shared.Dto")
            return new MoveToCompanyActionSerializer().serialize(entity as MoveToCompanyAction, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Import.MoveToNewHeapAction, ALF.Shared.Dto")
            return new MoveToNewHeapActionSerializer().serialize(entity as MoveToNewHeapAction, _forceTypeHint);

        throw new Error("Unable to serialize VariableImportTransactionAction, cannot infer type from " + entity.$type);
    }
}
