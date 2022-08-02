console.log("hi");
const searchElm = document.querySelector(".signIn1");
const form = document.querySelector("#searchForm");
form.addEventListener("submit", (e) => {
  e.preventDefault()
  searchquery = searchElm.value;
  if (searchquery.length == 0) {
    return false;
  } else {
    window.location = `https://www.google.com/search?q=${searchquery}`;
  }
});
console.log("Hi World");
