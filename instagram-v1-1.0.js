/**
 * Instagram Cloud Module
 * @name Instagram
 *
 * Cloud Module for using Instagram API.
 *
 * To use this Cloud Module in Cloud Code, start by requiring
 * the <code>mailgun</code> module and initializing it using your
 * Mailgun domain name and api key.
 *
 * <pre>var Instagram = require('cloud/instagram-v1-1.0.js');
 * Instagram.initialize('clientId');</pre>
 *
 */

(function() {

  var _apiUrl = 'https://api.instagram.com/v1/';
  var _clientID = '';
  var _accessToken = '';

  module.exports = {

    initialize: function(clientID) {
      _clientID = clientID;
    },

    setAccessToken: function(accessToken) {
      _accessToken = accessToken;
    },

    searchTag: function(params) {
      params.client_id = _clientID;

      return Parse.Cloud.httpRequest({
        url: _apiUrl + "tags/search",
        params: params
      });
    },

    searchUser: function(params) {
      params.client_id = _clientID;

      return Parse.Cloud.httpRequest({
        url: _apiUrl + "users/search",
        params: params
      });
    },

    searchLocation: function(params) {
      params.client_id = _clientID;

      return Parse.Cloud.httpRequest({
        url: _apiUrl + "locations/search",
        params: params
      });
    },

    getTag: function(tag, params) {
      params.client_id = _clientID;

      return Parse.Cloud.httpRequest({
        url: _apiUrl + "tags/" + tag,
        params: params
      });
    },

    getUser: function(user, params) {
      params.client_id = _clientID;

      return Parse.Cloud.httpRequest({
        url: _apiUrl + "users/" + user,
        params: params
      });
    },

    getLocation: function(location, params) {
      params.client_id = _clientID;

      return Parse.Cloud.httpRequest({
        url: _apiUrl + "locations/" + location,
        params: params
      });
    },

    getPopularMedia: function(params) {
      params.client_id = _clientID;

      return Parse.Cloud.httpRequest({
        url: _apiUrl + "media/popular",
        params: params
      });
    },

    getRecentMediaByTag: function(tag, params) {
      params.client_id = _clientID;

      return Parse.Cloud.httpRequest({
        url: _apiUrl + "tags/" + tag + "/media/recent",
        params: params
      });
    },

    getRecentMediaByUser: function(user, params) {
      params.access_token = _accessToken;

      return Parse.Cloud.httpRequest({
        url: _apiUrl + "users/" + user + "/media/recent",
        params: params
      });
    },

    getRecentMediaByLocation: function(location, params) {
      params.client_id = _clientID;

      return Parse.Cloud.httpRequest({
        url: _apiUrl + "locations/" + location + "/media/recent",
        params: params
      });
    },

    getSelfFeed: function(params) {
      params.access_token = _accessToken;

      return Parse.Cloud.httpRequest({
        url: _apiUrl + "users/self/feed",
        params: params
      });
    },

    getSelfLikedMedia: function(params) {
      params.access_token = _accessToken;

      return Parse.Cloud.httpRequest({
        url: _apiUrl + "users/self/media/liked",
        params: params
      });
    },

    getNextPage: function(nextUrl) {

      return Parse.Cloud.httpRequest({
        url: nextUrl
      });
    }

  }
})();