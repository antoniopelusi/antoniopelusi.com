---
title: KeyHolder mobile
author: antoniopelusi
date: 2022-10-18 14:00:00 +0800
categories: [Personal projects]
tags: [<span style="color:orange">●</span> java, <span style="color:darkSlateBlue">●</span> CSS]
render_with_liquid: false
---

> In developement.
{: .prompt-warning }

[![](https://img.shields.io/badge/Version-1.1-white)]()
[![](https://img.shields.io/badge/Open_Source-GPL--3.0-informational)]()

Store your passwords in an offline encrypted file!
<br>

- Written in [Java 11](https://dev.java/) ♨️
- [JavaFX](https://openjfx.io/) GUI with [JavaFX-Dark-Theme](https://github.com/antoniopelusi/JavaFX-Dark-Theme) 🌘
<br>

## Download 📂
Check the [GitHub releases](https://github.com/antoniopelusi/KeyHolder-desktop/releases) section to download the executable file available in the following formats:
- `.apk`: Android
- desktop version available [here](https://www.antoniopelusi.com/posts/keyholder-desktop)!

Feel free to compile it yourself and edit the source code:
- Download the source code
- To compile and run:
```
mvn clean javafx:run
```
- To create the jar bundle:
```
mvn clean compile package
```
<br>

## Features ✨
- Create an offline encrypted database to securely store your accounts data
- Choose a Master Password to encrypt the entire database
- Easily add, edit and remove the accounts
- Several keyboard shortcuts available, check the in app *help* section to find out more!
<br></br>

## Specification ⚙️
- Use *AES/ECB/PKCS5PADDING* encryption
- *SHA-1* hash to normalize password size
- *CSV* database format
- GUI developed with *JavaFX Scene Builder*
- *Maven* support for dependencies and automation
<br></br>

## Sreenshots 🖼️
Login view:

![](login.png)

Database view:

![](database.png)

## Flow diagram 🧭
![](https://raw.githubusercontent.com/antoniopelusi/KeyHolder-mobile/main/flow.png)
