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
var React = __importStar(require("react"));
var gatsby_1 = require("gatsby");
var gatsby_image_1 = __importDefault(require("gatsby-image"));
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */
var Image = function () {
    var data = gatsby_1.useStaticQuery(gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query {\n      placeholderImage: file(relativePath: { eq: \"gatsby-astronaut.png\" }) {\n        childImageSharp {\n          fluid(maxWidth: 300) {\n            ...GatsbyImageSharpFluid\n          }\n        }\n      }\n    }\n  "], ["\n    query {\n      placeholderImage: file(relativePath: { eq: \"gatsby-astronaut.png\" }) {\n        childImageSharp {\n          fluid(maxWidth: 300) {\n            ...GatsbyImageSharpFluid\n          }\n        }\n      }\n    }\n  "]))));
    return React.createElement(gatsby_image_1.default, { fluid: data.placeholderImage.childImageSharp.fluid });
};
exports.default = Image;
var templateObject_1;
//# sourceMappingURL=image.js.map