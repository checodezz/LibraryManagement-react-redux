export const ADD_BOOK = "ADD_BOOK";
export const REMOVE_BOOK = "REMOVE_BOOK";

export const addBook = (book) => ({
  type : ADD_BOOK,
  payload : book
})

export const removeBook = (isbn) => ({
  type: REMOVE_BOOK,
  payload: parseInt(isbn),
});
