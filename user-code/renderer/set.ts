import { set } from "vite-framework";
import { PageWrapper } from "./PageWrapper";
import logoUrl from './logo.svg'

set({
  PageWrapper,
  html: {
    title: "An example of using the framework",
    head: `
<link rel="icon" href="${logoUrl}" />
<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no" />
`
  },
});
