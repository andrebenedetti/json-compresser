export type TreeNode = {
    edges: Edge[]
    addEdge: (source: TreeNode, val: string) => Edge
    label?: string
}

type Edge = {
    value: string
    source: TreeNode | null
    target: TreeNode
    occurrences: number
}

export function newEdge(source: TreeNode, value: string): Edge {
    return {
        value,
        source,
        target: newNode((source.label || "") + value),
        occurrences: 1
    }
}

export function newNode(label?: string): TreeNode {
    const edges: Edge[] = []
    return {
        edges,
        label,
        addEdge: ((source: TreeNode, value: string): Edge => {
            const edge = newEdge(source, value)
            edges.push(edge)
            return edge
        })
    }
}
