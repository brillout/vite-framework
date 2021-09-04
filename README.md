Example of a framework built on top of Vite + vite-plugin-ssr.

Framework code: [/vite-framework/](/vite-framework/).

Project example using the framework: [/user-code/](/user-code/).

The renderer is implemented by the framework:
 - [/vite-framework/_default.page.client.tsx](/vite-framework/_default.page.client.tsx)
 - [/vite-framework/_default.page.server.tsx](/vite-framework/_default.page.server.tsx)

The user can then simply use the framework's renderer:
 - [/user-code/renderer/_default.page.client.tsx](/user-code/renderer/_default.page.client.tsx)
 - [/user-code/renderer/_default.page.server.tsx](/user-code/renderer/_default.page.server.tsx)

The framework offers settings to allow the user to define thingsl like the page wrapper, the head meta tags, etc.:
 - [/user-code/renderer/set.ts](/user-code/renderer/set.ts)

Also note that the framework implements a [`<Link>`](/vite-framework/Link.tsx) component that automatically sets the `is-active` CSS class.

The same thing could be done for the server code.

To run the example project:

```bash
git clone git@github.com:brillout/vite-framework
cd vite-framework/
yarn
yarn dev
```
