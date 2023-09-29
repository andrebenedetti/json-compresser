import { getLongestRepeatingSubstring } from "./suffixArray";
import { replaceAllStrings } from "./utils";

export function compress(data) {
    const strMap = {};
    const count = 0;
    while (true) {
        const lrs = getLongestRepeatingSubstring(data);
        console.log(lrs);
        if (lrs.length < 5) {
            break;
        }

        data = replaceAllStrings(data, lrs, "$1");
    }

    return data;
}

