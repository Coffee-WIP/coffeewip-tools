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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = __importDefault(require("https"));
const api_1 = __importDefault(require("./config/api"));
class Slack {
    constructor(token) {
        this.usersList = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.request({
                    hostname: api_1.default.hostname,
                    method: 'GET',
                    path: api_1.default.path.usersList,
                });
            }
            catch (err) {
                console.error(err);
                throw err;
            }
        });
        this.request = (options, content) => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let data = '';
                const req = https_1.default.request(Object.assign({ headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${this.token}`,
                    } }, options), (res) => {
                    res.on('data', (result) => { data += result; });
                    res.on('end', () => resolve(data));
                });
                req.on('timeout', () => {
                    reject(new Error('timeout'));
                });
                req.on('error', (error) => reject(error));
                if (content)
                    req.write(content);
                req.end();
            });
        });
        this.token = token;
    }
}
exports.default = Slack;
//# sourceMappingURL=index.js.map