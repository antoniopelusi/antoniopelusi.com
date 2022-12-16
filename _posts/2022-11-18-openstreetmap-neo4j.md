---
title: openstreetmap-neo4j
author: antoniopelusi
date: 2022-11-18 23:29:00 +0800
categories: [University projects]
tags: [<span style="color:SteelBlue">●</span> python]
render_with_liquid: false
---

> this project was developed for an university exam.
{: .prompt-info }

 App that implement different graph operation on Neo4j database that contain Open Street Map nodes. 
 
## Installation
- [Neo4j Desktop](https://neo4j.com/download/)
- [Python](https://www.python.org/downloads/)
- Py2neo: ```pip install py2neo```
- Neo4j APOC library (install from Neo4j Desktop)
- OpenStreetMap dataset available as sample project in Neo4j Desktop

## Run
Work on all Operative Systems

- Start Neo4j Desktop
- Move to the /openstreetmap-neo4j directory
- Run: ```python3 openstreetmap-neo4j.py```


## Commands
```0 Exit```

```1 Add a new Point Of Interest```

```2 Remove an existing Point Of Interest```

```3 Add a new Route```

```4 Remove an existing Route```

```5 Search for Points Of Interest near a place```

```6 Search and locate a Point Of Interest by name```

```7 Filter POIs by type```

```8 Find the shortest path between two points of interest```

```9 List all available Routes from a Point Of Interest```
