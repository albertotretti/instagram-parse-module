instagram-parse-module
======================

A Parse cloud module for the Instagram API.

To use this module you need to register as developer on Instagram and obtain a client_id here: http://instagram.com/developer/. The site contains the API documentation and other important information, such as usage terms, API throttling, and how to authenticate users.

Installation
------------

Simply copy the module (e.g. `instagram-v1-1.0.js`) into your Cloud Code Directory by placing it in the `cloud` directory.

To use the module in your Cloud Code functions, start by requiring it and initializing it with your credentials:

```
var ig = require('cloud/instagram-v1-1.0.js');
ig.initialize('YOUR_CLIENT_ID');
```

Access Token
------------

Some methods require an access token to be passed as parameter.
To generate the access token you can refer to the documentation here: http://instagram.com/developer/authentication/.
Once the user has authenticated your app and you have obtained the token, you can either pass it as a parameter to each call, or you can set it as a global variable.

```
ig.setAccessToken('ACCESS_TOKEN');
```

Example
-------

The Instagram Cloud Module uses (and requires use of) JavaScript Promises.

```
// This example is inside of a Cloud Function:
ig.searchUser({
  q: 'jack',
  count: '3'
}).then(function(httpResponse) {
  response.success(httpResponse.data);
},
function(error) {
  response.error(error);
});
```

Methods
-------

This is the list of methods available in the module and their correspondent Instagram API endpoint.
You can find examples of cloud code calling these functions in the main.js file.

<table>
    <tr>
        <td><b>Cloud module function<b></td>
        <td><b>Instagram endpoint<b></td>
        <td><b>Notes<b></td>
    </tr>
    <tr>
        <td>searchUser(params, options)</td>
        <td>/users/search</td>
        <td></td>
    </tr>
    <tr>
        <td>searchTag(params, options)</td>
        <td>/tags/search</td>
        <td></td>
    </tr>
    <tr>
        <td>searchLocation(params, options)</td>
        <td>/locations/search</td>
        <td></td>
    </tr>
    <tr>
        <td>getUser(userID, params, options)</td>
        <td>/users/USER_ID</td>
        <td></td>
    </tr>
    <tr>
        <td>getTag(tagName, params, options)</td>
        <td>/tags/TAG_NAME</td>
        <td></td>
    </tr>
    <tr>
        <td>getLocation(locationID, params, options)</td>
        <td>/locations/LOCATION_ID</td>
        <td></td>
    </tr>
    <tr>
        <td>getPopularMedia(params, options)</td>
        <td>/media/popular</td>
        <td></td>
    </tr>
    <tr>
        <td>getRecentMediaByUser(userID, params, options)</td>
        <td>/users/USER_ID/media/recent</td>
        <td>Requires an access_token</td>
    </tr>
    <tr>
        <td>getRecentMediaByTag(tagName, params, options)</td>
        <td>/tags/TAG_NAME/media/recent/</td>
        <td></td>
    </tr>
    <tr>
        <td>getRecentMediaByLocation(locationID, params, options)</td>
        <td>/locations/LOCATION_ID/media/recent</td>
        <td></td>
    </tr>
    <tr>
        <td>getSelfFeed(params, options)</td>
        <td>/users/self/feed</td>
        <td>Requires an access_token</td>
    </tr>
    <tr>
        <td>getSelfLikedMedia(params, options)</td>
        <td>/users/self/media/liked</td>
        <td>Requires an access_token</td>
    </tr>
    <tr>
        <td>getNextPage(nextUrl, options)</td>
        <td></td>
        <td>Use this method for pagination.</td>
    </tr>
</table>
