function apiFunction(url) {
    fetch(url).then((res) => {
        console.log(res);
    });
}

apiFunction('https://jsonplaceholder.typicode.com/todos/1');