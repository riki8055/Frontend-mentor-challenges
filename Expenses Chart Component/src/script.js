const fetchData = async () => {
  try {
    const response = await fetch("../data.json");

    if (!response.ok) {
      throw new Error("Oops! Something went wrong!");
    }

    const data = await response.json();
    createChartElements(data);
  } catch (error) {
    console.error(error);
  }
};

const createChartElements = (data) => {
  const maxAmount = Math.max(...data.map((item) => item.amount)); // Get the maximum amount
  const spendingChart = document.querySelector(".spendingChart");

  // Create HTML element with the specified element, class name, text content, and id
  const createHTMLElement = (element, className, textContent, id) => {
    const el = document.createElement(element);
    el.id = id;
    el.className = className;
    el.textContent = textContent;
    return el;
  };

  // Append multiple children to a parent element and return the parent element with the children appended to it
  const appendToParent = (parent, children) => {
    children.forEach((child) => parent.appendChild(child));
    return parent;
  };

  // Create elements dynamically based on data length
  data.forEach((value, idx) => {
    // Create div element
    const div = createHTMLElement(
      "div",
      "cssportal-div",
      null,
      `div${idx + 1}`
    );

    // Create span element for bar
    const barSpan = createHTMLElement("span", "bar", null, null);

    const barHeightPercentage = (value.amount / maxAmount) * 100; // Calculate the height of the bar based on the maximum amount
    barSpan.style.height = `${barHeightPercentage}%`;

    if (value.amount === maxAmount) {
      barSpan.style.backgroundColor = "var(--Primary-Color-2)";

      barSpan.addEventListener("mouseover", () => {
        barSpan.style.backgroundColor = "var(--Primary-Color-2__Hover)";
      });

      barSpan.addEventListener("mouseleave", () => {
        barSpan.style.backgroundColor = "var(--Primary-Color-2)";
      });
    } // Change color of the bar with the maximum amount

    // Create span element for day
    const daySpan = createHTMLElement("span", null, value.day, null);

    // Create span element for bar value
    const barValueSpan = createHTMLElement(
      "span",
      "bar__value",
      `$${value.amount}`,
      null
    );

    // Append barValueSpan to barSpan
    appendToParent(barSpan, [barValueSpan]);

    // Append barSpan & daySpan to div
    appendToParent(div, [barSpan, daySpan]);

    // Append div to spendingChart
    appendToParent(spendingChart, [div]);
  });
};

fetchData();
