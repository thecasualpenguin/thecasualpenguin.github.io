
imgs = document.getElementsByTagName("img");

for (let im of imgs) {
  im.addEventListener("mouseenter", () => showWhosBoss(im.title));
  im.addEventListener("mouseleave", () => resetT());
}

function showWhosBoss(title) {
    t = document.getElementsByTagName("h1")[0]
    t.innerHTML = `You are hovering over ${title.toUpperCase()}!`;
}

function resetT() {
  t = document.getElementsByTagName("h1")[0]
  t.textContent = "Not Anymore..."
}