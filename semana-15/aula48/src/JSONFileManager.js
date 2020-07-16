"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONFileManager = void 0;
var fs = __importStar(require("fs"));
var JSONFileManager = /** @class */ (function () {
    function JSONFileManager(fileName) {
        this.fileName = fileName;
    }
    JSONFileManager.prototype.getObjectFromFile = function () {
        var file = fs.readFileSync(this.fileName).toString("utf-8");
        return file ? JSON.parse(file) : [];
    };
    JSONFileManager.prototype.writeObjectToFile = function (data) {
        var updatedData = JSON.stringify(data, null, 2);
        fs.writeFileSync(this.fileName, updatedData);
    };
    return JSONFileManager;
}());
exports.JSONFileManager = JSONFileManager;
