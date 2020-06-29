<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <template>
      <v-container :class="{show: Menu}">
        <v-card class="mx-auto mt-5" tile>
          <v-card-title>
            <span class="headline">Favourite Books List</span>
          </v-card-title>

          <div v-if="FavoriteList[0]" class="FavoriteList">
            <v-list-item-content v-for="(book,i) in FavoriteList" :key="i">
              <v-card :color="book.color" dark>
                <img :src="book.cover" />
                <span class="font-weight-medium">{{book.title}}</span> By
                <span class="font-italic">{{book.Author}}</span>
              </v-card>
            </v-list-item-content>
          </div>
          <div v-else>
            <v-list-item-content class="text-center mt-3">
              <v-list-item-title>"No Book in Favourite Book List"</v-list-item-title>
            </v-list-item-content>
          </div>
        </v-card>
      </v-container>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import Header from "../common/Header";
import Menu from "../common/Menu";
export default {
  name: "Favourite",
  components: {
    Menu,
    Header
  },
  data() {
    return {
      menu: false
    };
  },
  methods: {
    ...mapActions(["getBooks"]),
    ...mapMutations(["FavoriteList"])
  },
  computed: {
    ...mapGetters(["Menu", "FavoriteList"])
  },
  created() {
    this.getBooks();
  }
};
</script>

<style>
.FavoriteList img {
  width: 50px;
  height: 60px;
  margin: 5px 10px;
}
.FavoriteList .v-list-item__content {
  padding: 5px;
}
</style>