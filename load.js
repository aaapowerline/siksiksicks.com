document.addEventListener("DOMContentLoaded", async () => {
  await loadComponent(".header", "header.html");
  await loadComponent(".footer", "footer.html");
  setActiveLink();
});

async function loadComponent(selector, path) {
  const response = await fetch(path);
  const text = await response.text();
  document.querySelector(selector).innerHTML = text;
}

function setActiveLink() {
  const currentPage = window.location.pathname.split("/").pop();
  let activeLinkId = "nav-home";

  switch (currentPage) {
    case "press.html":
      activeLinkId = "nav-press";
      break;
    case "merch.html":
      activeLinkId = "nav-merch";
      break;
  }

  const activeLink = document.querySelector(`#${activeLinkId}`);
  console.log(activeLink);
  activeLink.classList.add("pages__link--active");
}
