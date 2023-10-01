import { getLongestRepeatingSubstring } from "./suffixArray";
import { SummaryEntry, addString, newTree, printDepthFirst } from "./suffixTree";
import { getAllStrings, replaceStringsInObject } from "./utils";

export function compressWithSuffixArray(data) {
    // This should be a token that does not occur in your dataset.
    const tokenIdentifier = "$"

    const strMap = {};
    let index = 0;
    while (true) {
        const lrs = getLongestRepeatingSubstring(data);
        if (lrs.length < 25) {
            break;
        }

        const symbol = `${tokenIdentifier}${index}`
        strMap[symbol] = lrs
        data = replaceStringsInObject(data, lrs, symbol);
        index += 1
    }

    return {
        result: data,
        strMap
    };
}


export function compress(data) {
    const symbol = "$"
    const root = newTree()
    const strings = getAllStrings(data)

    for (let s of strings) {
        addString(root, s, symbol)
    }

    const summary: SummaryEntry[] = []
    printDepthFirst(root, symbol, "", summary)

    console.log(summary.sort((a, b) => b.size - a.size).slice(10))
}
