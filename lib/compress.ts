import { getLongestRepeatingSubstring } from "./suffixArray";
import { replaceStringsInObject } from "./utils";

export function compress(data) {
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

