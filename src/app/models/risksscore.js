"use strict";
exports.__esModule = true;
var risksscore = /** @class */ (function () {
    function risksscore(id, id_risks, frecuency, impact, score, area, area_desc, valuation, description) {
        this.id = id;
        this.id_risks = id_risks;
        this.frecuency = frecuency;
        this.impact = impact;
        this.score = score;
        this.area = area;
        this.area_desc = area_desc;
        this.valuation = valuation;
        this.description = description;
    }
    return risksscore;
}());
exports.risksscore = risksscore;
