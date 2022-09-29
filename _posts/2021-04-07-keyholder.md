---
title: KeyHolder
author: antoniopelusi
date: 2021-04-07 11:12:00 +0800
categories: [Personal projects]
tags: [<span style="color:orange">●</span> java]
render_with_liquid: false
---

 Store password in an encrypted file locked with password
 
[![Download KeyHolder](https://a.fsdn.com/con/app/sf-download-button)](https://sourceforge.net/projects/keyholder/files/latest/download)

Source code available [**here**](https://github.com/antoniopelusi/KeyHolder)

## Specification
[![Download KeyHolder](https://img.shields.io/sourceforge/dt/keyholder.svg)](https://sourceforge.net/projects/keyholder/files/latest/download) [![Download File Splitter](https://img.shields.io/badge/Version-1.2-yellow)](https://sourceforge.net/projects/tool-file-splitter/files/latest/download) [![Download File Splitter](https://img.shields.io/badge/Language-Java_8-orange)](https://sourceforge.net/projects/tool-file-splitter/files/latest/download) [![Download File Splitter](https://img.shields.io/badge/Open_Source-GPL--3.0-informational)](https://sourceforge.net/projects/tool-file-splitter/files/latest/download)

#### Written in Java 8 with Eclipse IDE, can be run on all the operating systems
Need Java virtual machine to start, available [**here**](https://www.java.com/en/download/)

- Create encrypted password database
- Use a Master Password to protect it
- The database will be saved in a file with .keyloader extension
- Upload the .keyholder file in KeyHolder to read, and edit the database
- Automatically encrypt database using Advanced Encryption Standard (AES)
- Hash Master Passwords with PBKDF2 standard
