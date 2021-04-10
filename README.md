# _Carddy Party - Front End - Player Controller_

#### By _Nick Lindau, Ash Porter, Dani Renner, Logan Roth_

## Description

_Card Game similar to JackBox/CAH. Rules still in development. This is the front end piece of a full stack repo. See the backend here https://github.com/Lo-GR/CarddyPartyBackEnd_

------------------------------
### <u>Table of Contents</u>
* <a href="#setup-and-installation-requirements">Setup/Installation Requirements</a>
  * <a href="#cloning-with-git">Cloning with Git</a>
  * <a href="#package-installation">Package Installation</a>
* <a href="#game-rules">Game Rules</a>
  * <a href="#initialization">Initialization</a>
  * <a href="#gameplay">Gameplay</a>
  * <a href="#player-rules">Player Rules</a>
  * <a href="#judge-rules">Judge Rules</a>
  * <a href="#scoring">Scoring</a>
* <a href="#known-bugs-and-issues">Known Bugs and Issues</a>
* <a href="#support-and-contact-details">Support and Contact Details</a>
* <a href="#technologies-used">Technologies Used</a>
------------------------------

## Setup and Installation Requirements

### Cloning with Git:

* Open Git Bash, or your preferred terminal
* Navigate to your directory for Git projects (not within an existing project)
* Type the following: `git clone https://github.com/Lo-GR/CarddyPartyFrontEnd.git`

Then, open your Git Bash terminal and navigate to:

`C:<filepath the files are installed at>\CarddyPartyFrontEnd.Solution`

where "filepath the files are installed at" will be the location you saved your copy of the project at, or alternatively:  

You may navigate to the folder in the project labeled "CarddyPartyFrontEnd.Solution".  
Right-click inside the File Explorer window, and in the right-click menu, choose "Open Git Bash Here," or Shift+Right-click and choose "Open Powershell Window Here."  
This will open a Powershell/Git Bash window that is already inside the proper directory.

