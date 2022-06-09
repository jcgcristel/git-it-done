var getUserRepos = function(user) { var response = fetch(`https://api.github.com/users/${user}/repos`).then(function(response) {
    console.log("fetch ---");
    console.log(response);
    

    response.json().then(function(data) {
        console.log("data ----")
        console.log(data);
    });
})};

getUserRepos("octocat");