// e.g.
const A = document.createElement("div");
A.innerHTML = `
<div>
<div>
  <div>
    <div id="node1"></div>
  </div>
  <div>
  </div>
  <div>
    <div>
      <p id="node2"></p>
    </div>
  </div>
<div>
</div>`;
const B = A.cloneNode(true);
const node1 = A.querySelector("#node1");
const node2 = A.querySelector("#node2");
const node1Target = B.querySelector("#node1");
const node2Target = B.querySelector("#node2");
FindCorrespondingNode(A, B, node1); // node1Target
FindCorrespondingNode(A, B, node2); // node2Target

const FindCorrespondingNode = (rootA, rootB, target) => {
  if (rootA === target) return rootB;
  if (rootA.childElementCount) {
    for (let i = 0; i < rootA.childElementCount; i++) {
      let result = FindCorrespondingNode(
        rootA.children[i],
        rootB.children[i],
        target
      );
      if (result) {
        return result;
      }
    }
  }
};

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/dom-challenges.md