

// Sum a list of numbers recursively: "backpack" strategy


// Sum a list of numbers recursively: "breadcrumbs" strategy


function doublerNonRecursive(arr) {
  stack = arr.toReversed();

  while (stack.length > 0) {
    const currentItem = stack.pop();
    if (Array.isArray(currentItem)) {
      for (const subitem of currentItem.toReversed()) {
        stack.push(subitem);
      }
    } else {
      console.log(currentItem * 2);
    }
  }
}
