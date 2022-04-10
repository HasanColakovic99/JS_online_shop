/* AJAX REQUEST */

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    // 200 znači da je sve ok
    // 404 not found
    if (this.readyState == 4 && this.status == 200) {
        // trebamo poslati jedan request
        let obj = JSON.parse(this.responseText);
        let productsEl = document.getElementById('products');
        let html = "";

        for (let i = 0; i < obj.length; i++) {
            html += "<div class='col-md-4'>"
                + "<div class='card'>" +
                "<img src='" + obj[i].product_image + "' alt=''>" +
                "<div class='card-body'>" +
                "<h5 class='card-title>" + obj[i].product_name + "</h5>" +
                "<p class='card-text>$" + obj[i].product_price + "</p>" +
                "<button onclick='add_to_card(this)' class='btn btn-primary' data-product_id ='" + obj[i].id + "'>Add to Card</button>" +
                "<button onclick='see_more(this)' class='btn btn-info' data-product_id ='" + obj[i].id + "' data-bs-toggle='modal'data-bs-target='#seeMoreModal'>See More</button>" +
                "</div>" +
                "</div>" +
                "</div>";
        }
        productsEl.innerHTML = html;
    }
}

xhttp.open("GET", "https://621e049b849220b1fc8cae8b.mockapi.io/products", true);
xhttp.send();

function see_more(el) {
    let id = el.getAttribute("data-product_id");


    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        // 200 znači da je sve ok
        // 404 not found
        if (this.readyState == 4 && this.status == 200) {
            // trebamo poslati jedan request
            let obj = JSON.parse(this.responseText);
            document.getElementById('productDetails').innerHTML = "<p>" + obj.product_description + "</p>" + "<p><b>Material: </b>" + obj.product_material + "</p>" +
                "<p><b>Price: </b>$" + obj.product_price + "</p>";
        }
    }

    xhttp.open("GET", "https://621e049b849220b1fc8cae8b.mockapi.io/products/" + id, true);
    xhttp.send();
}


function add_to_card(el) {
    let id = el.getAttribute("data-product_id");

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        // 200 znači da je sve ok
        // 404 not found
        if (this.readyState == 4 && this.status == 200) {
            // trebamo poslati jedan request
            let obj = JSON.parse(this.responseText);
            document.getElementById('myCard').innerHTML = "<div class='row'>" + obj.product_name + "</div>";
        }
    }

    xhttp.open("GET", "https://621e049b849220b1fc8cae8b.mockapi.io/products/" + id, true);
    xhttp.send();
}