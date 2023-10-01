import { TreeNode, newEdge, newNode } from "./tree";

function newTree() {
    return newNode()
}

function addSuffix(root: TreeNode, s: string, symbol: string) {
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
            edge.occurrences += 1
        } else {
            root.edges.push(newEdge(root, s[0]))
        }
        return
    }

    if (!edge) {
        edge = newEdge(root, s[0])
        root.edges.push(edge)
    }

    addSuffix(edge.target, s.slice(1), symbol)
    return
}


const root = newTree()

function addString(root: TreeNode, s: string, symbol: string) {
    for (let i = 0; i < s.length; i++) {
        let suffix = s.slice(i)
        console.log(`adding suffix ${suffix}`)
        addSuffix(root, suffix, symbol)
    }
}

addString(root, "abaaba", "$")


function printDepthFirst(root: TreeNode, symbol) {
    if (root?.label && root.label[root.label?.length - 1] === symbol) {
        console.log(root.label)
    }
    for (let e of root.edges) {
        console.log({
            value: e.value,
            occurrences: e.occurrences
        })

        printDepthFirst(e.target, symbol)
    }
}

printDepthFirst(root, "$")