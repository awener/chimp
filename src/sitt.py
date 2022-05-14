letters = {
    "s": [
 "####  ",
"#      ",
 "####  ",  
 "    #   ", 
"#    #   ",
" ####     ",
    ],
    "i": [
        "##### ",
        "#    #",
        "##### ",
        "#    #",
        "#    #",
        "##### ",
    ]
}

str = 'a'
for row in range(len(letters['a'])):
    for letter in str:
        print(letters[letter][row], end="  ")
    print()