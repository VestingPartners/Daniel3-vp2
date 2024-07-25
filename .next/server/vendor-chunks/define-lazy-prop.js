"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/define-lazy-prop";
exports.ids = ["vendor-chunks/define-lazy-prop"];
exports.modules = {

/***/ "(rsc)/./node_modules/define-lazy-prop/index.js":
/*!************************************************!*\
  !*** ./node_modules/define-lazy-prop/index.js ***!
  \************************************************/
/***/ ((module) => {

eval("\nmodule.exports = (object, propertyName, fn) => {\n\tconst define = value => Object.defineProperty(object, propertyName, {value, enumerable: true, writable: true});\n\n\tObject.defineProperty(object, propertyName, {\n\t\tconfigurable: true,\n\t\tenumerable: true,\n\t\tget() {\n\t\t\tconst result = fn();\n\t\t\tdefine(result);\n\t\t\treturn result;\n\t\t},\n\t\tset(value) {\n\t\t\tdefine(value);\n\t\t}\n\t});\n\n\treturn object;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZGVmaW5lLWxhenktcHJvcC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiO0FBQ0Esc0VBQXNFLHdDQUF3Qzs7QUFFOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFuaWVsMy12cDIvLi9ub2RlX21vZHVsZXMvZGVmaW5lLWxhenktcHJvcC9pbmRleC5qcz9mMWJjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gKG9iamVjdCwgcHJvcGVydHlOYW1lLCBmbikgPT4ge1xuXHRjb25zdCBkZWZpbmUgPSB2YWx1ZSA9PiBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBwcm9wZXJ0eU5hbWUsIHt2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWV9KTtcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBwcm9wZXJ0eU5hbWUsIHtcblx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQoKSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBmbigpO1xuXHRcdFx0ZGVmaW5lKHJlc3VsdCk7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0sXG5cdFx0c2V0KHZhbHVlKSB7XG5cdFx0XHRkZWZpbmUodmFsdWUpO1xuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIG9iamVjdDtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/define-lazy-prop/index.js\n");

/***/ })

};
;