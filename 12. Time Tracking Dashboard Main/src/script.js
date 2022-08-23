const parentEl = document.querySelector(".parent");

fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((d, i) => {
      let html = `
        <div class="div${i + 1}">
            <div class="in-card">
              <small class="type">${d.title}</small>
              <h1 class="current-report"><span>${
                d.timeframes.weekly.current
              }</span>hrs</h1>
              <small class="last-report">Last Week - <span>${
                d.timeframes.weekly.previous
              }</span>hrs</small>
              <button class="btn">
                <img src="./images/icon-ellipsis.svg" />
              </button>
            </div>
          </div>
        `;

      parentEl.innerHTML += html;
    });
  })
  .catch((err) => {
    console.log("OOPS!", err);
  });
