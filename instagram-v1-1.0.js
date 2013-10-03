var _apiUrl = 'https://api.instagram.com/v1/';
var _clientID = '';
var _accessToken = '';

exports.initialize = function(clientID) {
  _clientID = clientID;
  return this;
};

exports.setAccessToken = function(accessToken) {
  _accessToken = accessToken;
  return this; // Not sure this is needed.
};

exports.searchTag = function(params, options) {
  var promise;
  if (Parse.Promise) {
    promise = new Parse.Promise();
  } else {
    promise = {
      resolve: function() {},
      reject: function() {}
    };
  }

  params.client_id = _clientID;

  Parse.Cloud.httpRequest({
    url: _apiUrl + "tags/search",
    params: params,
    success: function(httpResponse) {
      if (options && options.success) {
        options.success(httpResponse);
      }
      promise.resolve(httpResponse);
    },
    error: function(httpResponse) {
      if (options && options.error) {
        options.error(httpResponse);
      }
      promise.reject(httpResponse);
    }
  });

  return promise;
};

exports.searchUser = function(params, options) {
  var promise;
  if (Parse.Promise) {
    promise = new Parse.Promise();
  } else {
    promise = {
      resolve: function() {},
      reject: function() {}
    };
  }

  params.client_id = _clientID;
  Parse.Cloud.httpRequest({
    url: _apiUrl + "users/search",
    params: params,
    success: function(httpResponse) {
      if (options && options.success) {
        options.success(httpResponse);
      }
      promise.resolve(httpResponse);
    },
    error: function(httpResponse) {
      if (options && options.error) {
        options.error(httpResponse);
      }
      promise.reject(httpResponse);
    }
  });
  return promise;
};

exports.searchLocation = function(params, options) {
  var promise;
  if (Parse.Promise) {
    promise = new Parse.Promise();
  } else {
    promise = {
      resolve: function() {},
      reject: function() {}
    };
  }

  params.client_id = _clientID;
  Parse.Cloud.httpRequest({
    url: _apiUrl + "locations/search",
    params: params,
    success: function(httpResponse) {
      if (options && options.success) {
        options.success(httpResponse);
      }
      promise.resolve(httpResponse);
    },
    error: function(httpResponse) {
      if (options && options.error) {
        options.error(httpResponse);
      }
      promise.reject(httpResponse);
    }
  });
  return promise;
};

exports.getTag = function(tag, params, options) {
  var promise;
  if (Parse.Promise) {
    promise = new Parse.Promise();
  } else {
    promise = {
      resolve: function() {},
      reject: function() {}
    };
  }

  params.client_id = _clientID;
  Parse.Cloud.httpRequest({
    url: _apiUrl + "tags/" + tag,
    params: params,
    success: function(httpResponse) {
      if (options && options.success) {
        options.success(httpResponse);
      }
      promise.resolve(httpResponse);
    },
    error: function(httpResponse) {
      if (options && options.error) {
        options.error(httpResponse);
      }
      promise.reject(httpResponse);
    }
  });
  return promise;
};

exports.getUser = function(user, params, options) {
  var promise;
  if (Parse.Promise) {
    promise = new Parse.Promise();
  } else {
    promise = {
      resolve: function() {},
      reject: function() {}
    };
  }

  params.client_id = _clientID;
  Parse.Cloud.httpRequest({
    url: _apiUrl + "users/" + user,
    params: params,
    success: function(httpResponse) {
      if (options && options.success) {
        options.success(httpResponse);
      }
      promise.resolve(httpResponse);
    },
    error: function(httpResponse) {
      if (options && options.error) {
        options.error(httpResponse);
      }
      promise.reject(httpResponse);
    }
  });
  return promise;
};

exports.getLocation = function(location, params, options) {
  var promise;
  if (Parse.Promise) {
    promise = new Parse.Promise();
  } else {
    promise = {
      resolve: function() {},
      reject: function() {}
    };
  }

  params.client_id = _clientID;
  Parse.Cloud.httpRequest({
    url: _apiUrl + "locations/" + location,
    params: params,
    success: function(httpResponse) {
      if (options && options.success) {
        options.success(httpResponse);
      }
      promise.resolve(httpResponse);
    },
    error: function(httpResponse) {
      if (options && options.error) {
        options.error(httpResponse);
      }
      promise.reject(httpResponse);
    }
  });
  return promise;
};

