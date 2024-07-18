import { useState } from "react";
import { useDispatch } from "react-redux";
import LibrarySummary from "./components/LibrarySummary";
import { addBook } from "./actions/actions";
import "./App.css";

export default function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { title, author, isbn };
    dispatch(addBook(book));
    setTitle("");
    setAuthor("");
    setIsbn("");
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1>Library Mangement</h1>
        <input
          type="text"
          required
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          required
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="number"
          required
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
      <LibrarySummary />
    </main>
  );
}
