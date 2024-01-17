<template>
  <!-- Parent Styles are read after the component tree styles by the parser hence if we try to apply different styles to the different components without scoping it will apply globally to the component tree and the parent would take the lead here and if we do not have the root element in any other child components in the component tree then the styles for those would be copied from the parent element styles and will cause the style leak. When using the slots the parent component styles are applied not the child one event though the content is embedded in the child element -->

  <!-- Component tag is the tag which is given by vue itself it is helpful for rendering dynamic components. We can pass the name of the component to render or bind the data property to the is -->
  <!-- Now if we want the keep the dynamic components state saved, even if the navigation between components is there, no new instance must be created  -->

  <!-- Multi step form example is for this with state to be saved when switch -->
  <keep-alive> <component is="Computed" /></keep-alive>
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

  <!-- more directives -->

  <div v-once>Hello I am once rendered</div>
  <div v-pre>Hello I am pre and will not be compiled</div>

  <!-- Forms -->
  <div>{{ JSON.stringify(formValues) }}</div>
  <form @submit.prevent="handleSubmit">
    <label for="name">Name:</label>
    <input
      type="text"
      name="name"
      placeholder="Name"
      v-model.trim.lazy="formValues.name"
    />
    <label for="age">Age:</label>
    <input
      type="number"
      name="age"
      placeholder="age"
      v-model.number="formValues.age"
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
  <teleport to="#portal-root"> <Portal /></teleport>
  <Computed id="myID" />
  <Card
    ><template v-slot:hello="hey">
      {{ hey }}
      <img src="https://picsum.photos/200" alt="" /></template
    ><template v-slot:hey>
      <img src="https://picsum.photos/200" alt="" /></template
  ></Card>
  <Components
    :userName="userName"
    @close="userName = 'Rahul'"
    v-model="componentValue"
  />
  <HTTP />
  <Mixins />
  <CompositionApi />
</template>

<script lang="ts">
import Components from "./components/Components.vue";
import Card from "./components/Card.vue";
import Computed from "./components/Computed.vue";
import Portal from "./components/Portal.vue";
import HTTP from "./components/HTTP.vue";
import Mixins from "./components/Mixins.vue";
import CompositionApi from "./components/CompositionApi.vue";

export default {
  name: "App",
  components: {
    Computed: Computed,
    Components: Components,
    Card: Card,
    Portal: Portal,
    HTTP: HTTP,
    Mixins: Mixins,
    CompositionApi: CompositionApi
  },
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
    userName: string;
    componentValue: string;
    dynamicClass: string;
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
      },
      componentValue: "",
      userName: "Rakesh",
      dynamicClass: "text-black"
    };
  },
  methods: {
    hello(event: Event) {
      console.log(event);
      console.log(this.names);
      console.log("Hello");
    },
    handleSubmit(event: Event) {
      const formData = new FormData(event.target as HTMLFormElement);
      const name = formData.get("name");
      const age = formData.get("age");
      console.log(name, age);
    }
  },
  provide() {
    return {
      username: this.students
    };
  }
  // provide: {
  //   username: "Ritvik"
  // }
};
</script>
