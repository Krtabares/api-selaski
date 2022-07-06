function getOffset(currentPage = 1, listPerPage) {
  return (currentPage - 1) * [listPerPage];
}

function emptyOrRows(rows) {
  if (!rows) {
    return [];
  }else if (rows.length == 1) {
    return rows[0]
  }
  return rows;
}

module.exports = {
  getOffset,
  emptyOrRows
}