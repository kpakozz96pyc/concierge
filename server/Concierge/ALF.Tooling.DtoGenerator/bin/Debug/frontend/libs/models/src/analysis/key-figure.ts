
import { KeyFigureTemplate } from "./enums/key-figure-template";
import { AnalyticMetadata } from "../metadata/analytic-metadata";
import { AnalyticSummary } from "../summary/analytic-summary";
import { AnalyticGraph } from "../graph/analytic-graph";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type KeyFigureId = string;

export class KeyFigure {

    static $name = "KeyFigure";
    static typeNameHint = "ALF.Shared.Dto.Models.Analysis.KeyFigure, ALF.Shared.Dto"

    id: KeyFigureId;
    companyId: string;
    metadata: AnalyticMetadata;
    template: KeyFigureTemplate;
    summary: AnalyticSummary;
    graphs: AnalyticGraph[] = [];

    constructor(data?: Partial<KeyFigure>) {
        Object.assign(this, data);
    }
}
