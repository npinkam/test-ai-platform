"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Layout_1 = __importDefault(require("../../components/Layout"));
var index_module_css_1 = __importDefault(require("./styles/index.module.css"));
var Index = function () { return (<Layout_1.default>
    <div className={index_module_css_1.default.welcome}>Welcome to AI Platform</div>
    <div className={index_module_css_1.default.dataPanel}>
      <div className={index_module_css_1.default.topDataPanel}>
        <div className={index_module_css_1.default.topDataPanelLeft}>Current User: 42</div>
        <div className={index_module_css_1.default.topDataPanelRight}>
          <div className={index_module_css_1.default.topDataPanelRightSub}>Year: 2021</div>
          <div className={index_module_css_1.default.topDataPanelRightSub}>Data: 11</div>
        </div>
      </div>
      <div className={index_module_css_1.default.bottomDataPanel}>
        <div className={index_module_css_1.default.bottomDataPanelSub}>
          <img src="/chart1.png" alt="chart1" width="250px"/>
        </div>
        <div className={index_module_css_1.default.bottomDataPanelSub}>
          <img src="/chart2.png" alt="chart2" width="250px"/>
        </div>
        <div className={index_module_css_1.default.bottomDataPanelSub}>
          <img src="/chart3.png" alt="chart3" width="250px"/>
        </div>
      </div>
    </div>
  </Layout_1.default>); };
exports.default = Index;
