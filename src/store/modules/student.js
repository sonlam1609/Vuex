import axios from "axios";
import Vue from "vue";

export default {
  namespaced: true,

  state: {
    curStudent: {},
    students: [],
  },

  getters: {
    allStudent(state) {
      return state.students;
    },

    currentStudent(state) {
      return state.curStudent;
    },
  },

  mutations: {
    setStudents(state, students) {
      state.students = students;
    },

    pushStudent(state, student) {
      state.students.push(student);
    },

    setStudent(state, student) {
      state.curStudent = student;
    },

    updateStudent(state, payload) {
      let id = payload.id;
      let student = payload.student;
      student.id = id;
      var foundIndex = state.students.findIndex((x) => x.id == id);
      Vue.set(state.students, foundIndex, student);
    },
    deleteStudents(state, id) {
      state.students = state.students.filter((student) => student.id != id);
    },
  },

  actions: {
    /**
     * Lấy tất cả sinh viên
     * @param {*} param0
     */
    getAllStudent({ commit }) {
      axios
        .get("http://localhost:3000/students")
        .then(function(response) {
          var students = response.data;
          commit("setStudents", students);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    /**
     * Thêm sinh viên vào db
     * @param {*} param0
     * @param {*} student
     * Created By: NLS (24/02/2021)
     */
    pushStudent({ commit }, student) {
      // state.students.push(student);
      axios
        .post("http://localhost:3000/students", student)
        .then(function(response) {
          student.id = response.data.id;
          commit("pushStudent", student);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    /**
     * Lấy thông tin Student theo id
     * @param {*} param0
     * @param {*} id: mã sinh viên
     * Created By: NLS (24/02/2021)
     */
    getStudentById({ commit }, id) {
      axios
        .get("http://localhost:3000/students/" + id)
        .then(function(response) {
          const student = response.data;
          commit("setStudent", student);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    /**
     * Cập nhật sinh viên
     * @param {*} payload : {id, student}
     * Created By: NLS (24/02/2021)
     */
    updateStudent({ commit }, payload) {
      axios
        .put("http://localhost:3000/students/" + payload.id, payload.student)
        .then(function(response) {
          console.log(response.data);
          commit("updateStudent", payload);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    /**
     * Xóa sinh viên
     * @param {*} id: mã sinh viên
     * Created By: NLS (24/02/2021)
     */
    deleteStudents({ commit }, id) {
      axios
        .delete("http://localhost:3000/students/" + id)
        .then(function(response) {
          console.log(response.data);
          commit("deleteStudents", id);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
