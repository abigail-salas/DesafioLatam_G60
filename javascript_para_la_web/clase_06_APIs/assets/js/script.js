console.log("hola");

async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api/");
  const data = await res.json();

  console.log(data, "<--- TODA LA DATA");
  console.log(data.results[0].name.first, "<--- NOMBRE");

  /* --------APIs + DOM-------- */

  const element = document.querySelector(".user");
  element.innerHTML = data.results[0].location.country;

  /* EJERCICIO */

  const img = document.querySelector(".img");
  const name = document.querySelector(".name");
  const phone = document.querySelector(".phone");
  const city = document.querySelector(".city");

  name.innerHTML = `${data.results[0].name.first} ${data.results[0].name.last}`;

  phone.innerHTML = data.results[0].phone;

  city.innerHTML = `${data.results[0].location.city}, ${data.results[0].location.country}`;

  img.setAttribute("src", `${data.results[0].picture.large}`);
}

getRandomUser();

/* ----------SENTENCIA TRY CATCH---------- */

async function prueba() {
  try {
    const res = await fetch("https://noexisto.cl/api/");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

prueba();
