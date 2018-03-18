"use strict";
// MIT © 2017 azu
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: copy
var regexp_1 = require("prh/lib/utils/regexp");
exports.wrapWordBoundaryToString = function(pattern) {
    var regExp = regexp_1.parseRegExpString(pattern);
    if (regExp === null) {
        return pattern;
    }
    var wrapWordPattern = exports.wrapWordBoundary(regExp);
    return wrapWordPattern.toString();
};
exports.wrapWordBoundary = function(pattern) {
    var result;
    var flags;
    if (typeof pattern === "string") {
        result = pattern;
    } else if (pattern instanceof RegExp) {
        result = pattern.source;
        flags = pattern.flags;
    } else {
        throw new Error("unknown type: " + pattern);
    }
    return regexp_1.concat(["\\b", result, "\\b"], flags);
};
exports.wrapHyphenWordBoundary = function(pattern) {
    var result;
    var flags;
    if (typeof pattern === "string") {
        result = pattern;
    } else if (pattern instanceof RegExp) {
        result = pattern.source;
        flags = pattern.flags;
    } else {
        throw new Error("unknown type: " + pattern);
    }
    return [regexp_1.concat(["-", result], flags), regexp_1.concat([result, "-"], flags)];
};
//# sourceMappingURL=proofdict-tester-util.js.map
