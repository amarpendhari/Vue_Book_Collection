# Vue + Json Server Book Colection

## Project setup

```
npm install
```

## Install Vue

```
npm install vue
```

## Install Vuetify

```
vue add vuetify
```

## Install vuelidate

```
npm install vuelidate --save
```

## Compiles and hot-reloads for development(Run Vue on localhost)

```
npm run serve
```

## Install JSON Server

```
npm install -g json-server
```

## Run JSON Server

```
json-server --watch db.json
```

## Run Vue + JSON Server(Scripts added for npm run dev)

```
npm run dev
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Vue + Json Server Book Colection

- A Book Collection created using Vue, Vuex, Json Server and Vuetify

## Project Specifications

- A Complex Nested Component based App using Vue
- JSON Server is a Node Module that you can use to create demo rest json webservice(i.e full fake REST API )
- Vuex for State Management
- Vuetify for Styling UI Components
- vuelidate for Form Validation

* Menu for navigation

  - Collection (All books from Book Collection)
  - Favourite Books (List of Books marked as Favourite)
  - Add Book (Add new Book)
  - Delete Book (Delete Book from Books Collection)

* Collection

  - Get All Books from Json Server + Display in UI
  - Book with Title, Author and Book Cover
  - IF Favourite, Remove to Favourite option available on Book
  - IF not a Favourite, Add to Favourite option available on Book
  - Header + Menu For Navigation

* Favourite Books

  - Get a List of All Books marked as Favourite
  - Default Msg if no Books in Favourite List

* Add Book

  - Vuelidate for From Validation
  - Form with 3 Input feilds(i.e Book Title, Book Author, Book Cover)
  - All feilds are required
  - Submit button to Submit Form and Add new Book to Books Collection
  - Success Msg of Book been Added
  - After Submit Form redirect to Collection page and display All Books + New Book Added
  - Clear button to Clear Form

* Delete Book

- Display all the Books from Books Collection
- Each Book should have a Delete Option
- Delete Book from Books Collection
- Alert Msg after Deleting Book


_IF Possible Clone or Download. Thank You_
