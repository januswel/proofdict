import { ProofdictRule, Proofdict } from "./proofdict-tester";
/**
 * Does the `dict` has "noun" tag?
 * @param {ProofdictRule} dict
 * @returns {boolean}
 */
export declare function isNoun(dict: ProofdictRule): boolean;
export declare function filterByTags(
    dictionary: Proofdict,
    whitelistTags?: string[],
    blacklistTags?: string[]
): ProofdictRule[];
