instagram-parse-module
======================

A Parse cloud module for the Instagram API.

To use this module you need to register as developer on Instagram and obtain a client_id here: http://instagram.com/developer/. The site contains the API documentation and other important information, such as usage terms, API throttling, and how to authenticate users.

To use the module in your Cloud Code functions, start by requiring it and initializing it with your credentials:

```
var ig = require('cloud/instagram-v1-1.0.js');
ig.initialize('YOUR_CLIENT_ID');
```

Access Token
------------

Some methods require an access token to be passed as parameter. To generate the access token you can refer to the documentation here: http://instagram.com/developer/authentication/. Once you have obtained the token, you can either pass it as a parameter to each call, or you can set it as a global variable.

```
ig.setAccessToken('ACCESS_TOKEN');
```

If you set a global access token and then call a method with the access_token parameter, the method will use the parameter value.

Methods
-------

This is the list of methods available in the module and their correspondent Instagram API endpoint.

<table>
    <tr>
        <td><b>Cloud module function<b></td>
        <td><b>Instagram endpoint<b></td>
    </tr>
    <tr>
        <td>searchUser(params, options)</td>
        <td>/users/search</td>
    </tr>
    <tr>
        <td>searchUser(params, options)</td>
        <td>/users/search</td>
    </tr>
    <tr>
        <td>searchUser(params, options)</td>
        <td>/users/search</td>
    </tr>
    <tr>
        <td>searchUser(params, options)</td>
        <td>/users/search</td>
    </tr>
    <tr>
        <td>searchUser(params, options)</td>
        <td>/users/search</td>
    </tr>
    <tr>
        <td>searchUser(params, options)</td>
        <td>/users/search</td>
    </tr>
    <tr>
        <td>searchUser(params, options)</td>
        <td>/users/search</td>
    </tr>
</table>


searchUser
searchTag
searchLocation
