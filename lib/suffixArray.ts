import { getAllStrings, longestSubtring } from "./utils";

function buildSuffixArray(str: string) {
    const result: string[] = [];

    if (str.length == 0) {
        return result;
    }

    let val = str;
    while (val.length > 0) {
        result.push(val);
        val = val.slice(1);
    }

    return result;
}


function suffixArrayLongestRepeatingSubstring(suffixArray, identifier: string): string {
    const sorted = suffixArray.sort();

    let longest: string | null = null;
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i + 1] === undefined) {
            break;
        }

        const localLongest = longestSubtring(sorted[i], sorted[i + 1]);
        if (longest === null || localLongest.length > longest.length) {
            longest = localLongest;
        }
    }

    if (longest === null) {
        throw new Error("No repeated substrings")
    }

    return longest;
}

export function getLongestRepeatingSubstring(data: Object, identifier: string): string {
    const values = getAllStrings(data);
    const suffixArray: string[] = [];
    for (let str of values) {
        suffixArray.push(...buildSuffixArray(str));
    }

    return suffixArrayLongestRepeatingSubstring(suffixArray, identifier);
}





