# Nodeness

A Node JS hobby project to create an application that plays audio from audio files or generated TTS on my Raspberry Pi 4 speaker.

> This document will be replaced every time new changes are made. Previous copy of this document can be found in misc/changelogs

Below are the list of contents covered in the project.

- [Nodeness](#nodeness)
  - [Terms Definition](#terms-definition)
  - [Planned Features](#planned-features)
  - [Progress Tracker](#progress-tracker)
  - [Assumptions](#assumptions)
  - [Changelogs](#changelogs)
  - [Project TODOs](#project-todos)
  - [Documentation TODOs](#documentation-todos)
  - [References](#references)

## Terms Definition

Updated: 11/06/2021

| Term  |  Definition |
|---|---|
| Nodeness | The name of the project/application  |

## Planned Features

- Technical (Updated: 11/06/2021)
  - Not available at the moment

- UI (Updated: 11/06/2021)
  - Not available at the moment

## Progress Tracker

Updated: 12/06/2021

- Play and stop Tanjiro no Uta (100%)

## Assumptions

Updated: 11/06/2021

- Not available at the moment

## Changelogs

Updated: 12/06/2021

- Documentation
  - Not available at the moment
- Project File
  - Experimented with audio player through terminal
  - Played and stopped Tanjiro no Uta through site
  - Adopted Pug JS as view engine
  - Passed variables into HTML index and player page

## Project TODOs

Updated: 12/06/2021

- Try using child_process to spawn new process everytime an endpoint is called
- Design a better HTML with CSS website
- Create an upload function that plays uploaded audio
- Create a TTS audio player using gTTS python library
- Create a function to play audio based on keyword from query \- eliminate the need for multiple JS files to play audio
- Create an on.('exit') callback for the player to redirect use back to index

## Documentation TODOs

Updated: 11/06/2021

- Not available at the moment

## References

Updated: 12/06/2021

- [Kill an ongoing bash script](https://unix.stackexchange.com/questions/174028/killing-a-shell-script-running-in-background)
- [Node JS Child Process](https://www.freecodecamp.org/news/node-js-child-processes-everything-you-need-to-know-e69498fe970a/)
- [Get Process ID within shell exec](https://stackoverflow.com/questions/31570240/nodejs-get-process-id-from-within-shell-script-exec)
- [Splitting strings into array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [Remove require() module after use](https://stackoverflow.com/questions/15666144/how-to-remove-module-after-require-in-node-js)
- [gTTS](https://pypi.org/project/gTTS/)
- [Using pug as view engine to pass variable](https://stackoverflow.com/questions/37991995/passing-a-variable-from-node-js-to-html)
- [Pug ordered and unordered list](https://nodejsera.com/library/pug/pug-lists.html)
- [Pug \<a> tag](https://pugjs.org/language/attributes.html)
- [Pug view link as list troubleshoot](https://github.com/pugjs/pug/issues/309)
