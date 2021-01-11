"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageQuery = void 0;
var react_1 = __importDefault(require("react"));
var gatsby_1 = require("gatsby");
var gatsby_image_1 = __importDefault(require("gatsby-image"));
var layout_1 = __importDefault(require("../components/layout"));
var seo_1 = __importDefault(require("../components/seo"));
var contentfulRichText_1 = __importDefault(require("../components/contentfulRichText"));
var BlogPostTemplate = function (props) {
    var _a, _b;
    var post = props.data.contentfulBlogPost;
    return (react_1.default.createElement(layout_1.default, null,
        react_1.default.createElement(seo_1.default, { title: 'title' }),
        react_1.default.createElement("h2", null, post.title),
        react_1.default.createElement(contentfulRichText_1.default, { document: (_a = post.body) === null || _a === void 0 ? void 0 : _a.json, key: post.id + "-content" }),
        post.images ? (react_1.default.createElement(gatsby_image_1.default, { fluid: (_b = post.images[0]) === null || _b === void 0 ? void 0 : _b.fluid, alt: post.title })) : null));
};
exports.default = BlogPostTemplate;
exports.pageQuery = gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query BlogPostBySlug($slug: String!) {\n    site {\n      siteMetadata {\n        title\n      }\n    }\n    contentfulBlogPost(slug: { eq: $slug }) {\n      title\n      id\n      body {\n        json\n      }\n      images {\n        fluid(maxWidth: 750) {\n          ...GatsbyContentfulFluid\n        }\n      }\n    }\n  }\n"], ["\n  query BlogPostBySlug($slug: String!) {\n    site {\n      siteMetadata {\n        title\n      }\n    }\n    contentfulBlogPost(slug: { eq: $slug }) {\n      title\n      id\n      body {\n        json\n      }\n      images {\n        fluid(maxWidth: 750) {\n          ...GatsbyContentfulFluid\n        }\n      }\n    }\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=BlogPost.js.map