import re

def is_palindrome(s):

    cleaned_s = re.sub(r'[^a-zA-Z0-9]', '', s).lower()
   
    return cleaned_s == cleaned_s[::-1]

print(is_palindrome("A man, a plan, a canal: Panama"))  # True
print(is_palindrome("race a car"))  # False
