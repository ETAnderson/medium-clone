import {
    createImageUrlBuilder,
    createCurrentUserHook,
    createClient,
} from "next-sanity";

export const config = {
    /* sanity.json has proj id and dataset*/
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2021-03-25",

    useCdn: process.env.NODE_ENV === "production",

};

/* Client for fetching data in the getProps page functions */
export const sanityClient = createClient(config);

/* Helper function for generating image URLS with asset reference from sanity docs */
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

/* Helper function for using the current logged-in user account */
export const useCurrentUser = createCurrentUserHook(config);
