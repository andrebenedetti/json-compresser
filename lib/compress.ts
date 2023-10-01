import { getLongestRepeatingSubstring } from "./suffixArray";
import { SummaryEntry, addString, getRepeatedSuffixes, newTree } from "./suffixTree";
import { TreeNode } from "./tree";
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

function buildSuffixTree(data: Object, symbol: string): TreeNode {
    const root = newTree()
    const strings = getAllStrings(data)

    for (let s of strings) {
        addString(root, s, symbol)
    }
    return root
}

export function compress(data) {
    const symbol = "$"
    const marker = "__1"

    // check if symbol occurs in text
    // check if marker occurs in text

    // we're only getting repeated suffixes here
    // we need to adjust it to get substrings
    while (true) {
        const root = buildSuffixTree(data, symbol)
        let summary: SummaryEntry[] = []
        getRepeatedSuffixes(root, symbol, "", summary, { minOccurrences: 2, minSize: 200, minLength: 4 })
        summary = summary.filter(i => !i.value.includes(marker))
        if (!summary.length) {
            break;
        }
        summary.sort((a, b) => b.size - a.size)
        console.log(`Replacing value ${summary[0].value}`)
        data = replaceStringsInObject(data, summary[0].value, marker)
    }

    console.log("Finished")
    console.log(`Compressed length: ${JSON.stringify(data).length}`)
    console.log(JSON.stringify(data))
}
