let search = (graph, from, to, consume) => {
    let signal = async (from, tag, length, trace) => {
      if (from === to)
        consume({ channel: tag, length, trace })
      else
        for (let edge of graph.edges.filter(edge => edge.from === from)) {
          if (tag % edge.to > 0)
            signal(edge.to, tag * edge.to, length + 1, trace + ':' + edge.to)
        }
    }

    signal(from, from, 0, from)
 }

module.exports = search
