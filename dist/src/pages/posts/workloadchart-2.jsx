"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Layout_1 = __importDefault(require("../../../components/Layout"));
var react_google_charts_1 = __importDefault(require("react-google-charts"));
var axios_1 = __importDefault(require("axios"));
function workloadChart(props) {
    var today = new Date();
    var todayStr = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var timeStr = function (sec) {
        return new Date(todayStr + ' ' + new Date(sec * 1000).toISOString().substr(11, 8)).toTimeString();
    };
    function getData() {
        return __awaiter(this, void 0, void 0, function () {
            var tableInfo, response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tableInfo = [
                            { type: 'string', id: 'Station' },
                            { type: 'string', id: 'dummy bar label' },
                            { type: 'string', role: 'tooltip' },
                            { type: 'number', id: 'Start' },
                            { type: 'number', id: 'End' },
                        ];
                        return [4 /*yield*/, axios_1.default.get('http://localhost:1880/workloadraw')];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        /* for (let i = 0; i < data.length; i++) {
                          data[i][3] = timeStr(data[i][3])
                          data[i][4] = timeStr(data[i][4])
                        } */
                        data.unshift(tableInfo);
                        data.splice(5);
                        //console.log(data)
                        return [2 /*return*/, data];
                }
            });
        });
    }
    //getData()
    return (<Layout_1.default>
      <div>
        
        <react_google_charts_1.default width={'100%'} height={'85vh'} chartType="Timeline" loader={<div>Loading Workload Gantt Chart</div>} 
    //data={getData()}
    /* data={[
      [
        { type: 'string', id: 'Station' },
        { type: 'string', id: 'dummy bar label' },
        { type: 'string', role: 'tooltip' },
        { type: 'number', id: 'Start' },
        { type: 'number', id: 'End' },
      ],
      [
        'Packing(F4)',
        '',
        'task: Working<br/>productName: Product3_TypeA_B<br/>processName: Product3_TypeA_B<br/>index: 3<br/>part: 1<br/>duration: 00:04:00',
        3390,
        3630,
      ],
      [
        'Packing(F4)',
        '',
        'task: Working<br/>productName: Product3_TypeA_B<br/>processName: Product3_TypeA_B<br/>index: 3<br/>part: 1<br/>duration: 00:04:00',
        4350,
        4590,
      ],
      [
        'Packing(F4)',
        '',
        'task: Working<br/>productName: Product3_TypeA_B<br/>processName: Product3_TypeA_B<br/>index: 3<br/>part: 1<br/>duration: 00:04:00',
        5310,
        5550,
      ],
      [
        'Packing(F4)',
        '',
        'task: Working<br/>productName: Product3_TypeA_B<br/>processName: Product3_TypeA_B<br/>index: 3<br/>part: 1<br/>duration: 00:04:00',
        6270,
        6510,
      ],
    ]} */
    options={{
        height: 400,
        timeline: { colorByRowLabel: true },
        labelStyle: {
            fontSize: 13,
        },
        AllowHtml: true,
        colors: [
            '#111e6c',
            '#1d2951',
            '#597387',
            '#003152',
            '#000080',
            '#0e4d92',
            '#1034a6',
            '#0080ff',
            '#0f52ba',
            '#008ecc',
            '#6593f5',
            '#4c516d',
            '#008081',
            '#73c2fb',
            '#7285a5',
            '#4f97a3',
            '#57a0d3',
            '#4682b4',
            '#81d8d0',
            '#89cff0',
            '#588bae',
            '#7ef9ff',
            '#95c8d8',
            '#b0dfe5',
            '#3fe0d0',
        ],
    }}></react_google_charts_1.default>
      </div>
    </Layout_1.default>);
}
exports.default = workloadChart;