exports.getPopularMedia = function(params, options) {
  var promise;
  if (Parse.Promise) {
    promise = new Parse.Promise();
  } else {
    promise = {
      resolve: function() {},
      reject: function() {}
    };
  }

  params.client_id = _clientID;
  Parse.Cloud.httpRequest({
    url: _apiUrl + "media/popular",
    params: params,
    success: function(httpResponse) {
      if (options && options.success) {
        options.success(httpResponse);
      }
      promise.resolve(httpResponse);
    },
    error: function(httpResponse) {
      if (options && options.error) {
        options.error(httpResponse);
      }
      promise.reject(httpResponse);
    }
  });
  return promise;
};

exports.getRecentMediaByTag = function(tag, params, options) {
  var promise;
  if (Parse.Promise) {
    promise = new Parse.Promise();
  } else {
    promise = {
      resolve: function() {},
      reject: function() {}
    };
  }

  params.client_id = _clientID;
  Parse.Cloud.httpRequest({
    url: _apiUrl + "tags/" + tag + "/media/recent",
    params: params,
    success: function(httpResponse) {
      if (options && options.success) {
        options.success(httpResponse);
      }
      promise.resolve(httpResponse);
    },
    error: function(httpResponse) {
      if (options && options.error) {
        options.error(httpResponse);
      }
      promise.reject(httpResponse);
    }
  });
  return promise;
};

exports.getRecentMediaByUser = function(user, params, options) {
  var promise;
  if (Parse.Promise) {
    promise = new Parse.Promise();
  } else {
    promise = {
      resolve: function() {},
      reject: function() {}
    };
  }

  params.access_token = _accessToken;
  Parse.Cloud.httpRequest({
    url: _apiUrl + "users/" + user + "/media/recent",
    params: params,
    success: function(httpResponse) {
      if (options && options.success) {
        options.success(httpResponse);
      }
      promise.resolve(httpResponse);
    },
    error: function(httpResponse) {
      if (options && options.error) {
        options.error(httpResponse);
      }
      promise.reject(httpResponse);
    }
  });
  return promise;
};

exports.getRecentMediaByLocation = function(location, params, options) {
  var promise;
  if (Parse.Promise) {
    promise = new Parse.Promise();
  } else {
    promise = {
      resolve: function() {},
      reject: function() {}
    };
  }

  params.client_id = _clientID;
  Parse.Cloud.httpRequest({
    url: _apiUrl + "locations/" + location + "/media/recent",
    params: params,
    success: function(httpResponse) {
      if (options && options.success) {
        options.success(httpResponse);
      }
      promise.resolve(httpResponse);
    },
    error: function(httpResponse) {
      if (options && options.error) {
        options.error(httpResponse);
      }
      promise.reject(httpResponse);
    }
  });
  return promise;
};

exports.getSelfFeed = function(params, options) {
  var promise;
  if (Parse.Promise) {
    promise = new Parse.Promise();
  } else {
    promise = {
      resolve: function() {},
      reject: function() {}
    };
  }

  params.access_token = _accessToken;

  Parse.Cloud.httpRequest({
    url: _apiUrl + "users/self/feed",
    params: params,
    success: function(httpResponse) {
      if (options && options.success) {
        options.success(httpResponse);
      }
      promise.resolve(httpResponse);
    },
    error: function(httpResponse) {
      if (options && options.error) {
        options.error(httpResponse);
      }
      promise.reject(httpResponse);
    }
  });
  return promise;
};

exports.getSelfLikedMedia = function(params, options) {
  var promise;
  if (Parse.Promise) {
    promise = new Parse.Promise();
  } else {
    promise = {
      resolve: function() {},
      reject: function() {}
    };
  }

  params.access_token = _accessToken;
  Parse.Cloud.httpRequest({
    url: _apiUrl + "users/self/media/liked",
    params: params,
    success: function(httpResponse) {
      if (options && options.success) {
        options.success(httpResponse);
      }
      promise.resolve(httpResponse);
    },
    error: function(httpResponse) {
      if (options && options.error) {
        options.error(httpResponse);
      }
      promise.reject(httpResponse);
    }
  });
  return promise;
};

exports.getNextPage = function(nextUrl, options) {
  var promise;
  if (Parse.Promise) {
    promise = new Parse.Promise();
  } else {
    promise = {
      resolve: function() {},
      reject: function() {}
    };
  }

  Parse.Cloud.httpRequest({
    url: nextUrl,
    success: function(httpResponse) {
      if (options && options.success) {
        options.success(httpResponse);
      }
      promise.resolve(httpResponse);
    },
    error: function(httpResponse) {
      if (options && options.error) {
        options.error(httpResponse);
      }
      promise.reject(httpResponse);
    }
  });
  return promise;
}