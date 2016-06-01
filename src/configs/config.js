require.config({
  baseUrl: "src",
  paths: {
    Phaser: "../node_modules/phaser/build/phaser.min",
    constants: "constants",
    controllers: "controllers",
    state: "state",

    enemyGroup: "groups/enemy",
    bulletGroup: "groups/bullet",
    
    background: "components/background",
    player: "components/player",
    bullet: "components/bullet"
  }
});