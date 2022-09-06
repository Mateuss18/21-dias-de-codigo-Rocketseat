const sidebar = document.querySelector(".sidebar")
const content = document.querySelector(".content")

function stopRefreshAction(e) {
    e.preventDefault()
}
document.querySelector(".menu").addEventListener(
    'click', stopRefreshAction , false
)

function expandMenu() {
    sidebar.classList.toggle("expanded-active")
    content.classList.toggle("expanded-active")
}

const search = () => {
    const searchBox = document.getElementById("search-item").value.toUpperCase()
    const productList = document.getElementById("products-list")
    const product = document.querySelectorAll(".product")
    const productName = productList.getElementsByTagName("h3")

    for (let i = 0; i < productName.length; i++){
        let match = product[i].getElementsByTagName('h3')[0]

        if (match) {
            let textValue = match.textContent || match.innerHTML

            if (textValue.toUpperCase().indexOf(searchBox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none"
            }
        }
    }
}