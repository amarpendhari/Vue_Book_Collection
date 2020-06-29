import axios from "axios";

const state = {
  books: "",
  favorite: "",
  menu: false
};
const getters = {
  allBooks: state => state.books,
  Menu: state => state.menu,
  FavoriteList: state => state.favorite
};
const actions = {
  async getBooks({ commit }) {
    try {
      const res = await axios.get("http://localhost:5000/books");
      //console.log(res.data);
      commit("SetBooks", res.data);
      commit("FavoriteList");
    } catch (err) {
      console.error(err);
    }
  },
  async addBook({ commit }, book) {
    console.log(book);
    try {
      const res = await axios.post("http://localhost:5000/books", book);
      console.log(res.data);
      commit("Add", res.data);
      commit("FavoriteList");
    } catch (err) {
      console.error(err);
    }
  },
  async deleteBook({ commit }, id) {
    console.log(id);
    try {
      await axios.delete(`http://localhost:5000/books/${id}`);
      commit("Delete", id);
    } catch (err) {
      console.error(err);
    }
  },
  async ToggleFavorite({ commit }, book) {
    try {
      const res = await axios.put(
        `http://localhost:5000/books/${book.id}`,
        book
      );
      console.log(res.data);
      commit("Favorite", book);
      commit("FavoriteList");
    } catch (err) {
      console.error(err);
    }
  }
};
const mutations = {
  SetBooks: (state, books) => (state.books = books),
  Add: (state, book) => (state.books = [...state.books, book]),
  Delete: (state, id) => {
    state.books = state.books.filter(book => book.id !== id);
  },
  Favorite: book => {
    book;
  },
  ToggleMenu: state => {
    state.menu = !state.menu;
  },
  FavoriteList: state => {
    state.favorite = state.books.filter(book => {
      return book.favorite == true;
    });
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
