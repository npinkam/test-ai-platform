"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var header_module_css_1 = __importDefault(require("../components/styles/header.module.css"));
var Header = function () { return (<div className={header_module_css_1.default.headerStyle}>
    <div className={header_module_css_1.default.headerLeftStyle}>AI Platform for Production Scheduling</div>
    <div className={header_module_css_1.default.headerRightStyle}>
      <div className={header_module_css_1.default.headerSubStyle}>User: Guest</div>
      <div className={header_module_css_1.default.headerSubStyle}>
        <a href="/language">Language</a>
      </div>
      <div className={header_module_css_1.default.headerSubStyle}>LEXER RESEARCH</div>
    </div>
  </div>); };
exports.default = Header;
