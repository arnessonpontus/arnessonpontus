"use strict";
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_helmet_1 = require("react-helmet");
var gatsby_1 = require("gatsby");
var SEO = function (_a) {
    var description = _a.description, lang = _a.lang, meta = _a.meta, title = _a.title;
    var site = gatsby_1.useStaticQuery(gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      query {\n        site {\n          siteMetadata {\n            title\n            description\n            author\n          }\n        }\n      }\n    "], ["\n      query {\n        site {\n          siteMetadata {\n            title\n            description\n            author\n          }\n        }\n      }\n    "])))).site;
    var metaDescription = description || site.siteMetadata.description;
    var defaultMeta = [
        {
            name: "description",
            content: metaDescription,
        },
        {
            property: "og:title",
            content: title,
        },
        {
            property: "og:description",
            content: metaDescription,
        },
        {
            property: "og:type",
            content: "website",
        },
        {
            name: "twitter:card",
            content: "summary",
        },
        {
            name: "twitter:creator",
            content: site.siteMetadata.author,
        },
        {
            name: "twitter:title",
            content: title,
        },
        {
            name: "twitter:description",
            content: metaDescription,
        },
    ];
    var propMeta = defaultMeta.concat(meta || []);
    return (React.createElement(react_helmet_1.Helmet, { htmlAttributes: {
            lang: lang,
        }, title: title, titleTemplate: "%s | " + site.siteMetadata.title, meta: defaultMeta.concat(propMeta) }));
};
SEO.defaultProps = {
    lang: "en",
    meta: [],
    description: "",
};
exports.default = SEO;
var templateObject_1;
//# sourceMappingURL=seo.js.map