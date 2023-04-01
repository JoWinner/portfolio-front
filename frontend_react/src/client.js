//=======Connecting the site/App with Sanity CMS/Client=====
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

//=======For fetching real data from the Sanity dashboard=====
export const client = sanityClient({

  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,


  token: process.env.REACT_APP_SANITY_TOKEN,
});

//=======Calling and Parsing Client=====
const builder = imageUrlBuilder(client);

//=======For Working with images using Sanity====
export const urlFor = (source) => builder.image(source);
