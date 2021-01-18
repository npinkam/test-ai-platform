"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Layout_1 = __importDefault(require("../../../components/Layout"));
var gdfindiproject_module_css_1 = __importDefault(require("./styles/gdfindiproject.module.css"));
function GDfindiproject(props) {
    return (<Layout_1.default>
      <div className={gdfindiproject_module_css_1.default.nrdocker}>
        <iframe className={gdfindiproject_module_css_1.default.nrdocker} 
    //src="http://localhost:1880/lexerproject"
    src="http://5c0c61c7a70f.ngrok.io/lexerproject" title="GD.findi project execution"></iframe>
      </div>
    </Layout_1.default>);
}
exports.default = GDfindiproject;
