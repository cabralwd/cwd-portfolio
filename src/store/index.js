import Vue from "vue";
import Vuex from "vuex";

import { skillsContent } from "./db/skills";
import { projetosContent } from "./db/projetos";
import { experienciasContent } from "./db/experiencias";

import {
  ALTERA_SKILLS,
  ALTERA_PROJETOS,
  ALTERA_EXPERIENCIAS,
} from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    skills: {
      title: "",
      items: [],
    },
    projetos: {
      title: "",
      items: [],
    },
    experiencias: {
      title: "",
      items: [],
    },
    hasSkillsDb: null,
    hasProjetosDb: null,
    hasExperienciasDb: null,
  },
  mutations: {
    [ALTERA_SKILLS](state, payload) {
      skillsContent.skills.splice(0, payload).forEach((item) => {
        state.skills.items.push(item);
      });

      state.skills.title = skillsContent.title;
      state.hasSkillsDb = skillsContent.skills.length;
    },
    [ALTERA_PROJETOS](state, payload) {
      projetosContent.projetos.splice(0, payload).forEach((item) => {
        state.projetos.items.push(item);
      });

      state.projetos.title = projetosContent.title;
      state.hasProjetosDb = projetosContent.projetos.length;
    },
    [ALTERA_EXPERIENCIAS](state, payload) {
      experienciasContent.experiencias.splice(0, payload).forEach((item) => {
        state.experiencias.items.push(item);
      });

      state.experiencias.title = experienciasContent.title;
      state.hasExperienciasDb = experienciasContent.experiencias.length;
    },
  },
  actions: {
    insereItensNaLista({ commit }, payload) {
      commit(payload.secao, payload.qtdItensMostrar);
    },
  },
  modules: {},
});
