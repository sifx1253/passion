//kald transition animation ud
startAniOut();

//alle eventlistenere til navigationslinks
document.querySelector("#link-forside0").addEventListener("click", () => {
  startAniIn(); //kald transition animation ind
  setTimeout(function () {
    //vent 600ms, gå til linket
    location.href = "index.html"
  }, 300);
});
document.querySelector("#link-forside1").addEventListener("click", () => {
  startAniIn();
  setTimeout(function () {
    location.href = "index.html"
  }, 300);
});
document.querySelector("#link-produkter1").addEventListener("click", () => {
  startAniIn();
  setTimeout(function () {
    location.href = "produkter.html?kategori=alle"
  }, 300);
});
document.querySelector("#link-alle1").addEventListener("click", () => {
  startAniIn();
  setTimeout(function () {
    location.href = "produkter.html?kategori=alle"
  }, 300);
});
document.querySelector("#link-jakker1").addEventListener("click", () => {
  startAniIn();
  setTimeout(function () {
    location.href = "produkter.html?kategori=jakker"
  }, 300);
});
document.querySelector("#link-kjoler1").addEventListener("click", () => {
  startAniIn();
  setTimeout(function () {
    location.href = "produkter.html?kategori=kjoler"
  }, 300);
});
document.querySelector("#link-toppe1").addEventListener("click", () => {
  startAniIn();
  setTimeout(function () {
    location.href = "produkter.html?kategori=toppe"
  }, 300);
});
document.querySelector("#link-om_os1").addEventListener("click", () => {
  startAniIn();
  setTimeout(function () {
    location.href = "om_os.html"
  }, 300);
});
document.querySelector("#link-forside2").addEventListener("click", () => {
  startAniIn();
  setTimeout(function () {
    location.href = "index.html"
  }, 300);
});
document.querySelector("#link-produkter2").addEventListener("click", () => {
  startAniIn();
  setTimeout(function () {
    location.href = "produkter.html?kategori=alle"
  }, 300);
});
document.querySelector("#link-alle2").addEventListener("click", () => {
  startAniIn();
  setTimeout(function () {
    location.href = "produkter.html?kategori=alle"
  }, 300);
});
document.querySelector("#link-jakker2").addEventListener("click", () => {
  startAniIn();
  setTimeout(function () {
    location.href = "produkter.html?kategori=jakker"
  }, 300);
});
document.querySelector("#link-kjoler2").addEventListener("click", () => {
  startAniIn();
  setTimeout(function () {
    location.href = "produkter.html?kategori=kjoler"
  }, 300);
});
document.querySelector("#link-toppe2").addEventListener("click", () => {
  startAniIn();
  setTimeout(function () {
    location.href = "produkter.html?kategori=toppe"
  }, 300);
});
document.querySelector("#link-om_os2").addEventListener("click", () => {
  startAniIn();
  setTimeout(function () {
    location.href = "om_os.html"
  }, 300);
});
