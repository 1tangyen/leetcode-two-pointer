/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(nums, k) {
	k %= nums.length; // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts

	let reverse = function(i, j) {
		while (i < j) {
			let temp = nums[i];
			nums[i] = nums[j];
			nums[j] = temp;
			i++;
			j--;
		}
	}; // suppose  ----->--->
	reverse(0, nums.length - 1); // reverse   <--<------
	reverse(0, k - 1); // reverse first part ---><----
	reverse(k, nums.length - 1); // reverse second part --->----->
};

//** ************************//

let rotate = function(nums, k) {
	k = k % nums.length;

	reverse(nums, 0, nums.length - 1);
	reverse(nums, k, nums.length - 1);
	reverse(nums, 0, k - 1);
};

let reverse = function(nums, start, end) {
	while (start < end) {
		let temp = nums[start];
		nums[start] = nums[end];
		nums[end] = temp;
		start++;
		end--;
	}
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
	k = k & nums.length;
	nums.push(...nums.splice(0, nums.length - k));
};