[Click here for tips on navigating the terminal](https://docs.microsoft.com/en-us/powershell/scripting/samples/managing-current-location?view=powershell-7.1)

### Package Installation

Navigate into the `\CarddyPartyFrontEnd.Solution\CarddyPartyFrontEnd` directory. Enter the command:  

`npm install`

This command will take a little bit of time. If it doesn't appear to have fully installed, run the command again. This shouldn't happen in most cases, but has in the past.  

Once the program has installed all required dependencies, enter the command:  

`npm run start`

This will open the game in your browser.  

---

## Game Rules

Please read these rules very carefully, as this game is still in a beta state, and if the game steps are not followed in a precise order, the game will be much more difficult to play.

---

### INITIALIZATION  
The Host will need to do a few things to get this playable for everyone else:
1. Host will need to ensure they have BOTH the Frontend and Backend servers running. FULL instructions for this process are included in both CarddyParty's backend and frontend repositories.
2. Once the host has ensured that they are running the game, they will need to open the local servers for sharing. This can be done very easily through [VSCode's Live Share](https://docs.microsoft.com/en-us/visualstudio/liveshare/use/vscode#share-a-server).  
The host will open both server ports `http://localhost:8080` and `http://localhost:5000`, and will have to share them through VSCode's Live Sharing feature. This is what gives players access to the card database, and is at the time of this writing, essential for playing the game.
3. Players will all need to be on the site. We have tested the game with both Firefox and Chrome browsers. Players can type `http://localhost:8080` into their web browser, and if they are connected properly, the web page will load. Note: the CSS may take a moment or two to load properly - please be patient, it WILL load.

---

### GAMEPLAY  
(4 PLAYERS ONLY)  
Each Player will need to immediately assign themself a Player number, 1-4. This is done through the "Change Player" button, on the left-hand side of the screen, below the large number "1". Clicking this button repeatedly will cycle through numbers 1, 2, 3, 4. Each Player should declare to all other Players which Player number they are assigned, so there are no duplicates. Once each Player has their designated number from 1 through 4, one Player is chosen to be the first Judge. Players may designate a Judge by rolling a die, flipping a coin, or by who has the next birthday. Or any other way works, too! We aren't your parents.
Play differs if you are a Player or a Judge: please note which directions you are supposed to follow!

---

### PLAYER RULES  

Starting Screen:
<img src="https://media.discordapp.net/attachments/799876599372840964/830207276152389672/01_initial_screen.png?width=1248&height=676" alt="Starting Screen" width="100%" display="block"/>

As a Player, you will want to have two windows open on your computer, one to host the cards you will create, and another to view the Judge's chosen prompt. Or, if your Judge cannot display the prompt to all Players, they may instead read the prompt out loud! In any case, this prompt will NOT display on your screen!  

Judge's Screen:
<img src="https://media.discordapp.net/attachments/799876599372840964/830208696067424256/unknown.png?width=1248&height=676" alt="Starting Screen" width="100%" display="block"/>

Once you have the prompt, you are going to create THREE response cards. Simply enter whatever your card would like to say in the box below "Answer:". Once you have settled on an answer, go ahead and click the button labeled "Submit This Answer". This will create a card containing YOUR unique answer, right on your screen!  

How to submit card answer:
<img src="https://media.discordapp.net/attachments/799876599372840964/830209193860005938/unknown.png" alt="Starting Screen" width="100%" display="block"/>

Do this two more times to create your three cards.  
You should notice that your "Submit This Answer" button will fade out and become unclickable after those three cards are created.  

Screen after all three cards are entered:
<img src="https://media.discordapp.net/attachments/799876599372840964/830207834569310258/unknown.png?width=1248&height=676" alt="Starting Screen" width="100%" display="block"/>

Now, you as a Player should note that during the card-creation round, the Judge may choose to enact a timer. This timer has a few pre-sets that the Judge may choose from - or, if the Judge is kind, they may not start the timer, instead waiting very patiently for your hilarious responses. In any case, keep an eye on the Judge's screen to see how much precious time you have remaining.  

Once the Judge dictates that enough time has passed, they will instruct you to look at their screen. The Judge will now grab a related prompt from their repertoire, and you as a Player will now begin the Shuffle! phase.  

Judge's Screen showing new prompt:
<img src="https://media.discordapp.net/attachments/799876599372840964/830209712254484540/unknown.png?width=1248&height=676" alt="Starting Screen" width="100%" display="block"/>

This Shuffle! phase is handled by pressing the "Shuffle!" button at the bottom of your screen. It gets an exclamation point because it's the most fun button, by far. Press this Shuffle! button three times, to get three cards returned to you.  
*  _Note: At the time of this writing, the Shuffle! button doesn't visually display anything. No effects, like creating the cards. However, keep a close eye on the cards you are holding, as their text will change to show the newly-shuffled cards._  

Now, in normal card games, you don't get your cards back; however due to the mysterious ways the Fates work, it is possible for you to receive your own card(s) in this Shuffle! That just means that that particular card was destined to be yours.

Newly shuffled cards:
<img src="https://media.discordapp.net/attachments/799876599372840964/830210161385013248/unknown.png?width=1248&height=676" alt="Starting Screen" width="100%" display="block"/>

In any case, once everyone has received their cards, it's time to decide which one you will use to answer the new Prompt. Once you've settled on a real winner of a card, click the "Submit Card" button at the bottom of the screen <u>ONCE</u>, sit back, relax, and wait until everyone else has chosen their cards.
*  Note: At this point in development, the only way to actually choose a card is to click on the TEXT of the card, not the card itself. Click the card text, then submit your card with the "Submit Card" button at the bottom of the screen.  

Click the text:
<img src="https://media.discordapp.net/attachments/799876599372840964/830212575329255430/unknown.png" alt="Starting Screen" width="100%" display="block"/>

Choose carefully, as once all cards are submitted (a phase that the Judge might also choose to put on a timer!) it's up to the Judge to choose the best answer, and as it is most likely a human Judge, and not a robot, this "best answer" may be influenced by opinions.

After points are awarded, the Judge role falls to the next person numerically, and the cycle continues until the end of time.

---

### JUDGE RULES
When you are a Judge... you are the ultimate controller of the game. It is up to you to handle the most important role of any game ever: getting points. But that comes later.  

As the Judge, your first step is to determine the length of time that the Players have to create their cards. Near the bottom of your screen, you'll see a timer option. Use the drop-down selector to determine the length of time the Players will have to create their cards, and once you've fetched the Prompt for the Players with the "Fetch Prompt" button, press the "Start" button to initiate the timer countdown sequence.  
*  If you so choose, you can opt out of the timer altogether, and simply allow the Players an unlimited time to Answer the Prompt. That is the sign of a very benevolent ruler-er, judge.  

Once you decide on using a timer or not, go ahead and click the "Fetch Prompt" button. This will display a prompt on your screen only, and you will either need to stream this prompt to your fellow Players, or you will want to stream your game screen so the Players can see your random prompt.  

Fetch Prompt Button Location:
<img src="https://media.discordapp.net/attachments/799876599372840964/830210825385279498/unknown.png?width=1248&height=676" alt="Starting Screen" width="100%" display="block"/>

At this time, the Players will need to begin creating their response cards. They will be creating three cards each, and though this step can operate on a timer, it's recommended for new players to give them plenty of time to come up with a prompt. It's also recommended to confirm with each Player that they've completed all three cards. As this game is in beta, there may be unintended consequences if not all Players submit all three cards.  

Once the Players have created and submitted all of their cards, you will then turn the tables on them. Press the "Fetch Related Prompt" button to display a related (but NOT identical) prompt that all the Players are required to answer.  

Fetch Related Prompt Button Location:
<img src="https://media.discordapp.net/attachments/799876599372840964/830211447878713454/unknown.png?width=1248&height=676" alt="Starting Screen" width="100%" display="block"/>

At this point, the Players will need to Shuffle! Each player will press their "Shuffle!" button three times, and they will again have three cards in front of them. If Players receive duplicate cards, or they receive all three of their own cards back, this is currently an unintended feature that may be patched out in a later version. Either way, the Players need to click Shuffle! all three times.  
Players will now need to answer the new prompt with one of the cards in front of them. If a Player is having issues choosing a card, please instruct them that at this time, the only way to select a card is to click on the text of the card, not the card itself.  

Finally, once all cards have been submitted, use the "Get Final Cards" button to see what all the Players chose. Choose your favorite, and then ask which player submitted the card.
*  Note: it is possible that a later release will be able to assign points automatically. At this time, we ask that Players and the Judge use the honor system to assign points.

Get Final Cards Button Location:
<img src="https://media.discordapp.net/attachments/799876599372840964/830211544662671400/unknown.png?width=1248&height=676" alt="Starting Screen" width="100%" display="block"/>

Click the little "+1" to give that player a point. There is no limit on how many points a Judge may give; however there is currently no system to remove points.

---

### SCORING

Scoreboard:  
<img src="https://media.discordapp.net/attachments/799876599372840964/830213370057719808/unknown.png" alt="Starting Screen" width="30%" display="block"/>

The Judge screen has a counter for points. Clicking the button adds a point. You can house rule any point system you would like, but may we suggest:
*  The Player who submits the Card gets 2 points, and the Player who originally wrote the Card gets one point for creativity
*  Each Player gets 3 points instead of 1 when they win, just because bigger is better.
*  ONLY the Player who originally wrote the card, NOT the Player who submitted, gets a point. This encourages being extra funny, but also may encourage Players to choose their own answer, and not necessarily the best answer. Personal opinion, though.)

Finally, once the scoring is completed, you will surrender your position as Judge and exercise the option to return to a Player. You can click the "Back to Player" button and become a Player. Your memory of your Player Number may have been erased in the De-Judgening process, so you may have to cycle your number back to what it used to be.

From here, the round restarts.

---

## Known Bugs and Issues

This project is a proof of concept project. There will be multiple bugs and expected issues. A portfolio version is in development.

*  It is possible for every player to receive a copy of the same card, due to how the backend logic is currently structured.
*  It is possible for a player to randomly receive none, some, or all of their own cards back.
*  As the player number is currently client-side only, once the players reset their games for the next round, all player numbers will almost always be reset to `1`. Please keep this in mind as best as possible.
*  As the judge panel is currently client-side only, if players do cycle who the judge is, then the points will be reset.

## Support and contact details

_Ash Porter - Discord: @KirbyPaint#0751_

_Logan Roth - diamondintheroth@gmail.com - [GitHub(Lo-GR)](https://github.com/Lo-GR)_

_Dani Renner - danijrenner@gmail.com - [GitHub(dani-renner)](https://github.com/dani-renner)_

## Technologies Used

*  babel/core: 7.6.4
*  babel/plugin-transform-modules-commonjs: 7.6.0
*  clean-webpack-plugin: 3.0.0
*  css-loader: 3.2.0
*  dotenv-webpack: 6.0.0
*  eslint: 6.3.0
*  eslint-loader: 3.0.0
*  file-loader: 1.1.6
*  html-loader: 0.5.5
*  html-webpack-plugin: 3.2.0
*  jest: 24.9.0
*  style-loader: 1.0.0
*  webpack: 4.39.3
*  webpack-cli: 3.3.8
*  webpack-dev-server: 3.8.0
*  bootstrap: 4.6.0
*  jquery: 3.5.1
*  popper.js: 1.16.1

### License Information

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Copyright (c) 2021, Logan Roth, Ash Porter, Dani Renner, Nick Lindau.

Please contact Contributor for further use information or if you would like to make a contribution.
