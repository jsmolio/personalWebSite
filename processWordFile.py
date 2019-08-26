file = open('words.txt', 'r+')

lines = file.readlines()
for word in lines:
    word=word.strip('\n')
    word = "\"" + word + "\", "
    file.write(word)

file.close()
