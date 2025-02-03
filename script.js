const button = document.querySelector("button");

function requeteTisseo() {
    const xhr = new XMLHttpRequest();

    const HttpMethod = "get";
    const url = "https://api.tisseo.fr/v2/lines.json?key=a3732a1074e2403ce364ad6e71eb998cb";
    xhr.open(HttpMethod, url);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const reponse = JSON.parse(xhr.responseText);
            console.log(reponse);
        }
    }

    xhr.send();
};

button.addEventListener("click", function() {
    console.log(requeteTisseo());
});
