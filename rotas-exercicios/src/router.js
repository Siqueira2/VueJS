import Vue from "vue";
import Router from "vue-router";
import Menu from "./components/template/Menu.vue";
import MenuAlt from "./components/template/MenuAlt.vue";
// import Inicio from "./components/Inicio.vue";
// import Usuario from "./components/usuario/Usuario.vue";
// import UsarioLista from "./components/usuario/UsarioLista";
// import UsuarioDetalhe from "./components/usuario/UsuarioDetalhe";
// import UsuarioEditar from "./components/usuario/UsuarioEditar";

Vue.use(Router);

const Inicio = () =>
  import(/*webpackChunkName: "usuario"*/ "./components/Inicio.vue");
const Usuario = () =>
  import(/*webpackChunkName: "usuario"*/ "./components/usuario/Usuario.vue");
const UsarioLista = () => import("./components/usuario/UsarioLista");
const UsuarioDetalhe = () => import("./components/usuario/UsuarioEditar");

const router = new Router({
  mode: "history",

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },

  routes: [
    {
      path: "/",
      // component: Inicio,
      components: {
        default: Inicio,
        menu: Menu,
      },
      name: "inicio",
    },
    {
      path: "/usuario",
      // component: Usuario,
      components: {
        default: Usuario,
        menu: MenuAlt,
        menuInferior: MenuAlt,
      },
      props: true,
      children: [
        {
          path: "",
          component: UsarioLista,
        },
        {
          path: ":id",
          component: UsuarioDetalhe,
          props: true,
          beforeEnter: (to, from, next) => {
            console.log("antes da rota -> usuario detalhe");
            next();
          },
        },
        {
          path: ":id/editar",
          component: UsuarioEditar,
          props: true,
          name: "editarUsuario",
        },
      ],
    },
    {
      path: "*",
      redirect: "/",
    },
    // {
    //   path: "/rediciocionar",
    //   redirect: "/usuario",
    // },
  ],
});

router.beforeEach((to, from, next) => {
  console.log("antes das rotas");
  next();
});

export default router;
