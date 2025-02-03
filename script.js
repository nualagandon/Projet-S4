document.querySelectorAll("button").addEventListener("click", function() {
    const xhr = new XMLHttpRequest();

    const HttpMethod = "get";
    const url = "https://api.tisseo.fr/v2/lines.json?key=a3732a1074e2403ce364ad6e71eb998cb";
    xhr.open(HttpMethod, url);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const reponse = JSON.parse(xhr.responseText);
        }
    }

    xhr.send();
});

