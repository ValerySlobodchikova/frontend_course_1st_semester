class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let currentNode = this.root;

        while (currentNode) {
            if (newNode.value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return;
                }

                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return;
                }

                currentNode = currentNode.right;
            }
        }
    }

    inOrder(node, callback) {
        if (!node) {
            return;
        }

        this.inOrder(node.left, callback);
        if (callback) {
            callback(node);
        }
        this.inOrder(node.right, callback);
    }

    traverseDFS(callback) {
        return this.inOrder(this.root, callback);
    }

    traverseBFS(callback) {
        const queue = [this.root];

        while(queue.length) {
            const node = queue.shift();
            callback(node);

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

    }
}

const exampleTree = new BinaryTree();
exampleTree.add(9);
exampleTree.add(6);
exampleTree.add(10);
exampleTree.add(11);
exampleTree.add(1);
exampleTree.add(7);
exampleTree.add(5);

console.log(exampleTree)

console.log("В глубину")

exampleTree.traverseDFS((node) => {
    console.log(node.value)
});

console.log("В ширину")

exampleTree.traverseBFS((node) => {
    console.log(node.value)
});

