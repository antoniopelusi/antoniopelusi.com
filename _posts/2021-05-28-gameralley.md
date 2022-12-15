---
title: GamerAlley
author: antoniopelusi
date: 2021-05-28 14:10:00 +0800
categories: [University projects]
tags: [<span style="color:OrangeRed">●</span> HTML, <span style="color:SteelBlue">●</span> python, <span style="color:#ffff33">●</span> javascript, <span style="color:darkSlateBlue">●</span> CSS, <span style="color:MediumSeaGreen">●</span> django]
render_with_liquid: false
---

> this project was developed for an university exam.
{: .prompt-info }

A videogames-based social network

Source code available [**here**](https://github.com/antoniopelusi/GamerAlley)

---

## Documentation and screenshots
[`Gameralley.pdf`](https://github.com/antoniopelusi/GamerAlley/blob/master/GamerAlley.pdf)

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
