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
    logID.innerHTML = logID.innerHTML + "Failed to register Service worker";
    logID.innerHTML = logID.innerHTML + err.toString();
    throw err;
  }

  const url = search(address.value, searchEngine.value);
  location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
});
