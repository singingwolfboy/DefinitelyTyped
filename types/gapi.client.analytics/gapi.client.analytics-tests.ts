/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
 **/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('analytics', 'v3', () => {
        /** now we can use gapi.client.analytics */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your Google Analytics data */
            'https://www.googleapis.com/auth/analytics',
            /** Edit Google Analytics management entities */
            'https://www.googleapis.com/auth/analytics.edit',
            /** Manage Google Analytics Account users by email address */
            'https://www.googleapis.com/auth/analytics.manage.users',
            /** View Google Analytics user permissions */
            'https://www.googleapis.com/auth/analytics.manage.users.readonly',
            /** Create a new Google Analytics account along with its default property and view */
            'https://www.googleapis.com/auth/analytics.provision',
            /** View your Google Analytics data */
            'https://www.googleapis.com/auth/analytics.readonly',
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
        /** Creates an account ticket. */
        await gapi.client.provisioning.createAccountTicket({});
    }
});
