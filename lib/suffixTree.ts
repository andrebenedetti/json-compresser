import { TreeNode, newEdge, newNode } from "./tree";

export function newTree() {
    return newNode()
}

function addSuffix(root: TreeNode, s: string, symbol: string, fullSuffix: string) {
    // Add symbol to the end of the string to mark its end
    // in case it is not there yet.
    if (s[s.length - 1] !== symbol) {
        s = s + symbol
    }

    let edge = root.edges.find(e => e.value === s[0])

    // End of string. 
    // Add edge with termination symbol or increment occurences. 
    if (s[0] === symbol) {
        if (edge) {
            edge.occurrences = (edge?.occurrences || 0) + 1
        } else {
            root.edges.push(newEdge(root, s[0], true))
        }
        return
    }

    if (!edge) {
        edge = newEdge(root, s[0])
        root.edges.push(edge)
    }

    addSuffix(edge.target, s.slice(1), symbol, fullSuffix)
    return
}


export function addString(root: TreeNode, s: string, symbol: string) {
    for (let i = 0; i < s.length; i++) {
        let suffix = s.slice(i)
        addSuffix(root, suffix, symbol, suffix)
    }
}



export function printDepthFirst(root: TreeNode, symbol, acc) {
    for (let e of root.edges) {
        if (e.value === symbol && (e.occurrences || 0) > 1) {
            console.log(acc, e.occurrences)
        }
        printDepthFirst(e.target, symbol, acc + e.value)
    }
}