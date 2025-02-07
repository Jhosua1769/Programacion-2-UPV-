hello(goodbye);

function hello(callback) {
    console.log("hello");

    callback();
}

function leave() {
    console.log("leave");
}

function wait() {
    console.log("wait");
}

function goodbye() {
    console.log("goodbye");
}