<template>
  <div>
    <div class="cont"></div>
    <div class="container">
      <div class="dialog-header-close">
        <div class="dialog-header-title"><h3>Thông tin sinh viên</h3></div>
        <button @click="closedForm"></button>
      </div>

      <div class="info">
        <div class="avatar"></div>
        <div class="input">
          <div class="row">
            <div class="col-25">
              <label for="fullName">Họ và Tên</label>
            </div>
            <div class="col-75">
              <input
                class="infoStu"
                type="text"
                placeholder="Họ và tên"
                v-model="currentStudent.name"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="email">Email</label>
            </div>
            <div class="col-75">
              <input
                class="infoStu"
                type="text"
                id="email"
                name="email"
                placeholder="Email.."
                v-model="currentStudent.email"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="email">Giới tính</label>
            </div>
            <div class="col-75">
              <input
                type="radio"
                id="male"
                name="gender"
                value="1"
                v-model="currentStudent.gender"
              />
              <label for="male">Nam</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="0"
                v-model="currentStudent.gender"
              />
              <label for="female">Nữ</label>
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="country">Quê quán</label>
            </div>
            <div class="col-75">
              <select
                id="country"
                name="country"
                v-model="currentStudent.address"
              >
                <option value="Hà Nội">Hà Nội</option>
                <option value="Hải Phòng">Hải Phòng</option>
                <option value="Cần Thơ">Cần Thơ</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="class">Lớp</label>
            </div>
            <div class="col-75">
              <select
                id="class"
                name="class"
                v-model="currentStudent.classroom"
              >
                <option value="Web12">Web12</option>
                <option value="Web01">Web01</option>
                <option value="Web02">Web02</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="email">Ngày sinh</label>
            </div>
            <div class="col-75">
              <input
                class="infoStu"
                type="date"
                id="email"
                name="email"
                placeholder="Email.."
                v-model="currentStudent.dob"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <input type="button" value="Lưu" @click="changeStudent" />
      </div>
    </div>
  </div>
</template>

<script>
// import EventBus from "@/EventBus.js";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    /**
     * Đóng form
     * Created By: NLSON (25/02/2021)
     */
    closedForm: function () {
      this.$emit("closedForm");
    },
    /**
     * Thay đổi dữ liệu
     * Created By: NLSON (25/02/2021)
     */
    changeStudent: function () {
      var student = {
        name: this.currentStudent.name,
        email: this.currentStudent.email,
        gender: this.currentStudent.gender,
        address: this.currentStudent.address,
        classroom: this.currentStudent.classroom,
        dob: this.currentStudent.dob,
        checked: false,
      };
      this.$emit("changedStudent", student);
    },
  },
  destroyed() {},
  computed: {
    /**
     * Lấy sinh viên trong Store
     * Created By: NLSON (25/02/2021)
     */
    ...mapGetters("student", {
      currentStudent: "currentStudent",
    }),
  },
};
</script>

<style lang="scss" scoped>
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
  background-color: #fff;
  padding: 20px 20px;
  width: 570px;
  position: absolute;
  top: calc(50% - 245px);
  left: calc(50% - 350px);
}

.col-25 {
  float: left;
  width: 100px;
  margin-top: 6px;
  display: flex;
}

.col-75 {
  float: left;
  width: 250px;
  margin-top: 6px;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
.info {
  display: flex;
}
.avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid black;
  margin-right: 15px;
  background-image: url("~@/assets/images/avatar.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.dialog-header-close {
  display: flex;
}
.dialog-header-close h3 {
  margin: 0;
  border-bottom: 3px solid green;
  margin-bottom: 15px;
}
.dialog-header-close button {
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
  background-image: url("~@/assets/images/x.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  opacity: 0.7;
}
</style>