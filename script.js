function mincost(arr)
{ 
//write your code here
	let totalCost = 0;
	while (arr.length > 1) {
		arr.sort((a,b) => a - b);

		let first = arr.shift();
		let second = arr.shift();
		let cost = first + second;
		totalCost += cost;
		arr.push(cost);
	}
	return totalCost;
// return the min cost
  
}

console.log(mincost([4,3,2,6]));
consle.log(mincost([1,2,3,4,5]));

module.exports=mincost;
