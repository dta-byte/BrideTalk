import Parse from "parse";

// Parse initialization configuration 
const PARSE_APPLICATION_ID = 'CjaXK1cK9RHctfrx5TstNTyXuUniIZ94YXnv3sKb';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = '7J6sRaT1cZzsspBkFB91RfGCwwcSFxxb6eXIovzq';
Parse.serverURL = PARSE_HOST_URL;

export const initializeParse = () => {
	Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);

	Parse.serverURL = PARSE_HOST_URL;
    console.log("SERVER URL IS RUNNING AT " + PARSE_HOST_URL )
}

