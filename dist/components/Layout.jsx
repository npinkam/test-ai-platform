"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Header_1 = __importDefault(require("../components/Header"));
var SidebarLeft_1 = __importDefault(require("./SidebarLeft"));
var layout_module_css_1 = __importDefault(require("../components/styles/layout.module.css"));
var Layout = function (props) { return (<div className={layout_module_css_1.default.layoutStyle}>
    <Header_1.default />
    <SidebarLeft_1.default />
    <div className={layout_module_css_1.default.contentStyle}>{props.children}</div>
  </div>); };
exports.default = Layout;
