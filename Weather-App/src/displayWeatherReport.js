function getForecastDates(forecastArray) {
    const forecastDates = [];
    forecastArray.forEach((forecast) => {
        forecastDates.push(new Date(forecast.date));
    });

    return forecastDates;
}

function createTableBodyRow(header, forecastArray, method) {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.setAttribute("scope", "row");
    th.textContent = header;
    tr.appendChild(th);
    forecastArray.forEach((forecast) => {
        const td = document.createElement("td");
        td.textContent = forecast.day[method];
        tr.appendChild(td);
    });

    return tr;
}

export default (forecastData, city) => {
    const weekdays = {
        0: "Monday",
        1: "Tuesday",
        2: "Wednesday",
        3: "Thursday",
        4: "Friday",
        5: "Saturday",
        6: "Sunday",
    };
    const body = document.querySelector("body");
    const forecastArray = forecastData.forecast.forecastday;
    const forecastDates = getForecastDates(forecastArray);

    const table = document.createElement("table");
    const caption = document.createElement("caption");
    caption.textContent = `${city.charAt(0).toUpperCase() + city.slice(1)}: ${forecastDates[0].toDateString()} - ${forecastDates[forecastDates.length - 1].toDateString()}`;
    table.appendChild(caption);

    const thead = document.createElement("thead");
    const theadTr = document.createElement("tr");
    theadTr.appendChild(document.createElement("th"));
    forecastDates.forEach((forecastDate) => {
        const th = document.createElement("th");
        th.setAttribute("scope", "col");
        th.textContent = `${weekdays[forecastDate.getDay()]}`;
        theadTr.appendChild(th);
    });
    thead.appendChild(theadTr);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    // day.avgtemp_f
    tbody.appendChild(
        createTableBodyRow("Average Temp (F)", forecastArray, "avgtemp_f"),
    );
    table.appendChild(tbody);

    // day.avgtemp_c
    tbody.appendChild(
        createTableBodyRow("Average Temp (C)", forecastArray, "avgtemp_c"),
    );
    table.appendChild(tbody);

    // day.avghumidity
    tbody.appendChild(
        createTableBodyRow("Average Humidity", forecastArray, "avghumidity"),
    );
    table.appendChild(tbody);

    // day.daily_chance_of_rain
    tbody.appendChild(
        createTableBodyRow(
            "Daily Chance of Rain",
            forecastArray,
            "daily_chance_of_rain",
        ),
    );
    table.appendChild(tbody);


    if (body.children.length > 1) {
        const currentTable = document.querySelector('table');
        body.replaceChild(table, currentTable);
    } else {
        body.appendChild(table);
    }
};
