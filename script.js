// Birinci Task

// let array = [23, 45, 22, 36, -45, 84]

// function s(p) {
//     let total = 0;
//     for (i = 0; i < p.length; i++) {
//         total += p[i]
//     }
//     console.log(total)

// }

// s(array);




// Ikinci Task



// let array = [23, 45, 22, "test", 36, -45, 84]

// function s(p) {
//     let total = 0;
//     for (i = 0; i < p.length; i++) {

//         if (typeof(p[i]) == 'number') {
//             total += p[i]

//         }
//     }
//     console.log(total)

// }

// s(array);


// 3-cu Task


// let array = [1, 5, 20, 32, 54, 79, 82, 91, 564, 351];
// let cut = 0,
//     tek = 0;

// function odd_even(p) {
//     for (i = 0; i < p.length; i++) {
//         if (p[i] % 2 == 0) {
//             cut++
//         } else {
//             tek++
//         }
//     }
//     console.log("cut sayi:", cut, "tek sayi:", tek)
// }

// odd_even(array)



// 4-cu Task



// let arrey = ['Tofiq', 'Ruslan', 'Səma', 3, null, 'Məhəmməd', { 'type': "user" },
//     [1, 2, 3]
// ]

// function only_string(p) {
//     for (i = 0; i < p.length; i++) {
//         if (typeof(p[i]) == "string") {
//             console.log(p[i])
//         }
//     }
// }
// only_string(arrey)


// 5-ci Task


// var library = [{
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false
//     }
// ];

// function title_prop(p) {
//     for (i = 0; i < p.length; i++) {
//         console.log(p[i].title)
//     }
// }

// title_prop(library)



// 6-ci Task


// var library = [{
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false
//     }
// ];

// function title_prop(p) {
//     for (i = 0; i < p.length; i++) {
//         if (p[i].readingStatus == true) {
//             console.log(p[i].title)

//         }
//     }
// }

// title_prop(library)




// 7-ci Task

// let array = [1, 1, 5, 'Mahammad', 'Mahammad', null, null, null, undefined, undefined, 4, 5, 5, 4];
// var a = "";

// function repeateNumber(p) {
//     for (i = 0; i < p.length; i++) {
//         if (p[i] == p[i]) {
//             a += " " + String(p[i])

//         }
//     }
//     console.log(a)
// }


// repeateNumber(array)