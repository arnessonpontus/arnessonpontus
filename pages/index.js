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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var gatsby_1 = require("gatsby");
var layout_1 = __importDefault(require("../components/layout"));
var image_1 = __importDefault(require("../components/image"));
var seo_1 = __importDefault(require("../components/seo"));
var IndexPage = function () { return (React.createElement(layout_1.default, null,
    React.createElement(seo_1.default, { title: "Home" }),
    React.createElement("h1", null, "Hi people"),
    React.createElement("p", null, "Welcome to your new Gatsby site."),
    React.createElement("p", null, "Now go build something great."),
    React.createElement("div", { style: {
            maxWidth: "300px",
            marginBottom: "1.45rem",
        } },
        React.createElement(image_1.default, null)),
    React.createElement("ul", null,
        React.createElement("li", null,
            React.createElement(gatsby_1.Link, { to: "/page-2/" }, "Go to page 2")),
        React.createElement("li", null,
            React.createElement(gatsby_1.Link, { to: "/blogPosts/" }, "Go to blog posts (Source: Contentful)"))))); };
exports.default = IndexPage;
//# sourceMappingURL=index.js.map