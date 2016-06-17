# Space Boss Fighter

## Overview

This game is a **space shooter** where you can fly on your own space ship through levels. You will meet a lot of enemies which will try to kill you, so you need to shoot them first. Also you will find different power-ups with positive or negative bonuses and also with different types of weapons. In the end of the level you will meet the boss, after killing him next level will be opened.

## Steps to run the game

**Development version**

  1. Download ZIP archive and extract the project
  2. Open command line in project directory and type `npm install`
  3. Open `index.html` file

**Production version**

  1. Open this [link](http://crs4k.github.io/space-boss-fighter/).

## Used tools and instruments

* _programming language_: JavaScript (ES5, prototype inheritance, encapsulation, module structure)
* _canvas_: Phaser.js
* _module loading_: RequireJS
* _build_: Gulp
* _code quality_: jshint, jslint
* _unit testing_: Jasmine.js + Karma.js
* _CVS_: git

## Plan of developing
#### Phase 1

|Number|Part of developing|Comment|Finish date|
|:----:|------------------|-------|:---------:|
|1|Set up the environment|1. Create project folder and folders structure 2. Add html, css, js files 3. Connect stylesheets and scripts to html, connect Phaser|29/03/16|
|2|Learn JSHint, add JSHint config with default settings| 1. Read about linters, as JSHint and JSLint 2. Create JSHint config|31/03/16|
|3|Set background to the game|Add some moveable background to the game|03/04/16|
|4|Add player|1. Add player image 2. Add controls 3. Add basic characteristics as health points 4. Add collisions with edges of the screen|08/04/16|
|5|Set up RequireJS and unit testing tools| 1. Read about RequireJS, add RequireJS to the project 2. Read about Jasmine and Karma unit testing tools 3. Add unit tests to the project|10/04/16|
|6|Add shooting|Add the handling of the bullets appearing and disappearing on the screen|15/04/16|
|7|Add enemies| 1. Add appearing of enemies on the screen 2. Make them fly in some direction 3. Add collisions with enemies|30/05/16|
|8|Create game states preview images| 1. Create preview image for Prealod state 2. Create preview image for Menu state 3. Create preview image for Game state 4. Create preview image for Options state 5. Create preview image for Game Over state|10/06/16|
|9|Add states| 1. 	Add boot state 2. Add prealoder state 3. Add menu state 4. Add game state 5. Add options state 6. Add game over state|14/06/16|
|10|Add enemies shooting| 1. Add enemies bullets 2. Add collisions with bullets|23/06/16|
|11|Add panel with health, points and other info| 1. Add health bar 2. Add points meter 3. Add volume button 4. Add help button|28/06/16|
|12|Add sound| 1. Add bg music 2. Add shooting sound 3. Add explosion sound|30/06/16|


## Achieved skills

1. Became acquainted with linters such as **JSLint** and **JSHint**.

   **Learned**: how to check files for code quality using these tools, how to configure code checking via config file (for JSHint) and inline directives.

   **Done**: created config for JSHint with options which should be checked against the code, checking code before every commit.

2. Became acquainted with **RequireJS**.

   **Learned**: how to load modules and create structured code using this tool.

   **Done**: created config file with paths to modules, divided code on modules which represent classes.

3. Became acquainted with **Karma**.

   **Learned**: how to configure Karma, how to run tests using Karma, how to configure it to be friendly with RequireJS.

   **Done**: add config files for Karma and for RequireJS, tried to run trial test.

4. Became acquainted with **Jasmine**.

   **Learned**: how to write unit tests using Jasmine test framework.

   **Done**: developed unit tests for existing code, developing the game using TDD (Test-Driven Development) method.

5. Became acquainted with **Gulp**.

   **Learned**: how to create tasks with Gulp.

   **Done**: added build tasks for the project.

6. Became acquainted with **npm** package manager.

   **Learned**: how to install/uninstall packages and control package version.

   **Done**: installed all needed tools via npm, configured installation with package.json.

## Resources

1.  "Javascript. The Definitive Guide, 6th edition" (David Flanagan)
2.  "Learning JavaScript Design Patterns" (Addy Osmani)
3.  "Pro Git" (Scott Chacon, https://git-scm.com/book/en/v2)
4.  http://phaser.io/ (examples and documentation for Phaser game library)
5.  https://www.smashingmagazine.com/2014/06/building-with-gulp/ (good article about Gulp)
6.  http://requirejs.org/ (RequireJS documentation)
7.  http://jasmine.github.io/2.0/introduction.html (Jasmine documentation)
8.  https://karma-runner.github.io/0.13/index.html (Karma documentation)
9.  http://jshint.com/docs/ (JSHint documentation)
10. http://www.jslint.com/help.html (JSLint documentation)
11. https://docs.npmjs.com/ (npm documentation)