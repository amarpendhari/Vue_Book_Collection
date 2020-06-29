k<template>
  <v-card class="mx-auto">
    <v-container class="my-4 mt-5" :class="{show: Menu}">
      <v-row dense>
        <v-col v-for="book in allBooks" :key="book.id" cols="6" class="p-2">
          <v-card :color="book.color" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div class style="display: grid">
                <div>
                  <v-card-title class="headline" v-text="book.title"></v-card-title>
                  <v-card-subtitle v-text="book.Author"></v-card-subtitle>
                </div>
              </div>

              <v-avatar class="ma-3" size="125" tile>
                <v-img :src="book.cover"></v-img>
              </v-avatar>
              <v-tooltip bottom v-if="book.favorite">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-bind="attrs"
                    v-on="on"
                    class="heart"
                    fab
                    dark
                    x-small
                    color="red"
                    @click="Favorite(book)"
                  >
                    <v-icon dark>mdi-heart</v-icon>
                  </v-btn>
                </template>
                <span>Remove to Favorite</span>
              </v-tooltip>
              <v-tooltip bottom v-else>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-bind="attrs"
                    v-on="on"
                    class="heart"
                    fab
                    dark
                    x-small
                    :color="book.color"
                    @click="Favorite(book)"
                  >
                    <v-icon color="pink">mdi-heart-outline</v-icon>
                  </v-btn>
                </template>
                <span>Add to Favorite</span>
              </v-tooltip>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Books",
  data() {
    return {
      option: false
    };
  },
  methods: {
    ...mapActions(["deleteBook", "getBooks", "ToggleFavorite"]),
    ...mapMutations(["ToggleMenu"]),
    Favorite(book) {
      if (book.favorite == true) {
        book.favorite = false;
        this.ToggleFavorite(book);
      } else {
        book.favorite = true;
        this.ToggleFavorite(book);
      }
    }
  },
  computed: {
    ...mapGetters(["allBooks", "Menu"])
  },
  created() {
    this.getBooks();
  }
};
</script>

<style>
.container.show {
  margin-left: 250px !important;
}
.v-card__title {
  word-break: break-word !important;
}
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none !important;
}
.v-image__image--cover {
  background-size: contain !important;
  background-position: right !important;
}
.v-card__actions {
  display: flex;
  justify-content: space-between;
}
button:focus {
  outline: none !important;
}
.heart {
  position: absolute;
  right: 0;
  margin: 8px;
  bottom: 0;
}
.options {
  display: none;
  transform: transition 2s;
}
.options.show {
  display: block;
  position: absolute;
  left: 40px;
  background: #c8c8c8;
}
</style>
