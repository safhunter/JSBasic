// Task 1

function numberToObject(num) {
    if (!(typeof num === 'number')) {
        console.log("Это не число");
        return {};
    }
    if ((!Number.isInteger(num)) || (num < 0) || (num > 999)) {
        console.log("Это недопустимое число");
        return {};
    }
    let result = {
        units: 0,
        tens: 0,
        hundreds: 0,
    };

    result.units = num % 10;
    result.tens = Math.floor((num % 100) / 10);
    result.hundreds = Math.floor(num / 100);

    return result;
}

console.log(numberToObject(3));

// Task 1.1

function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.make25PercentDiscount = function () {
    this.price *= 0.75;
};

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price *= 0.75;
    };
}

let prod_1 = new Product("Beer", 100);
prod_1.make25PercentDiscount();
console.log(prod_1.price);

// Task 1.2

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
Post.prototype.edit = function (newText) {
    this.text = newText;
    this.date = Date.now();
}

function AttachedPost(author, text, date, highlighted) {
    Post.call(this, author, text, date);
    this.highlighted = highlighted;
}
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;
AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
};

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(newText) {
        this.text = newText;
        this.date = Date.now();
    }
}

class AttachedPost extends Post {
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = highlighted;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    };
}

let attachedPost_1 = new AttachedPost("Me", "", Date.now());
attachedPost_1.edit("Hello world!");
attachedPost_1.makeTextHighlighted();
console.log(attachedPost_1.text);