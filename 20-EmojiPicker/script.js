const emojiElements = document.querySelectorAll('.emoji')
const copyMessages = document.querySelector('.copyMessages')

for (let i = 0; i < emojiElements.length; i++) {
    emojiElements[i].addEventListener('click', async function () {
        const emoji = emojiElements[i].textContent
        await navigator.clipboard.writeText(emoji)
        const emojiCopied = await navigator.clipboard.readText()
        const copy = document.createElement("span")
        copy.setAttribute("class", "copyMessage out")
        copy.innerText = `${emojiCopied} copiado ✅`
        copyMessages.appendChild(copy)

        function deleteMessageAfterDelay() {
            copy.style.display = "none"
        }

        setTimeout(deleteMessageAfterDelay, 2500)
    })
}