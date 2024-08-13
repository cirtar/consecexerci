function positionNode(node, x, y) {
  // Assuming `node` is a reference to an HTML element
  node.style.position = "absolute";  // Set the position property to absolute
  node.style.left = x + "px";  // Set the horizontal position in pixels
  node.style.top = y + "px";   // Set the vertical position in pixels
}
