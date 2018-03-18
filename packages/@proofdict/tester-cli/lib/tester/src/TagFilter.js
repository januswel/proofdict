"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NOUN_TAG = "noun";
/**
 * Does the `dict` has "noun" tag?
 * @param {ProofdictRule} dict
 * @returns {boolean}
 */
function isNoun(dict) {
    return dict.tags.indexOf(NOUN_TAG) !== -1;
}
exports.isNoun = isNoun;
function filterByTags(dictionary, whitelistTags, blacklistTags) {
    if (whitelistTags === void 0) {
        whitelistTags = [];
    }
    if (blacklistTags === void 0) {
        blacklistTags = [];
    }
    if (whitelistTags.length > 0) {
        return dictionary.filter(function(item) {
            return whitelistTags.every(function(whitelistTags) {
                return item.tags.indexOf(whitelistTags) !== -1;
            });
        });
    }
    if (blacklistTags.length > 0) {
        return dictionary.filter(function(item) {
            return !item.tags.some(function(tag) {
                return blacklistTags.indexOf(tag) !== -1;
            });
        });
    }
    return dictionary;
}
exports.filterByTags = filterByTags;
//# sourceMappingURL=TagFilter.js.map
