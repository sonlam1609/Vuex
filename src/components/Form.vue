<template>
  <div>
    <div class="cont"></div>
    <div class="container">
      <div class="dialog-header-close">
        <button @click="closedForm"></button>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="fullName">Họ và Tên</label>
        </div>
        <div class="col-75">
          <input
            class="infoStu"
            type="text"
            v-model="fullname"
            placeholder="Họ và tên"
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
            v-model="email"
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
            checked="checked"
            v-model="gender"
          />
          <label for="male">Nam</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="0"
            v-model="gender"
          />
          <label for="female">Nữ</label>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="country">Quê quán</label>
        </div>
        <div class="col-75">
          <select id="country" name="country" v-model="address">
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
          <select id="class" name="class" v-model="classroom">
            <option value="Web12">Web12</option>
            <option value="Web01">Web01</option>
            <option value="Web02">Web02</option>
          </select>
        </div>
      </div>
      <div class="row">
        <input type="button" value="Lưu" @click="changeStudent" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: ["fullname", "email", "gender", "address", "classroom"],
  data() {
    return {};
  },

  methods: {
    setValue() {
      // this.$store.state.student.fullname = this.fullname;
      // this.$store.state.student.email = this.email;
      // this.$store.state.student.gender = this.gender;
      // this.$store.state.student.address = this.address;
      // this.$store.state.student.classroom = this.classroom;
    },
    closedForm: function () {
      this.$emit("closedForm");
    },
    changeStudent: function () {
      var check = this.validate();
      this.setValue();
      this.$emit("changedStudent", check);
    },
    validate() {
      if (this.email.trim()) {
        return true;
      }
      return false;
    },
  },
  created() {
    // EventBus.$on(
    //   "busDblClick",
    //   (fullname, email, gender, address, classroom) => {
    //     (this.fullname = fullname),
    //       (this.email = email),
    //       (this.gender = gender),
    //       (this.address = address),
    //       (this.classroom = classroom);
    //   }
    // );
    // EventBus.$on("busOpenClick", () => {
    //   (this.fullname = ""),
    //     (this.email = ""),
    //     (this.gender = "1"),
    //     (this.address = ""),
    //     (this.classroom = "");
    // });
  },
  destroyed() {
    // Stop listening the event hello with handler
    // EventBus.$off(
    //   "busDblClick",
    //   (fullname, email, gender, address, classroom) => {
    //     (this.fullname = fullname),
    //       (this.email = email),
    //       (this.gender = gender),
    //       (this.address = address),
    //       (this.classroom = classroom);
    //   }
    // );
    // EventBus.$on("busOpenClick", () => {
    //   (this.fullname = ""),
    //     (this.email = ""),
    //     (this.gender = "1"),
    //     (this.address = ""),
    //     (this.classroom = "");
    // });
  },
  computed: {
    // nameCall: function () {
    //   return this.fullname;
    // },
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