# Fullon youth camp website
[fullon.stphils.org.au](http://fullon.stphils.org.au)

## Controlling the site

The website is controlled by two files:

1. `details.md`
2. `config.json`

### `details.md`
This file controls the **content** for the site. 

It is written in a format known as [markdown](https://guides.github.com/features/mastering-markdown/). It is a human readable format in which you can both write content and describe its structure (headings, lists, italics and so on). 

Here are some guides to using **markdown**:

- https://blog.ghost.org/markdown/
- https://guides.github.com/features/mastering-markdown/
- https://daringfireball.net/projects/markdown/basics
- http://markdown-guide.readthedocs.io/en/latest/basics.html

The site supports [github flavoured markdown](https://guides.github.com/features/mastering-markdown/) which is an extension of markdown and allows some more advanced formatting options.

## `config.json`

This files controls **how the site looks and behaves**

It includes details such as:

- colours (background, text, secondary)
- fonts
- trailer url
- media urls
- social media sharing information

## Updating `details.md` or `config.json`

1. create a free account with [GitHub](http://github.com)
2. navigate to the file you want to updated
3. click the **edit** button (looks like a pencil)
4. make you changes
5. when you are finished **GitHub** will take you through the steps of creating a *pull request* to get the changes into the application. A *pull request* is simply a request to make changes.

## Deployment

Any change to `config.json` or `details.md` (or any other file) on *master* will result in the application being automatically being redeployed to production. Do not worry if you do not know what *master* means - if you follow the updating steps above you should not need to worry about it.

## Hosting details

Full on is hosted on [heroku](https://www.heroku.com/). The full url of the website is [https://stphils-fullon2014.herokuapp.com/](https://stphils-fullon2014.herokuapp.com/). Using a CNAME DNS entry we silently redirect the heorku url to the pretty url [fullon.stphils.org.au](http://fullon.stphils.org.au)

