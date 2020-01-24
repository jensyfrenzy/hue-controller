# HueController

This is a simple Angular application to control lights in the Philips Hue system.  To get started, make sure to have the latest versions of npm and node.js installed. Once checked out, run `npm install` in the project's root directory.  In order to connect to your Hue hub, you will need the IP address of the hub and a generated token from the hub (for information on how to retrieve this, please read the Philips Hue API documentation). Once you have both of those items, you will need to set them in the `ipAddress` and `token` properties in `src/app/hue-hub/hue-hub.service.ts` file.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
