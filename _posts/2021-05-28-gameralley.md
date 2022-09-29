---
title: <span style="color:OrangeRed">●</span> GamerAlley
author: antoniopelusi
date: 2021-05-28 14:10:00 +0800
categories: [Personal projects]
tags: [<span style="color:blue">●</span> python, <span style="color:OrangeRed">●</span> HTML]
render_with_liquid: false
---

A videogames-based social network

Source code available [**here**](https://github.com/antoniopelusi/GamerAlley)

![](https://img.shields.io/badge/Open_Source-GPL--3.0-darkgreen)

---
#### Full documentation about functionality and screenshots available on the file [`Gameralley.pdf`](https://github.com/antoniopelusi/GamerAlley/blob/master/GamerAlley.pdf) in this repository

---
### Features:
- **Profile**
    - Create account
    - Login
    - Logout
    - Update info
    

- **Post**
    - Create post
    - Edit post
    - Delete post
    - Upvote
    - Add image
    - Add genre tag
    - Write comments
    

- **Genre tags**
    - Search for a videogames genre or click on the tag in a post
    

- **Relationship**
    - Send friend request
    - Accept friend request
    - Remove friend

---
### Additional info
- Back-end framework: [`Django`](https://www.djangoproject.com/)
- Front-end framework: [`Semantic UI`](https://semantic-ui.com)
- Used libraries: [`django-allauth`](https://github.com/pennersr/django-allauth), [`pillow`](https://pypi.org/project/Pillow/)

---
### Installation
- Clone this repository with `git clone https://github.com/antoniopelusi/GamerAlley.git`
- Move to the `GamerAlley/GamerAlley` directory inside the project
- Create the virtual environment and install all the libraries with `pipenv install django pillow django-allauth`
- To activate this project's virtualenv run `pipenv shell`
- Set up the database with `python manage.py makemigrations` and `python manage.py migrate`
(_there is already a database with some profile, posts, comments and relationships to test the website_)
- Run the server with `python manage.py runserver`

---
### Testing
In the `GamerAlley/GamerAlley` folder

Test the **profiles** app:
`python manage.py test profiles/tests`

Test the **posts** app:
`python manage.py test posts/tests`

---
### Login in the website (_Preloaded accounts on the database, only for testing purposes_):
_email_ | _password_ to login in GamerAlley

**Admin account:** (_can enter in the Django_ `admin/` _page_)
- antoniopelusi@email.com | **passwordantonio**


**User accounts:** (_only for GamerAlley login_)
- marcobianchi@email.com | **passwordmarco**
- annabianchi@email.com | **passwordanna**
- valentinorossi@email.com | **passwordvale**
- giorgiobruni@email.com | **passwordgiorgio**
- michelagialli@email.com | **passwordmichela**
