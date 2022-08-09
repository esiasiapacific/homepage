const RSS_URL = "https://cors-anywhere.herokuapp.com/http://press.esiap.com.au?format=rss"

console.log("HHHH")
headers = {}
fetch(RSS_URL, {
    method : "GET",
    mode: 'cors',
    headers: headers
})
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
  console.log("TEST")
    console.log(data);
    const items = data.querySelectorAll("item");
    let html = ``;
    items.forEach(el => {
      html += `
        <article>
          <img src="${el.querySelector("link").innerHTML}/image/large.png" alt="">
          <h2>
            <a href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">
              ${el.querySelector("title").innerHTML}
            </a>
          </h2>
        </article>
      `;
    });
    document.body.insertAdjacentHTML("beforeend", html);
  });