new Vue({
  el: "#app",
  data: {
    run: true,
    playerLife: 100,
    monsterLife: 100,
    logs: [],
  },
  computed: {
    hasResult() {
      return this.playerLife === 0 || this.monsterLife === 0;
    },
  },
  watch: {
    hasResult(value) {
      if (value) return (this.run = false);
    },
  },
  methods: {
    startGame() {
      this.run = true;
      this.playerLife = 100;
      this.monsterLife = 100;
      this.logs = [];
    },
    attack(special = false) {
      this.damage(
        "monsterLife",
        special,
        7,
        12,
        "Jogador",
        "Monstro",
        "player"
      );
      if (this.monsterLife > 0)
        this.damage(
          "playerLife",
          special,
          7,
          12,
          "Monstro",
          "Jogador",
          "monster"
        );
    },
    damage(atr, special, min, max, source, target, cls) {
      let specialDamage = special ? 5 : 0;
      let dmg = this.getRandom(min + specialDamage, max + specialDamage);
      this[atr] = Math.max(this[atr] - dmg, 0);
      this.registerLog(`${source} atingiu ${target} com ${dmg}`, cls);
    },
    heal(min, max) {
      const heal = this.getRandom(min, max);
      this.damage("playerLife", false, 7, 12);
      this.playerLife = Math.min(this.playerLife + heal, 100);
      this.registerLog(`Jogador ganhou força de ${heal}.`, "player");
    },
    getRandom(max, min) {
      return Math.round(Math.random() * (max - min)) + min;
    },
    registerLog(text, cls) {
      this.logs.unshift({ text, cls });
    },
  },
});
