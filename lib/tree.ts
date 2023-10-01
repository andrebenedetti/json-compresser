export type TreeNode = {
    edges: Edge[]
    addEdge: (source: TreeNode, val: string) => Edge
}

type Edge = {
    value: string
    source: TreeNode | null
    target: TreeNode
    // Only present if this is an edge to a leaf node
    occurrences?: number
}

export function newEdge(source: TreeNode, value: string, pointsToLeaf?: boolean): Edge {
    return {
        value,
        source,
        target: newNode(),
        occurrences: pointsToLeaf ? 1 : undefined
    }
}



export function newNode(): TreeNode {
    const edges: Edge[] = []
    const node: TreeNode = {
        edges,
        addEdge: ((source: TreeNode, value: string): Edge => {
            const edge = newEdge(source, value)
            edges.push(edge)
            return edge
        })

    }

    return node
}
