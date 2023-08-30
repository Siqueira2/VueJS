new Vue({
  el: "#desafio",
  data: {
    name: "Guilherme",
    age: 23,
    img: "https://images.unsplash.com/photo-1693185371650-389b0c6184cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
  },
  method: {
    randomNumber: () => {
      return Math.random() * 5;
    },
  },
});
