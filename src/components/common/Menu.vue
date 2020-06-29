<template>
  <v-card class="mx-auto menu" dark :class="{show: Menu}" width="200">
    <v-navigation-drawer permanent>
      <v-list dense nav>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <router-link to="/" tag="li" class="nav-link" active-class="active" exact>
              <v-list-item-title>Collection</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-heart-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <router-link to="/favourite" tag="li" class="nav-link" active-class="active" exact>
              <v-list-item-title>Favourite Books</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-plus-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <router-link to="/addBook" tag="li" class="nav-link" active-class="active" exact>
              <v-list-item-title>Add Book</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-delete</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <router-link to="/deleteBook" tag="li" class="nav-link" active-class="active" exact>
              <v-list-item-title>Delete Book</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    ...mapMutations(["ToggleMenu"])
  },
  computed: {
    ...mapGetters(["Menu"])
  }
};
</script>

<style>
.menu {
  display: none !important;
  position: absolute !important;
  transform: translateX(-200px) !important;
  transition: transform 2s !important;
  top: 64px;
  z-index: 10;
  height: 100%;
}
.menu.show {
  display: block !important;
  transform: translateX(0px) !important;
}
.v-list-item__icon {
  margin: 12px 10px 0 0 !important;
}
</style>