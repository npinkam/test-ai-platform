"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Layout_1 = __importDefault(require("../../../components/Layout"));
var gdfindiproject_module_css_1 = __importDefault(require("./styles/gdfindiproject.module.css"));
function workloadChart(props) {
    return (<Layout_1.default>
      <div className={gdfindiproject_module_css_1.default.nrdocker}>
        <iframe className={gdfindiproject_module_css_1.default.nrdocker} src="http://localhost:1880/workloadgantt" title="Workload Gantt Chart"></iframe>
      </div>
    </Layout_1.default>);
}
exports.default = workloadChart;
