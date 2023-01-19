//=======Connecting the site/App with Sanity CMS/Client=====
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

//=======For fetching real data from the Sanity dashboard=====
export const client = sanityClient({
  // Can get from .env file projectId: "oob1xhtx",
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,

  // Can get from .env file token:"skNMmj0VAzNfn7iMTu26l6jyoGpbbGKQKNjji84cegA5t5r1lGip88jCO7CMIU1XRrLV5IuNkuqRspVAEDt4zJsBv51sdwZFAIPEc5FRCpIslO872Z7CLA3VsIzm6630aLkgGch9qlWGtC4wQuF4feL4EsEdb6Zhh8gLuxiTz0iN45YY1dMV",

  token: process.env.REACT_APP_SANITY_TOKEN,
});

//=======Calling and Parsing Client=====
const builder = imageUrlBuilder(client);

//=======For Working with images using Sanity====
export const urlFor = (source) => builder.image(source);
