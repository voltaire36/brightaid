## 1. Getting Started

Project's source files are placed in ./src/ directory. 

* ./src/assets - default static files (eg. image placeholders). You should replace them with your own files.
* ./src/scss/ - Sass sources used to build Bootstrap theme. Variables used in Theme Customizer are located in custom-variables.scss file.

All your pages (templates) are stored in separated .pug or .html files (depends on your export preferences)
* ./src/pug/*.pug 
* ./src/html/*.html 

## 2. Installation

```
# Install dependencies
npm install 

# Run dev server with live preview (Browsersync)
npm run watch

# Or make production build
npm run build
```

We use placeholders from https://unsplash.com/
