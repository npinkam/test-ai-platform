"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Layout_1 = __importDefault(require("../../../components/Layout"));
function OpenFactory(props) {
    return (<Layout_1.default>
      <div>
        <h1>OpenFactory page</h1>
        <p>Hello OpenFactory!</p>
      </div>
    </Layout_1.default>);
}
exports.default = OpenFactory;
