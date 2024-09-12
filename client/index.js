function fetchGreeting() {
  console.log("fetch Greeting");
  fetch("http://localhost:9000/", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      query: "query Query {\n  greeting\n}\n",
    }),
  })
    .then((data) => data.json())
    .then((data) => {
      const greeting = data.data.greeting;
      console.log(data);
      document.getElementById("data").textContent = greeting;
    });
}

fetchGreeting();
