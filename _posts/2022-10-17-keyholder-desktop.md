---
title: KeyHolder desktop
author: antoniopelusi
date: 2022-10-17 14:00:00 +0800
categories: [Personal projects]
tags: [<span style="color:orange">●</span> java, <span style="color:darkSlateBlue">●</span> CSS]
render_with_liquid: false
---

[![](https://img.shields.io/badge/Version-1.2-white)]()
[![](https://img.shields.io/badge/Open_Source-GPL--3.0-informational)]()

Store your passwords in an offline encrypted file! 🔒
<br>

Need a JDK to run, download it [here](https://www.oracle.com/java/technologies/downloads/)!

- Written in [Java 11](https://dev.java/) ♨️
- [JavaFX](https://openjfx.io/) GUI with [JavaFX-Dark-Theme](https://github.com/antoniopelusi/JavaFX-Dark-Theme) 🌘
- Source code available [here](https://github.com/antoniopelusi/KeyHolder-desktop) 📦
<br>

## Download 📂
Check the [GitHub releases](https://github.com/antoniopelusi/KeyHolder-desktop/releases) section to download the executable file available in the following formats:
- `.exe`: Windows
- `.deb`: Linux (Debian Package Manager)
- `.rpm`: Linux (Red Hat Package Manager)
- `.appimage`: Linux
- `.jar`: Windows, Linux and MacOS

Feel free to compile it yourself and edit the source code:
- Download the source code [here](https://github.com/antoniopelusi/KeyHolder-desktop)
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
<br>

## Specification ⚙️
- Use *AES/ECB/PKCS5PADDING* encryption
- *SHA-256* hash to normalize password size
- *CSV* database format
- GUI developed with *JavaFX Scene Builder*
- *Maven* support for dependencies and automation
<br>

## Sreenshots 🖼️
Login view:

![](https://raw.githubusercontent.com/antoniopelusi/KeyHolder-desktop/main/login.png)

Database view:

![](https://raw.githubusercontent.com/antoniopelusi/KeyHolder-desktop/main/database.png)
<br>

## Flow diagram 🧭
![](https://raw.githubusercontent.com/antoniopelusi/KeyHolder-desktop/main/flow.png)
