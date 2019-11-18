const notes = ['note1', 'note2', 'note3']

notes[2] = 'this is now the new note3'

notes.forEach(function(item, index){
    console.log(index)
    console.log(item)
})

console.log(notes.length)
console.log(notes)

for (let count = 2; count >= 0; count--){
    console.log(notes)
}

for (let count = notes.length-1; count>=0; count--){
    console.log(notes)
}