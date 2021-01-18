"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_sidebar_ui_1 = require("react-sidebar-ui");
require("react-sidebar-ui/dist/index.css");
require("../components/styles/sidebarleft.module.css");
//import styles from '../components/styles/sidebarleft.module.css'
var link_1 = __importDefault(require("next/link"));
var SidebarLeft = function () { return (<div>
    <react_sidebar_ui_1.Sidebar bgColor="black" isCollapsed={true}>
      <div style={{ marginTop: '100px' }}></div>
      <react_sidebar_ui_1.LogoText>
        <a href="https://www.lexer.co.jp/en">LEXER RESEARCH</a>
      </react_sidebar_ui_1.LogoText>
      <link_1.default href="/">
        <react_sidebar_ui_1.Item bgColor="black">Home</react_sidebar_ui_1.Item>
      </link_1.default>
      
      <link_1.default href="/posts/workloadchart">
        <react_sidebar_ui_1.Item bgColor="black">Workload Gantt Chart</react_sidebar_ui_1.Item>
      </link_1.default>
      
    </react_sidebar_ui_1.Sidebar>
  </div>); };
exports.default = SidebarLeft;
