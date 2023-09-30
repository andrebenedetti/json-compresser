type TreeNode = {
    edges: Edge[]
    addEdge: (val: string) => Edge
}

type Edge = {
    value: string
    source: TreeNode | null
    target: TreeNode | null
}

export function newEdge(source: TreeNode, value: string): Edge {
    return {
        value,
        source,
        target: null
    }
}

export function newNode() {
    const edges: Edge[] = []
    return {
        edges,
        addEdge: ((source: TreeNode, value: string): Edge => {
            const edge = newEdge(source, value)
            edges.push(edge)
            return edge
        })
    }
}
