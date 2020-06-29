<template>
  <div>
    <v-container :class="{show: Menu}">
      <v-card-title>
        <span class="headline mt-5">Add Book</span>
      </v-card-title>
      <form>
        <v-text-field
          v-model="title"
          :error-messages="titleErrors"
          label="Book Title"
          prepend-icon="mdi-book"
          required
          @input="$v.title.$touch()"
          @blur="$v.title.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="author"
          :error-messages="authorErrors"
          label="Book author"
          prepend-icon="mdi-account"
          required
          @input="$v.author.$touch()"
          @blur="$v.author.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="cover"
          :error-messages="coverErrors"
          label="Book Cover Image .."
          prepend-icon="mdi-image"
          required
          @input="$v.cover.$touch()"
          @blur="$v.cover.$touch()"
        ></v-text-field>

        <div class="mt-3">
          <v-btn class="mr-4" @click="submit">submit</v-btn>
          <v-btn class="mr-4" @click="clear">clear</v-btn>
        </div>
      </form>
    </v-container>
    <v-dialog v-model="dialog" width="500">
      <v-alert type="success">Book Added Successfully</v-alert>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  name: "AddBook",
  components: {},
  mixins: [validationMixin],

  validations: {
    title: { required },
    author: { required },
    cover: { required }
  },

  data() {
    return {
      title: "",
      author: "",
      cover: "",
      dialog: false
    };
  },

  computed: {
    ...mapGetters(["allBooks", "Menu"]),
    titleErrors() {
      const errors = [];
      if (!this.$v.title.$dirty) return errors;
      //!this.$v.name.maxLength && errors.push("Name must be at most 10 characters long");
      !this.$v.title.required && errors.push("Book Title is required.");
      return errors;
    },
    authorErrors() {
      const errors = [];
      if (!this.$v.author.$dirty) return errors;
      //!this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.author.required && errors.push("Author is required");
      return errors;
    },
    coverErrors() {
      const errors = [];
      if (!this.$v.cover.$dirty) return errors;
      //!this.$v.name.maxLength && errors.push("Name must be at most 10 characters long");
      !this.$v.cover.required && errors.push("Cover is required.");
      return errors;
    }
  },

  methods: {
    ...mapActions(["addBook"]),
    submit() {
      this.$v.$touch();
      if (this.title == "" && this.author == "" && this.cover == "") {
        alert("All Feilds are required");
      } else if (this.title == "") {
        alert("Title is required");
      } else if (this.author == "") {
        alert("Author is required");
      } else if (this.cover == "") {
        alert("Cover Image is required");
      } else {
        const newBook = {
          //id: Math.random(),
          color: "#" + Math.floor(Math.random() * 16777215).toString(16),
          title: this.title,
          Author: this.author,
          cover: this.cover,
          favorite: false
        };
        this.dialog = true;
        setTimeout(
          function() {
            this.dialog = false;
            this.$router.push("Home");
            this.addBook(newBook);
            this.clear();
          }.bind(this),
          1500
        );
      }
    },
    clear() {
      this.$v.$reset();
      this.title = "";
      this.author = "";
      this.cover = "";
    }
  }
};
</script>

<style></style>
