<template>
  <div>{{ message }} {{ binding }}</div>
  <div :id="message"></div>
  <div v-text="binding"></div>
  <div v-html="htmlData"></div>
  <div v-bind:id="binding">hhh</div>
  <div class="text-3xl" v-bind:class="status">hehe</div>
  <div class="text-3xl" v-bind:class="['hello', 'hey']">hehe</div>
  <div class="text-3xl" v-bind:class="[check ? 'hehe' : 'hhshshs']">hehe</div>
  <div class="text-3xl" v-bind:class="{ promoted: check }">hehe</div>
  <div v-bind:class="check ? 'checked' : null">hello</div>
  <input type="checkbox" name="" id="" v-bind:checked="check" />
  <div v-bind:style="{ color: check ? 'blue' : 'orange' }">Hello</div>
  <div v-bind:style="divStyleObject">eheheh</div>
  <div v-bind:style="[divStyleObject]"></div>
  <div v-if="check === true">Hello</div>
  <div v-else-if="check === false">Hello</div>
  <div v-else="check === 1">Hi</div>
  <div v-show="check"></div>

  <!-- Conditionals -->
  <template v-if="check === true">
    <div>Hello</div>
  </template>
  <div v-for="item in names" :key="item.id">
    {{ item.name }}
  </div>
  <div v-for="(student, index) in students" :key="index">
    {{ student }}
  </div>
  <template v-for="student in students">
    <div v-if="student !== 'Ramesh'">
      {{ student }}
    </div>
    <hr />
  </template>

  <!-- Events -->
  <button @click="hello">Hello</button>
  <button v-on:click="hello">CLick Handler</button>
  <button v-on:click="names = []">CLick Handler</button>

  <!-- Forms -->
  <div>{{ JSON.stringify(formValues) }}</div>
  <form @submit="handleSubmit">
    <label for="name">Name:</label>
    <input
      type="text"
      name="name"
      placeholder="Name"
      v-model="formValues.name"
    />
    <label for="age">Age:</label>
    <input
      type="number"
      name="age"
      placeholder="age"
      v-model="formValues.age"
    />
    <input
      type="checkbox"
      name=""
      false-value="no"
      true-value="yes"
      v-model="formValues.checkbox"
    />
    <select name="" id="" multiple v-model="formValues.countries">
      <option value="USA">USA</option>
      <option value="India">India</option>
    </select>
    <input type="submit" value="Submit Data" />
  </form>
  <form>
    <input
      type="radio"
      name="radio"
      v-model="formValues.radio"
      value="Ramesh"
    />
    <input
      type="radio"
      name="radio"
      v-model="formValues.radio"
      value="Rajesh"
    />
    <input
      type="radio"
      name="radio"
      v-model="formValues.radio"
      value="Rakesh"
    />
  </form>
  <div class="text-2xl font-bold">Choose Skillsets</div>
  <form class="gap-2">
    <input
      type="checkbox"
      name=""
      id=""
      value="Python"
      v-model="formValues.skills"
    />
    <input
      type="checkbox"
      name=""
      id=""
      value="JS"
      v-model="formValues.skills"
    />
    <input
      type="checkbox"
      name=""
      id=""
      value="C++"
      v-model="formValues.skills"
    />
  </form>
</template>

<script lang="ts">
export default {
  name: "App",
  data(): {
    message: string;
    binding: string;
    htmlData: string;
    check: boolean;
    status: string;
    divStyleObject: { [key: string]: string };
    names: { name: string; id: number }[];
    students: string[];
    formValues: {
      name: string;
      age: number;
      countries: string[];
      checkbox: string;
      radio: string;
      skills: string[];
    };
  } {
    return {
      message: "Hello",
      binding: "Binding",
      htmlData: "<em>Hello</em>",
      check: true,
      status: "danger",
      divStyleObject: {
        color: "blue",
        fontSize: "23px"
      },
      names: [{ name: "Ramesh", id: 1 }],
      students: ["Rakesh"],
      formValues: {
        name: "",
        age: 0,
        countries: [],
        checkbox: "no",
        radio: "",
        skills: []
      }
    };
  },
  methods: {
    hello(event: Event) {
      console.log(event);
      console.log(this.names);
      console.log("Hello");
    },
    handleSubmit(event: Event) {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const name = formData.get("name");
      const age = formData.get("age");
      console.log(name, age);
    }
  }
};
</script>
