import Vue from "vue";
import Vuex from "vuex";

import { skillsContent } from "./db/skills";
import { projetos } from "./db/projetos";
import { experiencias } from "./db/experiencias";

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
    projetos: [],
    experiencias: [],
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
      projetos.splice(0, payload).forEach((item) => {
        state.projetos.push(item);
      });

      state.hasProjetosDb = projetos.length;
    },
    [ALTERA_EXPERIENCIAS](state, payload) {
      experiencias.splice(0, payload).forEach((item) => {
        state.experiencias.push(item);
      });

      state.hasExperienciasDb = experiencias.length;
    },
  },
  actions: {
    insereItensNaLista({ commit }, payload) {
      commit(payload.secao, payload.qtdItensMostrar);
    },
  },
  modules: {},
});
