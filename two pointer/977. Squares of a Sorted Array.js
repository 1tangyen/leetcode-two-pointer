/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
	let result = [];
	let start = 0;
	let end = nums.length - 1;
	let pointer = nums.length - 1;

	while (start <= end) {
		if (nums[start] ** 2 > nums[end] ** 2) {
			result[pointer] = nums[start] ** 2;
			start++;
			pointer--;
		} else {
			result[pointer] = nums[end] ** 2;
			end--;
			pointer--;
		}
	}
	return result;
};
