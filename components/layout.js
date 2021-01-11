"use strict";
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var prop_types_1 = __importDefault(require("prop-types"));
var gatsby_1 = require("gatsby");
var header_1 = __importDefault(require("./header"));
require("./layout.css");
var Layout = function (_a) {
    var children = _a.children;
    var data = gatsby_1.useStaticQuery(gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query SiteTitleQuery {\n      site {\n        siteMetadata {\n          title\n        }\n      }\n    }\n  "], ["\n    query SiteTitleQuery {\n      site {\n        siteMetadata {\n          title\n        }\n      }\n    }\n  "]))));
    return (React.createElement(React.Fragment, null,
        React.createElement(header_1.default, { siteTitle: data.site.siteMetadata.title }),
        React.createElement("div", { style: {
                margin: "0 auto",
                maxWidth: 960,
                padding: "0px 1.0875rem 1.45rem",
                paddingTop: 0,
            } },
            React.createElement("main", null, children),
            React.createElement("footer", null,
                "\u00A9",
                new Date().getFullYear(),
                ", Built with",
                React.createElement("a", { href: "https://www.gatsbyjs.org" }, "Gatsby")))));
};
Layout.propTypes = {
    children: prop_types_1.default.node.isRequired,
};
exports.default = Layout;
var templateObject_1;
//# sourceMappingURL=layout.js.map