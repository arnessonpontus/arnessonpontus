"use strict";
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
exports.query = void 0;
var React = __importStar(require("react"));
var gatsby_1 = require("gatsby");
var layout_1 = __importDefault(require("../components/layout"));
var seo_1 = __importDefault(require("../components/seo"));
var BlogPosts = function (_a) {
    var data = _a.data;
    var documents = data.allContentfulBlogPost.edges
        .filter(function (edge) { return edge.node.body; })
        .map(function (edge) {
        var _a = edge.node, id = _a.id, title = _a.title, slug = _a.slug;
        var json = (edge.node.body || { json: {} }).json;
        return { id: id, title: title, json: json, slug: slug };
    });
    return (React.createElement(layout_1.default, null,
        React.createElement(seo_1.default, { title: "Blog Posts" }),
        React.createElement("h1", null, "Blog Posts (source: Contentful)"),
        documents.map(function (node) {
            return (React.createElement("div", { key: node.id, style: { backgroundColor: '#d5f0e8' } },
                React.createElement(gatsby_1.Link, { to: node.slug || '/' },
                    React.createElement("h2", { key: node.id + "-title" }, node.title))));
        }),
        React.createElement(gatsby_1.Link, { to: "/" }, "Go back to the homepage")));
};
exports.query = gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query BlogPagesQuery {\n    allContentfulBlogPost(limit: 10) {\n      edges {\n        node {\n          id\n          title\n          updatedAt\n          slug\n          images {\n            title\n            description\n            file {\n              url\n            }\n          }\n          body {\n            json\n          }\n        }\n      }\n    }\n  }\n"], ["\n  query BlogPagesQuery {\n    allContentfulBlogPost(limit: 10) {\n      edges {\n        node {\n          id\n          title\n          updatedAt\n          slug\n          images {\n            title\n            description\n            file {\n              url\n            }\n          }\n          body {\n            json\n          }\n        }\n      }\n    }\n  }\n"])));
exports.default = BlogPosts;
var templateObject_1;
//# sourceMappingURL=blogPosts.js.map