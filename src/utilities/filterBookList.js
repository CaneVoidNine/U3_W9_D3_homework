export default function filterBooksList(titleToSearch, books) {
  const titleSearch = titleToSearch.toLowerCase();

  return books.filter((book) => book.title.toLowerCase().includes(titleSearch));
}
