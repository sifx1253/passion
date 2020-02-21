  const urlParams = new URLSearchParams(window.location.search);
  const kategori = urlParams.get("kategori");
  console.log("kategori", kategori);

  const endpoint = "https://spreadsheets.google.com/feeds/list/1AdgP4T0S2sqYOZNl3aHq_vHGg7hOj5ulN23DWNIHV48/2/public/values?alt=json";
  let filter = kategori;
  let allePassioner = [];

  document.addEventListener("DOMContentLoaded", start);


  function start() {
      hentData();

      document.querySelectorAll(".filter").forEach(each => {
          each.addEventListener("click", clickFilter);

      })

  }


  //Henter json fil og kalder funktionen visPassioner når den er hentet
  async function hentData() {

      const response = await fetch(endpoint);
      allePassioner = await response.json();
      console.log(allePassioner);

      visPassioner();
      addEventlistnerToButtons();
  }



  function visPassioner() {
      const container = document.querySelector("#udskriv");
      container.innerHTML = "";
      const passionTemplate = document.querySelector("template");

      allePassioner.feed.entry.forEach(passion => {
          if (filter == "alle" || filter == passion.gsx$kategori.$t) {
              let klon = passionTemplate.cloneNode(true).content;
              klon.querySelector("img").src = `img/small/${passion.gsx$billede.$t}-sm.jpg`;
              klon.querySelector("h1").textContent = passion.gsx$navn.$t;
              klon.querySelector("p").textContent = passion.gsx$kort.$t;
              klon.querySelector("p + p").textContent = `Pris: ${passion.gsx$pris.$t},-`;
              klon.querySelector("#detalje").addEventListener("click", () => {
                  location.href = "detalje.html?id=" + passion.gsx$id.$t
              });

              container.appendChild(klon);
          }
          console.log("vispassioner");
      });


  }

  function addEventlistnerToButtons() {
      document.querySelectorAll(".filter").forEach(elm => {
          elm.addEventListener("click", filterering);
      });
  }


  function filterering() {
      console.log("filter");
      filter = this.dataset.kategori;
      document.querySelector("h1").textContent = this.textContent;

      document.querySelectorAll(".filter").forEach(elm => {
          elm.classList.remove("valgt")
      })
      this.classList.add("valgt");

      visPassioner();
  }




  function sidenVises() {
      console.log("sidenVises");
      document.querySelector("#menuknap").addEventListener("click", toggleMenu);
  }


  function toggleMenu() {
      console.log("toggleMenu");
      document.querySelector("#menu").classList.toggle("hidden");

      let erSkjult = document.querySelector("#menu").classList.contains("hidden");

      if (erSkjult == true) {
          document.querySelector("#menuknap").textContent = "☰";
      } else {
          document.querySelector("#menuknap").textContent = "X";

      }
  }
