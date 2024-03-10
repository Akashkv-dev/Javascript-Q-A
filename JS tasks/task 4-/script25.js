
var library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];
for (var i = 0; i < library.length; i++) {
    if (library[i].readingStatus == true) {
        document.write("Already read " + library[i].title + " by " + library[i].author)
        document.write("<br>")
    }
    else {

        document.write("You still need to read " + library[i].title + " by " + library[i].author)
    }

}
