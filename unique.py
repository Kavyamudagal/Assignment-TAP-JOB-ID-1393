def unique_values(arr):
    seen = set()
    unique_list = []
    for item in arr:
        if item not in seen:
            unique_list.append(item)
            seen.add(item)
    return unique_list


numbers = [1, 2, 2, 3, 4, 4, 5]
unique_numbers = unique_values(numbers)
print(unique_numbers)  # Output: [1, 2, 3, 4, 5]
