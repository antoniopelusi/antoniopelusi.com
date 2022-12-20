---
title: JavaFX Dark Theme
author: antoniopelusi
date: 2022-10-13 02:12:00 +0800
categories: [Personal projects]
tags: [<span style="color:darkSlateBlue">●</span> CSS]
render_with_liquid: false
---

A complete CSS stylesheet to set a dark theme in your JavaFX UI. 🌘

Built on top of the default JavaFX theme (Modena)

Download stylesheet [**here**](https://github.com/antoniopelusi/JavaFX-Dark-Theme)!

<br>

## How to use
- **Load via FXML:**


  Add `stylesheets="@style.css"` to the top-level FXML tag.
  
<br>

- **Load via Java:**
  Add the following code:
  ```
  File style = new File("relative-path/style.css");
  scene.getStylesheets().add(style.toURI().toURL().toExternalForm());
  ```
  
## CSS preview example
See this theme in action [here](https://github.com/antoniopelusi/KeyHolder-desktop)!

Download stylesheet [**here**](https://github.com/antoniopelusi/JavaFX-Dark-Theme)

<br>

## List of JavaFX recolored elements
- Label
- Pane
- GridPane
- TextField
- ComboBox
- ListCell
- ListView
- Button
- CheckBox
- TextArea
- ScrollBar
- Menu
- ProgressBar
- Slider
- TreeView
- Tab
- TitledPane
- TableView
- Tooltip
