let _search = (graph, from, to, consume) => {
    let signal = async (from, tag, length, trace) => {
      if (from === to)
        consume({ channel: tag, length, trace })
      else
        for (let edge of graph.edges.filter(edge => edge.from === from && edge.from !== edge.to)) {
	   if (trace.indexOf(edge.to) < 0){
            signal(edge.to, [...trace, edge.to].reduce((p,a) => p*a,1) , length + 1,  [...trace, edge.to])
	   }
        }
    }

    signal(from, from, 0, [from])
 }

let search = (graph, entry, exit, consume) => {

    let signal = async (from, tag, length, trace) => {
      if (from === exit)
        consume({ channel: tag, length, trace })
      else
        for (let edge of graph.edges.filter(edge => edge.from === from && edge.from !== edge.to)) {
	   /*if ( (tag % edge.to !== 0) !== (trace.indexOf(edge.to) < 0))
		   console.log(from, edge.to, (tag % edge.to) !== 0, trace.indexOf(edge.to) < 0,tag,  trace.reduce((p,a) => p*a,1), trace)*/

	   if (tag % edge.to !== 0){
	   //if (trace.indexOf(edge.to) < 0){
		//console.log('signal')
            signal(edge.to, tag * edge.to  , length + 1,  [...trace, edge.to])
	   }
        }
    }

    signal(entry, entry, 0, [entry])
 }


module.exports = search
