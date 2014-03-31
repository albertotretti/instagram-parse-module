// Copy the cloud module in your cloud folder
var ig = require('cloud/instagram-v1-1.0.js');

// Paste your client_id here
ig.initialize('CLIENT_ID_HERE');

// Paste your access_token here if needed
ig.setAccessToken('ACCESS_TOKEN');

Parse.Cloud.define('searchTag', function(request, response) {
  ig.searchTag({
    q: 'latergram'
  }).then(function(httpResponse) {
    response.success(httpResponse.data);
  },
  function(error) {
    response.error(error);
  });
});

Parse.Cloud.define('searchUser', function(request, response) {
  ig.searchUser({
    q: 'jack',
    count: '3'
  }).then(function(httpResponse) {
    response.success(httpResponse.data);
  },
  function(error) {
    response.error(error);
  });
});

Parse.Cloud.define('searchLocation', function(request, response) {
  ig.searchLocation({
    lat: '48.858844',
    lng: '2.294351',
    distance: '100'
  }).then(function(httpResponse) {
    response.success(httpResponse.data);
  },
  function(error) {
    response.error(error);
  });
});

Parse.Cloud.define('getUser', function(request, response) {
  ig.getUser('1574083', {}).then(function(httpResponse) {
    response.success(httpResponse.data);
  },
  function(error) {
    response.error(error);
  });
});

Parse.Cloud.define('getTag', function(request, response) {
  ig.getTag('latergram', {}).then(function(httpResponse) {
    response.success(httpResponse.data);
  },
  function(error) {
    response.error(error);
  });
});

Parse.Cloud.define('getLocation', function(request, response) {
  ig.getLocation('1', {}).then(function(httpResponse) {
    response.success(httpResponse.data);
  },
  function(error) {
    response.error(error);
  });
});

Parse.Cloud.define('getPopularMedia', function(request, response) {
  ig.getPopularMedia({
    count:'3'
  }).then(function(httpResponse) {
    response.success(httpResponse.data);
  },
  function(error) {
    response.error(error);
  });
});

Parse.Cloud.define('getRecentMediaByUser', function(request, response) {
  ig.getRecentMediaByUser('3', {
    count: '1'
  }).then(function(httpResponse) {
    response.success(httpResponse.data);
  },
  function(error) {
    response.error(error);
  });
});

Parse.Cloud.define('getRecentMediaByTag', function(request, response) {
  ig.getRecentMediaByTag('latergram', {
    count: '1'
  }).then(function(httpResponse) {
    response.success(httpResponse.data);
  },
  function(error) {
    response.error(error);
  });
});

Parse.Cloud.define('getRecentMediaByLocation', function(request, response) {
  ig.getRecentMediaByLocation('514276', {
    count: '1'
  }).then(function(httpResponse) {
    response.success(httpResponse.data);
  },
  function(error) {
    response.error(error);
  });
});

Parse.Cloud.define('getSelfFeed', function(request, response) {
  ig.getSelfFeed({
    count:'1'
  }).then(function(httpResponse) {
    response.success(httpResponse.data);
  },
  function(error) {
    response.error(error);
  });
});

Parse.Cloud.define('getSelfLikedMedia', function(request, response) {
  ig.getSelfLikedMedia({
    count:'1'
  }).then(function(httpResponse) {
    response.success(httpResponse.data);
  },
  function(error) {
    response.error(error);
  });
});

Parse.Cloud.define('testPagination', function(request, response) {
  ig.getSelfFeed({}).then(function(httpResponse) {
    var nextUrl = httpResponse.data.pagination.next_url;
    return ig.getNextPage(nextUrl);
  }).then(function(httpResponse) {
    response.success(httpResponse.data);
  },
	function(error) {
    response.error(error);
  });
});
