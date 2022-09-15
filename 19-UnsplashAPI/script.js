const column1 = document.getElementById("col-1");
const column2 = document.getElementById("col-2");
const column3 = document.getElementById("col-3");
const errorGrid = document.getElementById("errorGrid");

var orderByValue = '';

// APIs.
API_KEY = "riz9bjXsxAyDO8aEa_nU34R1hni_pTjcCHRMWFBZWK8";
apiUrl = "https://api.unsplash.com/photos/?client_id="+API_KEY+"&per_page=300";

imageURLS = [];

window.onload = (event) => {
    fetchData();
}

const fetchData = async () => {
    var tempUrl = apiUrl;

    if(orderByValue != '') {
        tempUrl += ('&order_by='+orderByValue);
    }

    const response = await (fetch(apiUrl).catch(handleError));
    const myJson = await response.json();

    var imageArrays = myJson;

    imageArrays.forEach(element => {
        imageURLS.push(element.urls.small);
    });

    displayImage();
}

var handleError = function(err) {
    console.warn(err);
    errorGrid.innerHTML = "<h4>Unable to fetch data "+err+"</h5>";
}

function displayImage() {
    errorGrid.innerHTML = "";
    if(imageURLS.length == 0) {
        errorGrid.innerHTML = "<h4>Unable to fetch data.</h5>";
        return;
    }

    column1.innerHTML = "";
    column2.innerHTML = "";
    column3.innerHTML = "";

    imageURLS.forEach((url,index) => {
        // dynamic image tag 
        var image = document.createElement('img');
        image.src = url;
        image.setAttribute("width", "350px");
        image.setAttribute("onclick","displayFullImage(this.src)");

        if( (index + 1) % 3 == 0 ) {
            column1.appendChild(image);
        }
        if( (index + 2) % 3 == 0 ) {
            column2.appendChild(image);
        }
        if( (index + 3) % 3 == 0 ) {
            column3.appendChild(image);
        }
    });
}
