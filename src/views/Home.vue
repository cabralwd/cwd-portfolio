<template>
  <div>
    <Header />

    <Banner />

    <Sobre />

    <Skills />

    <Projetos />

    <Experiencias />

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "../components/Footer.vue";

import Banner from "@/components/sections/Banner";
import Sobre from "@/components/sections/Sobre";
import Skills from "../components/sections/Skills.vue";
import Projetos from "../components/sections/Projetos.vue";
import Experiencias from "../components/sections/Experiencias.vue";

export default {
  name: "Home",
  metaInfo: {
    title: "Home",
  },
  components: {
    Header,
    Footer,
    Banner,
    Sobre,
    Skills,
    Projetos,
    Experiencias,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
