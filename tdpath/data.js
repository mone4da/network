
let generatePrimes = max => {
	let list = []
	for (let i = 2; i <= max; i++) {
		let flag = 0;

		// looping through 2 to user input number
		for (let j = 2; j < i; j++) {
			if (i % j == 0) {
				flag = 1;
				break;
			}
		}

		// if number greater than 1 and not divisible by other numbers
		if (i > 1 && flag == 0) {
			list.push(i);
		}
	}

	return list
}


let generateNodes = (size, tag) => {
	return [...new Array(size)].map((_, i) => ({ id: tag[i], label: tag[i] + '' }))
}

let generateEdges = nodes => {
  let edges = []
  for (let i = 0; i < nodes.length; i++) {
    for (let j = 0; j < nodes.length; j++) {
      if (nodes[i].id !== nodes[j].id && Math.random() < .5)
        edges.push({
          from: nodes[i].id,
          to: nodes[j].id
        })
    }
  }

  return edges
}

let generate = (size, tag) => {
  let nodes = generateNodes(Math.min(size, tag.length), tag)
  return {
    nodes: nodes,
    edges: generateEdges(nodes)
  }
}

module.exports = {generate, generatePrimes}
