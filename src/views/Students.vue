<template>
  <div class="content">
    <ContentHeader msg="Danh sách học sinh" @clickedOpenForm="openForm" />
    <div class="function">
      <input
        type="text"
        v-model="sreachText"
        class="sreach"
        placeholder="Tìm kiếm theo tên"
      />
      <input
        style="background-color: rgb(255 56 56); color: white"
        class="btn-cancel"
        type="button"
        value="Xóa"
        @click="deleteStudents"
      />
    </div>
    <table>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              name="checkAll"
              v-model="checkAll"
              @click="checkedAll"
            />
          </th>
          <th style="text-align: center">Code</th>
          <th>Họ tên</th>
          <th>Email</th>
          <th style="text-align: center">Giới tính</th>
          <th>Quê quán</th>
          <th>Lớp</th>
        </tr>
      </thead>
      <tbody ref="tbody">
        <tr
          v-for="(stu, index) in studentFilter"
          :key="index"
          @click="oneClick(stu)"
          @dblclick="dblClick(stu.id)"
        >
          <td><input type="checkbox" name="name1" v-model="stu.checked" /></td>
          <td style="text-align: center">{{ stu.id }}</td>
          <td>{{ stu.name }}</td>
          <td>{{ stu.email }}</td>
          <td v-if="stu.gender == 1" style="text-align: center">Nam</td>
          <td v-else style="text-align: center">Nữ</td>
          <td>{{ stu.address }}</td>
          <td>{{ stu.classroom }}</td>
        </tr>
      </tbody>
    </table>
    <Form
      :class="{ 'display-none': formAdd }"
      @closedForm="closeForm"
      @changedStudent="changeStudent"
    />
  </div>
</template>

<script>
//library
// import EventBus from "@/EventBus.js";
//components
import ContentHeader from "@/components/ContentHeader.vue";
import Form from "@/components/Form.vue";

import { mapGetters } from "vuex";

export default {
  name: "Students",
  components: {
    ContentHeader,
    Form,
  },
  data() {
    return {
      /**dữ liệu tìm kiềm */
      sreachText: "",
      /**check all bản ghi */
      checkAll: "",
      /**bật tắt from */
      formAdd: true,
      /**Phương thức */
      method: "POST",
      /**Lấy vị trí cần sửa */
      indexKey: 0,
    };
  },
  methods: {
    /**Check tất cả các dòng */
    checkedAll() {
      if (!this.checkAll) {
        this.student.forEach((stu) => {
          stu.checked = true;
        });
      } else {
        this.student.forEach((stu) => {
          stu.checked = false;
        });
      }
    },
    /**Xóa dòng được chọn
     * CreatedBy: NLSon(24/02/2021)
     */
    deleteStudents: function () {
      console.log("delete");
      this.student.forEach((student) => {
        if (student.checked == true) {
          this.$store.dispatch("student/deleteStudents", student.id);
        }
      });
    },
    /**Mở form
     * CreatedBy: NLSon(24/02/2021)
     */
    openForm: function () {
      this.method = "POST";
      this.formAdd = false;
      this.currentStudent.name = "";
      this.currentStudent.email = "";
      this.currentStudent.gender = "1";
      this.currentStudent.classroom = "";
      this.currentStudent.address = "";
    },
    /**Đóng form
     * CreatedBy: NLSon(24/02/2021)
     */
    closeForm: function () {
      this.formAdd = true;
    },
    /**Đánh dấu dòng
     * CreatedBy: NLSon(24/02/2021)
     */
    oneClick(stu) {
      this.indexKey = stu.id;
      console.log(this.indexKey);
      this.$store.dispatch("student/getStudentById", this.indexKey);
      return stu.checked ? (stu.checked = false) : (stu.checked = true);
    },
    /**Mở form khi double click
     * CreatedBy: NLSon(24/02/2021)
     */
    dblClick() {
      this.method = "PUT";
      this.formAdd = false;
    },
    /**
     * Thay đổi dữ liệu sinh viên
     * CreatedBy: NLSon(24/02/2021)
     */
    changeStudent: function (student) {
      if (this.method == "POST") {
        this.$store.dispatch("student/pushStudent", student);
      } else {
        let payload = { student: student, id: this.indexKey };
        this.$store.dispatch("student/updateStudent", payload);
      }
      this.formAdd = true;
    },
  },
  beforeMount() {
    this.$store.dispatch("student/getAllStudent");
  },
  computed: {
    ...mapGetters("student", {
      student: "allStudent",
      currentStudent: "currentStudent",
    }),

    /**
     * Lọc dữ liệu
     * CreatedBy: NLSon(24/02/2021)
     */
    studentFilter: function () {
      if (this.sreachText.trim()) {
        return this.student.filter(
          (stu) => stu.name.search(this.sreachText) >= 0
        );
      } else {
        return this.student;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-cancel {
  position: absolute;
  right: 16px;
  width: 74px;
}
.content {
  position: absolute;
  top: 49px;
  left: 221px;
  width: calc(100% - 221px);
  height: calc(100vh - 61px);
}

.display-none {
  display: none;
}
.function {
  display: flex;
}
.sreach {
  height: 40px;
  width: 350px;
}

/**.Table */
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  text-align: left;
  // padding: 8px;
}
th {
  border-bottom: 1px solid black;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
tr:hover {
  background-color: #302a2a;
  color: white;
}
/**.form */
.infoStu,
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type="button"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

input[type="button"]:hover {
  background-color: #45a049;
}
input[type="checkbox"]:hover {
  transform: scale(1.5);
}
.cont {
  opacity: 0.4;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: lightsteelblue;
}
.container {
  border-radius: 5px;
  background-color: #90fe95;
  padding: 40px 20px;
  width: calc(50% - 400px);
  position: absolute;
  top: calc(50% - 150px);
  left: calc(50% - 250px);
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/**button exit */
.dialog-header-close {
  position: absolute;
  right: 0;
  top: 0;
}
.dialog-header-close button {
  width: 40px;
  height: 40px;
  border-radius: 0 5px 0 0;
  border: none;
  outline: none;
  cursor: pointer;
  background-image: url(/src/img/x.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  opacity: 0.7;
}
</style>