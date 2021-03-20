const nameList = ["Philipp", "Jörg", "Johannes", "Martin"]

// nameList[0] === "Philipp"
// nameList[3] === "Martin"

for (let i = 0; i<nameList.length; i++){
    console.log(nameList[i]);
}

// Phlipp
// Jörg
// Johannes
// Martin


const zahlenListe = [ 0, 1, 2, 3, 4, 5]

// 0
// 2
// 4
// 6
// 8
// 10

for (let i=0; i<zahlenListe.length; i++){
    console.log(zahlenListe[i]*2);
}

/*
#
##
###
####
#####
*/

let vorname = "Martin"
let nachname = "Pagels"
let fullname = vorname + " " + nachname

let raute = "#"


for (let i= 0; i<5;i++){
    console.log(raute);
    raute += '#'
}