<template>
  <h3>Using CSS to style an HTML Form</h3>

  <div>
    <form @submit.prevent="handleSubmit">
      <label for="fname">Email</label>
      <input type="text" v-model="email" placeholder="Your Email.." />

      <label for="lname">Password</label>
      <input type="password" v-model="password" placeholder="Your Password" />
      <div v-if="passError">
        {{ passError }}
      </div>
      <label for="lname">Skills</label>
      <input
        type="text"
        v-model="skill"
        @keyup.alt="addSkill"
        placeholder="Your skill"
      />

      <label for="country">Country</label>
      <select id="country" v-model="country">
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
      </select>
      <input type="submit" value="Submit" />
    </form>
  </div>
  <div>
    <p>EMail: {{ email }}</p>
    <p>Password: {{ password }}</p>
    <p>Country: {{ country }}</p>
  </div>
  <div v-for="d in skills" :key="d">
    <span @click="deleteSkill(d)"> {{ d }} </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      country: "",
      skill: "",
      skills: [],
      passError: "",
    };
  },
  methods: {
    addSkill(e) {
      if (e.key === "," && this.skill) {
        if (!this.skills.includes(this.skill)) {
          this.skills.push(this.skill);
        }

        this.skill = "";
      }
    },
    deleteSkill(d) {
      this.skills = this.skills.filter((item) => {
        return d !== item;
      });
    },
    handleSubmit() {
      this.passError = this.password.length < 3 ? "Password two weak" : "";
    },
  },
};
</script>

<style>
input[type="text"],
input[type="password"],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"] {
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>