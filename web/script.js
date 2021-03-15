function FillData() {
  //URL to currency rate api by Pivat bank
  let requestURL =
    "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

  //Create request
  let request = new XMLHttpRequest();
  request.open("GET", requestURL);
  request.responseType = "json";

  //Send requesst
  request.send();

  //On load create html eleents
  request.onload = function () {
    var currencyRate_json = request.response;
    ShowCurrencyRate(currencyRate_json);
  };

  //Creates html elements
  function ShowCurrencyRate(jsonObj) {
    //Get section element
    let section = document.querySelector("section");
    //Create table
    let table = document.createElement("table");
    table.classList.add("table", "table-bordered");
    //Create table heading
    let thead = document.createElement("thead");
    thead.classList.add("thead-dark");

    //Create table heading row and add elements to it
    let tr = document.createElement("tr");
    tr.classList.add("text-center");

    let t = document.createElement("th");
    t.textContent = "Currency";
    t.scope = "col";
    tr.appendChild(t);

    t = document.createElement("th");
    t.textContent = "Buy";
    t.scope = "col";
    tr.appendChild(t);

    t = document.createElement("th");
    t.textContent = "Sale";
    t.scope = "col";
    tr.appendChild(t);
    thead.appendChild(tr);
    table.appendChild(thead);

    //Add table rows from each json object
    for (var i = 0; i < jsonObj.length; i++) {
      //Create table heading row and add elements to it
      tr = document.createElement("tr");
      tr.classList.add("table-secondary", "text-center");

      t = document.createElement("th");
      t.textContent = jsonObj[i].ccy + "-" + jsonObj[i].base_ccy;
      t.scope = "row";
      tr.appendChild(t);

      t = document.createElement("td");
      t.textContent = jsonObj[i].buy;
      tr.appendChild(t);

      t = document.createElement("td");
      t.textContent = jsonObj[i].sale;
      tr.appendChild(t);
      table.appendChild(tr);
    }
    section.appendChild(table);
    
  }
}
