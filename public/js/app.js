const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  messageTwo.textContent = "";
  messageOne.textContent = "Loading..";

<<<<<<< HEAD
  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = `${data.error}`;
      } else {
        messageOne.textContent = `${data.location}`;
        messageTwo.textContent = `${data.forecast}`;
      }
    });
  });
=======
  fetch(`/weather?address=${location}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          messageOne.textContent = `${data.error}`;
        } else {
          messageOne.textContent = `${data.location}`;
          messageTwo.textContent = `${data.forecast}`;
        }
      });
    }
  );
>>>>>>> f34056ca63a50bfa0a9de328234053c78f8733a4
});
