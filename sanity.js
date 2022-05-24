// connection with the client
import {
    //createImageUrlBuilder,
    createCurrentUserHook,
    createClient,
    //sanityClient
} from 'next-sanity';

import createImageUrlBuilder from "@sanity/image-url"

export const config = {
    /** Find your project id and dataset in janity.json */
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: '2021-03-25',
    /** Set useCdn to false if your application require the freshest possible */
    useCdn: process.env.NODE_ENV === 'production',
}

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

/** Set up a helper function foe generating Image URL with only the asset reference data in your documents */
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// helper function for using the current logged in user account
export const useCurrentUser =  createCurrentUserHook(config);