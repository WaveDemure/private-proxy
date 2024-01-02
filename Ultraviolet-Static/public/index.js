"use strict";
/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("uv-form");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("engine");
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("uv-error");
/**
 * @type {HTMLPreElement}
 */
const errorCode = document.getElementById("uv-error-code");

var logID = document.getElementById("logs")

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    await registerSW();
  } catch (err) {
    document.write("Failed to register Service worker" + err.toString() + " | <button onclick='location.reload()'>Return</button>");
    throw err;
  }

  const url = search(address.value, searchEngine.value);
  location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
});

document.getElementById("add-mark").addEventListener("click", function () {
  var B_Num = prompt("Bookmark name");
  var B_Link = prompt("Bookmark link");

  var convertedJson = {
    "name": B_Num,
    "link": B_Link
  }

  var bookDiv = document.createElement("div");
  document.getElementById("mark-contanier").appendChild(bookDiv);

  var bookButton = document.createElement("a");
  bookButton.innerHTML = convertedJson.name;
  bookButton.classList.add("bookButton")
  bookButton.id = B_Link
  bookButton.addEventListener("click", async (event) => {
    event.preventDefault();

    try {
      await registerSW();
    } catch (err) {
      document.write("Failed to register Service worker" + err.toString() + " | <button onclick='location.reload()'>Return</button>");
      throw err;
    }
  
    const url = search(bookButton.id, searchEngine.value);
    location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
  });
  bookDiv.appendChild(bookButton)

  
})