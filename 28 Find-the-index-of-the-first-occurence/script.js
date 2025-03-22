function indexstr(haystack, needle) {
    let left = 0;

    for (let right = 0; right < haystack.length; right++) {

        if (right - left + 1 === needle.length) {
            if (haystack.substring(left, right + 1) === needle) {
                return left;
            }
            left++;
        }
    }

    return -1; // If not found
}

// ✅ Add a `console.log` statement to see output
console.log(indexstr("sadbutsad", "but"));  // Should return 3
