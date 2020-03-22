/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
 **/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('adexperiencereport', 'v1', () => {
        /** now we can use gapi.client.adexperiencereport */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** Test scope for access to the Zoo service */
            'https://www.googleapis.com/auth/xapi.zoo',
        ];
        const immediate = true;
        gapi.auth.authorize({ client_id, scope, immediate }, (authResult) => {
            if (authResult && !authResult.error) {
                /** handle succesfull authorization */
                run();
            } else {
                /** handle authorization error */
            }
        });
        run();
    });

    async function run() {
        /** Gets a summary of the ad experience rating of a site. */
        await gapi.client.sites.get({
            name: 'name',
        });
        /** Lists sites with Ad Experience Report statuses of "Failing" or "Warning". */
        await gapi.client.violatingSites.list({});
    }
});
