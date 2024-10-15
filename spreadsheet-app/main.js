const spreadSheetContainer = document.querySelector("#spreadsheet-container");
const exportBtn = document.querySelector("#export-btn");
const COLS = 10;
const ROWS = 10;
const spreadSheet = [];
const alpha = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

class Cell {
  constructor(
    isHeader,
    disabled,
    data,
    row,
    column,
    rowName,
    columnName,
    active = false
  ) {
    this.isHeader = isHeader;
    this.disabled = disabled;
    this.data = data;
    this.row = row;
    this.column = column;
    this.rowName = rowName;
    this.columnName = columnName;
    this.active = active;
  }
}

exportBtn.addEventListener("click", (e) => {
  let csv = "";
  for (let i = 1; i < spreadSheet.length; i++) {
    csv +=
      spreadSheet[i]
        .filter((item) => !item.isHeader)
        .map((item) => item.data)
        .join(",") + "\r\n";
  }
  const csvObj = new Blob([csv]);
  const csvUrl = URL.createObjectURL(csvObj);
  const a = document.createElement("a");
  a.href = csvUrl;
  a.download = "Spreadsheet File Name.csv";
  a.click();
});

initSpreadSheet();

function initSpreadSheet() {
  for (let i = 0; i < ROWS; i++) {
    let spreadsheetRow = [];
    for (let j = 0; j < COLS; j++) {
      let cellData = "";
      let isHeader = false;
      let disabled = false;

      if (j === 0) {
        cellData = i;
        isHeader = true;
        disabled = true;
      }

      if (i === 0) {
        cellData = alpha[j - 1];
        isHeader = true;
        disabled = true;
      }

      if (!cellData) {
        cellData = "";
      }

      const rowName = [i];
      const columnName = alpha[j - 1];

      const cell = new Cell(
        isHeader,
        disabled,
        cellData,
        i,
        j,
        rowName,
        columnName,
        false
      );
      spreadsheetRow.push(cell);
    }
    spreadSheet.push(spreadsheetRow);
  }
  drawSheet();
}

function createCellEl(cell) {
  const cellEl = document.createElement("input");
  cellEl.className = "cell";
  cellEl.id = "cell_" + cell.row + cell.column;
  cellEl.value = cell.data;
  cellEl.disabled = cell.disabled;

  if (cell.isHeader) {
    cellEl.classList.add("header");
  }

  cellEl.addEventListener("click", () => handleCellClick(cell));
  cellEl.addEventListener("change", (e) =>
    handleOnChange(e.target.value, cell)
  );

  return cellEl;
}

function handleOnChange(data, cell) {
  cell.data = data;
}

function handleCellClick(cell) {
  clearHeaderActiveStates();
  const columnHeader = spreadSheet[0][cell.column];
  const rowHeader = spreadSheet[cell.row][0];
  const columnHeaderEl = getElFromRowCol(columnHeader.row, columnHeader.column);
  const rowHeaderEl = getElFromRowCol(rowHeader.row, rowHeader.column);
  columnHeaderEl.classList.add("active");
  rowHeaderEl.classList.add("active");
  document.querySelector("#cell-status").innerHTML =
    cell.columnName + cell.rowName;
}

function clearHeaderActiveStates() {
  const headers = document.querySelectorAll(".header");
  headers.forEach((header) => {
    header.classList.remove("active");
  });
}

function getElFromRowCol(row, col) {
  return document.querySelector("#cell_" + row + col);
}

function drawSheet() {
  for (let i = 0; i < spreadSheet.length; i++) {
    const rowContainerEl = document.createElement("div");
    rowContainerEl.className = "cell-row";
    for (let j = 0; j < spreadSheet.length; j++) {
      const cell = spreadSheet[i][j];
      rowContainerEl.append(createCellEl(cell));
    }
    spreadSheetContainer.append(rowContainerEl);
  }
}
