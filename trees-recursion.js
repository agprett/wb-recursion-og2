class Node {
  constructor(data, children = []) {
    this.data = data;
    this.children = children;
  }
}

const resume = new Node('resume.txt');
const recipes = new Node('recipes.txt');
const jane = new Node('jane/', [resume, recipes]);
const server = new Node('server.py');
const jessica = new Node('jessica/', [server]);
const users = new Node('Users/', [jane, jessica]);
const root = new Node('/', [users]);

// List all nodes in tree rooted at rootNode.

