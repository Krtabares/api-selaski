function getOffset(currentPage = 1, listPerPage) {
  return (currentPage - 1) * [listPerPage];
}

function emptyOrRowsOrOne(rows) {
  if (!rows) {
    return [];
  }else if (rows.length == 1) {
    return rows[0]
  }
  return rows;
}

function emptyOrRows(rows) {
  if (!rows) {
    return [];
  }
  return rows;
}

module.exports = {
  getOffset,
  emptyOrRows,
  emptyOrRowsOrOne
}