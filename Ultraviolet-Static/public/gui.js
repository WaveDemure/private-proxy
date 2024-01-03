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

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    await registerSW();
  } catch (err) {
    document.write("Failed to register Service worker" + err.toString() + " | <button onclick='location.reload()'>Return</button>");
    throw err;
  }

  const url = search(address.value, searchEngine.value);
  document.getElementById("output").src = __uv$config.prefix + __uv$config.encodeUrl(url);
});