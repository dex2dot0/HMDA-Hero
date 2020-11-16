# HMDA-Hero

If anything needs a hero, it's HMDA!

## To-do

- Setup a manifest.xml file for use with Netlify Dev and their live server/hot reload so changes can be tested more realtime rather than waiting on Netlify builds
and racking up build time. As of 1/31/20 they are having some issues so it is not viable at this time. 

-Batch updater.

-Quality and Validity errors check.

-Import should check for duplicates.
  -Also much more that could be done to validate the import file

## Getting started


### Running the project

However you get the code, you can install dependencies and run the project in development mode with:

```bash
cd my-app
npm install # or yarn
npm run dev
```

Note that you must have node.js installed. 

Open up [localhost:3000](http://localhost:3000) and start clicking around.

Consult [sapper.svelte.dev](https://sapper.svelte.dev) for help getting started.


## Structure

Sapper expects to find two directories in the root of your project —  `src` and `static`.

### Side-Load Excel Add-in to Run on localhost
Once the project is running at localhost, you can side-load it and instantiate the add-in for local development. 

Refer to https://docs.microsoft.com/en-us/office/dev/add-ins/testing/create-a-network-shared-folder-catalog-for-task-pane-and-content-add-ins for general instructions on sideloading the project locally to run in a local Excel file as an add-in. The folder you want to share locally is ./HMDA-HERO/Manifests/localhost

If you get an error upon loading the add-in a local Excel file, refer to https://docs.microsoft.com/en-us/office/troubleshoot/office-suite-issues/cannot-open-add-in-from-localhost

### Side-Load Excel Add-in for Web
Refer to https://docs.microsoft.com/en-us/office/dev/add-ins/testing/sideload-office-add-ins-for-testing

The folder you want to share locally is ./HMDA-HERO/Manifests/localhost

### Features

### Scripts

### Svelte/Sapper overview

The [src](src) directory contains the entry points for your app — `client.js`, `server.js` and (optionally) a `service-worker.js` — along with a `template.html` file and a `routes` directory.

This routes directory is the heart of the app. Each .svelete file here is an accessible route, e.g. /src/routes/about.svelte is the About page. 

**Pages** are Svelte components written in `.svelte` files. When a user first visits the application, they will be served a server-rendered version of the route in question, plus some JavaScript that 'hydrates' the page and initialises a client-side router. From that point forward, navigating to other pages is handled entirely on the client for a fast, app-like feel. (Sapper will preload and cache the code for these subsequent pages, so that navigation is instantaneous.)

There are three simple rules for naming the files that define your routes:

* A file called `src/routes/about.svelte` corresponds to the `/about` route. A file called `src/routes/blog/[slug].svelte` corresponds to the `/blog/:slug` route, in which case `params.slug` is available to the route
* The file `src/routes/index.svelte` (or `src/routes/index.js`) corresponds to the root of your app. `src/routes/about/index.svelte` is treated the same as `src/routes/about.svelte`.
* Files and directories with a leading underscore do *not* create routes. This allows you to colocate helper modules and components with the routes that depend on them — for example you could have a file called `src/routes/_helpers/datetime.js` and it would *not* create a `/_helpers/datetime` route


#### static

The [static](static) directory contains any static assets that should be available. These are served using [sirv](https://github.com/lukeed/sirv).

In your [service-worker.js](src/service-worker.js) file, you can import these as `files` from the generated manifest...

```js
import { files } from '@sapper/service-worker';
```

...so that you can cache them (though you can choose not to, for example if you don't want to cache very large files).


#### Production mode and deployment

To start a production version of your app, run `npm run build && npm start`. This will disable live reloading, and activate the appropriate bundler plugins.

You can deploy your application to any environment that supports Node 8 or above. As an example, to deploy to [Now](https://zeit.co/now), run these commands:

```bash
npm install -g now
now
```

