# Documentation

## What are we doing?

As part of the UK Home Office CTO innovation day, a team of engineers decided to run a workshop for ***docs as code***.  

Taking 3 different approaches, we wanted to see how easily/difficult it was to setup a repository of markdown and create a public accessible site.

The idea was to see what was possible for documentation across the Home Office.

## What is being used

- [GOVUK front end libary](https://frontend.design-system.service.gov.uk/)
- [Eleventy](https://www.11ty.dev/) to merge markdown to a static site.
- [Nunjucks](https://mozilla.github.io/nunjucks/) for the templating language

## Build the static files

Download and install the dependencies

```
npm install
```

Then run gulp tasks and Eleventy to create the static site in the folder _site. 

```
npm build
```

The gulp tasks:
- compiles the includes directory scss files to css and puts it in the assets folder
- Copies the assets from GOVUK
- Minifies GOVUK js and copes to assets
- Compiles GOVUK scss to assets
- Eleventy merges markdown from root, with the template in includes and copies it to _site.

> N.B. The Eleventy config js tells Eleventy to pass through the assests folder handled in the gulp tasks to the final static _site folder.

## Preview your changes locally

To run the site locally you will need to mount the final static _site folder to a http server.

A good very light weight one to use is http-server:

```
npm install -g http-server
```

Navigate to a terminal/cmd prompt to the _site directory and run: 

```
http-server -p 8080
```

The site will be available on localhost:8080 from your browser.

## Making changes

To add new content you will need to create 2 files.

1. A new markdown file *.md currently stored in the root folder
2. A Nunucks layout file *.njk stored in /includes

Information on creating Nunjucks and Eleventy layout files can be found here:

[11ty Layouts](https://www.11ty.dev/docs/layouts/)  
[Nunjucks templates](https://mozilla.github.io/nunjucks/templating.html)



## Licence

Unless stated otherwise, the codebase is released under the MIT License. This covers both the codebase and any sample code in the documentation.

The documentation is © Crown copyright and available under the terms of the Open Government 3.0 licence.
