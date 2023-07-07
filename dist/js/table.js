function getTableData() {
    // Возвращает данные таблицы
    return table_data;
}


function fill_table() {
    // Заполняет таблицу данными
    let data = getTableData();

    let table = document.getElementById("car-table");
    let tbody = table.getElementsByTagName("tbody")[0];
    data.forEach((data_row) => {
        let row = tbody.insertRow();
        data_row.forEach((data_cell) => {
            row.insertCell().innerHTML = data_cell;
        });
    });
}


function clear_table() {
    // Очищает таблицу
    let table = document.getElementById("satellite-table");
    while (table.rows.length > 1) {
        console.log(table.rows.length);
        table.deleteRow(1);
    }
}


// Запускаем после загрузки страницы
document.addEventListener("DOMContentLoaded", () => {
    fill_table();
});