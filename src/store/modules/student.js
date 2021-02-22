import axios from "axios";

export default {
  namespaced: true,

  state: {
    students: [],
  },

  getters: {
    allStudent(store) {
      return store.students;
    },
  },

  mutations: {
    setStudents(store, students) {
      store.students = students;
    },
  },

  actions: {
    getAllStudent({ commit }) {
      axios
        .get("http://localhost:3000/students")
        .then(function(response) {
          // handle success
          var students = response.data;

          commit("setStudents", students);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
  },
};
