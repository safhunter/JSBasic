// Task 1

function taskOne() {
    for (let i = 0; i < 11; i++) {
        if (i == 0) {
            console.log("0 - это ноль");
        } else if (i % 2 == 0) {
            console.log(`${i} - это четное число`);
        } else {
            console.log(`${i} - это нечетное число`);
        }
    }
}

taskOne();

// Task 2

const post = {
    author: "John", //вывести этот текст 
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число 
            }
        },
        {
            userId: 5, //вывести это число 
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст 
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// Task 3

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function (product) {
    product.price *= 0.85;
});
console.log(products);

// Task 4

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let productsWithPhotos = products.filter(function (product) {
    return ("photos" in product) && (product.photos.length > 0)
});
console.log(productsWithPhotos);

products.sort(function (prod_1, prod_2) {
    if (prod_1.price < prod_2.price) {
        return -1;
    }
    if (prod_1.price > prod_2.price) {
        return 1;
    }
    return 0;
});

console.log(products);

// Task 5

for (let i = 0; i < 10; console.log(i++)) { }

// Task 6

for (let i = 1; i < 21; console.log("x".repeat(i++))) { }