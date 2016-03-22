require.config({
    baseUrl: "src/components",
    paths: {
        Phaser: "../../node_modules/phaser/dist/phaser.min",

        GameConstants: "../constants/GameConstants",

        Background: "background/Background",
        BackgroundConstants: "background/BackgroundConstants",

        Player: "player/Player",
        PlayerConstants: "player/PlayerConstants",

        BulletPool: "bullet/BulletPool",
        BulletConstants: "bullet/BulletConstants"
    }
});