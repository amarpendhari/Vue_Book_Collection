import BookStore from "./components/bookStore/BookStore.vue";
import AddBook from "./components/bookStore/AddBook.vue";
import DeleteBook from "./components/bookStore/DeleteBook.vue";
import Favourite from "./components/bookStore/Favourite.vue";

export const routes = [
  { path: "", name: "", component: BookStore },
  { path: "/addBook", name: "", component: AddBook },
  { path: "/deleteBook", name: "", component: DeleteBook },
  { path: "/favourite", name: "", component: Favourite },
  // redirector
  { path: "*", redirect: "/" }
];
