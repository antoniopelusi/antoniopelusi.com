---
title: JavaFX Dark Theme
author: antoniopelusi
date: 2022-10-13 02:12:00 +0800
categories: [Personal projects]
tags: [<span style="color:darkSlateBlue">●</span> CSS]
render_with_liquid: false
---

# JavaFX-Dark-Theme
A complete CSS stylesheet to set a dark theme in your JavaFX UI.

Download stylesheet [**here**](https://github.com/antoniopelusi/JavaFX-Dark-Theme)!

## How to use
- **Load via FXML:**


  Add `stylesheets="@style.css"` to the top-level FXML tag.
<br></br>

- **Load via Java:**
  Add the following code:
  ```
  File style = new File("relative-path/style.css");
  scene.getStylesheets().add(style.toURI().toURL().toExternalForm());
  ```
