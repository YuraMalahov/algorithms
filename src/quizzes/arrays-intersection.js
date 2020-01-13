var intersect = function(nums1, nums2) {
    var sortFunc = function (a, b) {
        if (a > b) {
            return -1;
        } else if (a < b) {
            return 1;
        }

        return 0;
    };
    var nums1Sorted = nums1.sort(sortFunc);
    var nums2Sorted = nums2.sort(sortFunc);

    if (nums1Sorted.length > nums2Sorted.length) {
        var tmp = nums1Sorted;
        nums1Sorted = nums2Sorted;
        nums2Sorted = tmp;
    }

    var a;
    var b;
    var result = [];

    while (true) {
        a = nums1Sorted.pop();

        while (true) {
            b = nums2Sorted.pop();
            
            if (b === undefined) {
                break;
            }
            if (a === b) {
                result.push(a);
                break;
            }
        }

        if (a === undefined || b === undefined) {
            break;
        }
    }
    
    return result;
};

console.log(intersect([3,4,5,6,8,3,1,7,8,8,2,0], [3,33,56,12,3,8,8]));
