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


function suffixArrayLongestRepeatingSubstring(suffixArray, minOccurences: number): string {
    const sorted = suffixArray.sort();
    console.log(sorted)

    let longest: string | null = null;
    for (let i = 0; i < sorted.length - minOccurences; i++) {
        let strs: string[] = []
        for (let j = i; j < i + minOccurences; j++) {
            strs.push(sorted[j])
        }
        const localLongest = longestSubtring(...strs);
        // console.log(`Local longest: ${localLongest}`)
        if (longest === null || localLongest.length > longest.length) {
            longest = localLongest;
        }
    }

    if (longest === null) {
        throw new Error("No repeated substrings")
    }

    return longest;
}

export function getLongestRepeatingSubstring(data: Object): string {
    const values = getAllStrings(data);
    const suffixArray: string[] = [];
    for (let str of values) {
        suffixArray.push(...buildSuffixArray(str));
    }

    return suffixArrayLongestRepeatingSubstring(suffixArray, 5);
}





