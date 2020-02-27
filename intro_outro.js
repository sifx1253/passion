let articleCount = 0;
let StopOutAni = false;
let articleIndex = 100;
createArticles();

function createArticles() {
  console.log("createArticles");
  if (articleCount < 101) {
    let createArticle = document.createElement("article");
    document.querySelector("#intro_holder").appendChild(createArticle);
    articleCount++;
    createArticles();
  }
}

function startAniOut() {
  console.log("startAniOut");
  articleIndex = 100;
  StopOutAni = false;

  introAnimationOut1();
  introAnimationOut2();
  introAnimationOutHalf1();

  setTimeout(function () {
    StopOutAni = true;
    document.querySelectorAll("#intro_holder article").forEach(artc => {
      artc.classList.remove("article_in_ani");
      artc.classList.add("article_out_ani");
    });
    setTimeout(function () {
      StopOutAni = false;
    }, 100)
  }, 600)
}

function startAniIn() {
  console.log("startAniIn");
  articleIndex = 100;
  StopOutAni = false;

  introAnimationIn1();
  introAnimationIn2();
  introAnimationInHalf1();

  setTimeout(function () {
    StopOutAni = true;
    document.querySelectorAll("#intro_holder article").forEach(artc => {
      artc.classList.remove("article_out_ani");
      artc.classList.add("article_in_ani");
    });
    setTimeout(function () {
      StopOutAni = false;
    }, 100)
  }, 300)
}

function introAnimationOut1() {
  console.log("introanimationOUT1");
  let random = Math.ceil(Math.random() * 100);

  if (StopOutAni == false) {
    let article = document.querySelector(`#intro_holder article:nth-child(${random})`);
    article.classList.remove("article_in_ani");
    article.classList.add("article_out_ani");
    setTimeout(introAnimationOut1, 1);
  }
}

function introAnimationOut2() {
  console.log("introanimationOUT2");
  let random = Math.ceil(Math.random() * 100);

  if (StopOutAni == false) {
    let article = document.querySelector(`#intro_holder article:nth-child(${random})`);
    article.classList.remove("article_in_ani");
    article.classList.add("article_out_ani");
    setTimeout(introAnimationOut2, 1);
  }
}

function introAnimationOutHalf1() {
  console.log("introAnimationOutHalf1");
  if (articleIndex > 0) {
    let article = document.querySelector(`#intro_holder article:nth-child(${articleIndex})`);
    article.classList.remove("article_in_ani");
    article.classList.add("article_out_ani");
    articleIndex--;
    articleIndex--;
    articleIndex--;
    setTimeout(introAnimationOutHalf1, 1);
  } else {
    articleIndex = 99;
    introAnimationOutHalf2();
  }
}

function introAnimationOutHalf2() {
  console.log("introAnimationOutHalf2");
  if (articleIndex > 0) {
    let article = document.querySelector(`#intro_holder article:nth-child(${articleIndex})`);
    article.classList.remove("article_in_ani");
    article.classList.add("article_out_ani");
    articleIndex--;
    articleIndex--;
    articleIndex--;
    setTimeout(introAnimationOutHalf2, 1);
  } else {
    articleIndex = 98;
    introAnimationOutHalf3();
  }
}

function introAnimationOutHalf3() {
  console.log("introAnimationOutHalf3");
  if (articleIndex > 0) {
    let article = document.querySelector(`#intro_holder article:nth-child(${articleIndex})`);
    article.classList.remove("article_in_ani");
    article.classList.add("article_out_ani");
    articleIndex--;
    articleIndex--;
    articleIndex--;
    setTimeout(introAnimationOutHalf3, 1);
  } else {
    return;
  }
}

function introAnimationIn1() {
  //console.log("introanimationOUT1");
  let random = Math.ceil(Math.random() * 100);

  if (StopOutAni == false) {
    let article = document.querySelector(`#intro_holder article:nth-child(${random})`);
    article.classList.remove("article_out_ani");
    article.classList.add("article_in_ani");
    setTimeout(introAnimationIn1, 1);
  }
}

function introAnimationIn2() {
  //console.log("introAnimationIn2");
  let random = Math.ceil(Math.random() * 100);

  if (StopOutAni == false) {
    let article = document.querySelector(`#intro_holder article:nth-child(${random})`);
    article.classList.remove("article_out_ani");
    article.classList.add("article_in_ani");
    setTimeout(introAnimationIn2, 1);
  }
}

function introAnimationInHalf1() {
  //console.log("introAnimationInHalf1");
  if (articleIndex > 0) {
    let article = document.querySelector(`#intro_holder article:nth-child(${articleIndex})`);
    article.classList.remove("article_out_ani");
    article.classList.add("article_in_ani");
    articleIndex--;
    articleIndex--;
    articleIndex--;
    setTimeout(introAnimationInHalf1, 1);
  } else {
    articleIndex = 99;
    introAnimationInHalf2();
  }
}

function introAnimationInHalf2() {
  //console.log("introAnimationInHalf2");
  if (articleIndex > 0) {
    let article = document.querySelector(`#intro_holder article:nth-child(${articleIndex})`);
    article.classList.remove("article_out_ani");
    article.classList.add("article_in_ani");
    articleIndex--;
    articleIndex--;
    articleIndex--;
    setTimeout(introAnimationInHalf2, 1);
  } else {
    articleIndex = 98;
    introAnimationInHalf3();
  }
}

function introAnimationInHalf3() {
  //console.log("introAnimationInHalf3");
  if (articleIndex > 0) {
    let article = document.querySelector(`#intro_holder article:nth-child(${articleIndex})`);
    article.classList.remove("article_out_ani");
    article.classList.add("article_in_ani");
    articleIndex--;
    articleIndex--;
    articleIndex--;
    setTimeout(introAnimationInHalf3, 1);
  } else {
    return;
  }
}
