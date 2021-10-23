# HMDA-Hero

If anything needs a hero, it's HMDA!

## To-do Wishlist

- The CFPB publishes a number of different APIs, see https://cfpb.github.io/hmda-platform/#hmda-api-documentation. Integrating these APIs has alway been a goal of this project and some work has been accomplished to that end but there is still much that needs to be done. Ideally, a user should get as close to real-time feedback on quality and validity errors as possible whether that be adding a loan record, editing a record, importing, or exporting a LAR file.

- Batch updater. The ability to batch update key data points in the LAR.

- Import should also check for duplicates.

- Import file validation v2

## Getting started

You must have node.js installed. We'd recommend the latest stable version.

### Bootstrap 4

Really? Why? Bootstrap 5 is out now and even then... This is all true. However, Excel add-ins have some limitations. Namely, Excel Desktop only supports certain browser contexts. Bootstrap becomes a seemingly good candidate for this. Also, as you'll read further below, Svelte works okay with Bootstrap 4 out of the box. There are some conflicts such as `$` but in general, Svelte and Bootstrap 4 can peacfully co-exists with one another fairly well. That said, Bootstrap 4 can happily go by the wayside in the future as long as Svelte stays. Of course, if you are forking this and doing your own thing, feel free to take things in any direction you feel.

### Running the project

First things first:

`npm install` or `npm i`

For local development, you'll need to generate CA certificates to get https on localhost. If you do not run an HTTPS server locally, Excel add-ins may not function properly.

`npm run certs`

Once the command completes, the console should log the file path to the Certificate and Key and you will need to:

1. Copy the paths
2. Create a .env in the root of the project
3. Setup as follows:

`KEYPATH=/path/to/your/key`
`CERTPATH=/path/to/your/cert`

**note- your path will likely be outside the project directory**

4. Save the file

You should now be able to run the project in development mode with:

`npm run dev`

Open up [localhost:443](https://localhost:443) and start clicking around. This is the HMDA Hero application outside an Excel document.

Consult [sapper.svelte.dev](https://sapper.svelte.dev) for help with Svelte/Sapper. Svelte is similar to React, Vue, and Angular. Sapper is the server library for Svelte. There is also a Svelte/Sapper Overview section further below that discusses this more.

Svelte is awesome, refreshing, and one of the main motivations for this project. At present, SvelteKit is gaining some traction but may not yet be suitable for this project which is why Sapper is being used. If at some point in the future there is a chance to refactor the project to use SvelteKit, its likely this project will be migrated.

### Side-Load Excel Add-in to Run on localhost

Once the project is running at localhost, you can side-load the Excel add-in and instantiate it for local development.

Refer to https://docs.microsoft.com/en-us/office/dev/add-ins/testing/create-a-network-shared-folder-catalog-for-task-pane-and-content-add-ins for general instructions on sideloading the project locally to run in a local Excel file as an add-in. The folder you want to share locally is ./HMDA-HERO/Manifests/localhost

If you get an error upon loading the add-in a local Excel file, refer to https://docs.microsoft.com/en-us/office/troubleshoot/office-suite-issues/cannot-open-add-in-from-localhost

### Side-Load Excel Add-in for Web

Refer to https://docs.microsoft.com/en-us/office/dev/add-ins/testing/sideload-office-add-ins-for-testing

The folder you want to share locally is ./HMDA-HERO/Manifests/localhost

### Svelte/Sapper overview

The [src](src) directory contains the entry points for your app — `client.js`, `server.js` and (optionally) a `service-worker.js` — along with a `template.html` file and a `routes` directory.

This routes directory is the heart of the app. Each .svelete file here is an accessible route, e.g. /src/routes/about.svelte is the About page.

**Pages** are Svelte components written in `.svelte` files. When a user first visits the application, they will be served a server-rendered version of the route in question, plus some JavaScript that 'hydrates' the page and initialises a client-side router. From that point forward, navigating to other pages is handled entirely on the client for a fast, app-like feel. (Sapper will preload and cache the code for these subsequent pages, so that navigation is instantaneous.)

There are three simple rules for naming the files that define your routes:

- A file called `src/routes/about.svelte` corresponds to the `/about` route. A file called `src/routes/blog/[slug].svelte` corresponds to the `/blog/:slug` route, in which case `params.slug` is available to the route
- The file `src/routes/index.svelte` (or `src/routes/index.js`) corresponds to the root of your app. `src/routes/about/index.svelte` is treated the same as `src/routes/about.svelte`.
- Files and directories with a leading underscore do _not_ create routes. This allows you to colocate helper modules and components with the routes that depend on them — for example you could have a file called `src/routes/_helpers/datetime.js` and it would _not_ create a `/_helpers/datetime` route

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
