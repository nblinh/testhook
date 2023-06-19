/* eslint-disable no-restricted-globals */
// worker.js

self.addEventListener("message", function (e) {
  var message = e.data + "to myself!";
  self.postMessage(message);
  self.close();
});
