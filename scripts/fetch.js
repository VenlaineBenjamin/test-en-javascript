const promesse = fetch("https://jsonplaceholder.typicode.com/users");

promesse
    .then(async (response) => {
        console.log(response);
        try {
            const users = await response.json();
            for (let i = 0; i < users.length; i++) {
                console.log(users[i].name);
            }
            console.log(users);
        } catch (e) {
            console.log(e);
        }
    })
    .catch((err) => console.log(err));
