window.onload = () => {
  function getMessage() {
    return localStorage.getItem("message");
  }

  function saveMessage(message) {
    localStorage.setItem("message", message);
  }

  function updateHtml(message) {
    document.querySelector("#last-msg").innerHTML = message;
  }

  // * Main
  (function () {
    // ? show previous message on load
    updateHtml(getMessage());

    // ? gets input value on submit button click
    document.querySelector("#submitBtn").onclick = () => {
      const inputEl = document.querySelector("#message");

      const message = inputEl.value;

      if (message == "") {
        document.querySelector("#alert-msg").classList.remove("display-none");
        setTimeout(() => {
          document.querySelector("#alert-msg").classList.add("display-none");
        }, 1500);
      } else {
        // ? saves data to retrieve later
        saveMessage(message);

        updateHtml(message);

        inputEl.value = "";
      }
    };
  })();
};
