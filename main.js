// Copy the cloud module in your cloud folder
var ig = require('cloud/instagram-v1-1.0.js');

// Paste your client_id here
ig.initialize('CLIENT_ID');

// Paste your access_token here if needed
ig.setAccessToken('ACCESS_TOKEN');

Parse.Cloud.define('searchTag', function(request, response) {
  ig.searchTag(
    {
      q: 'latergram'
    },
    {
      success: function(httpResponse) {
        response.success(httpResponse.data);
      },
      error: function(httpResponse) {
        response.error(httpResponse.data);
      }
    }
  );
});

Parse.Cloud.define('searchUser', function(request, response) {
  ig.searchUser(
    {
      q: 'jack',
      count: '3'
    },
    {
      success: function(httpResponse) {
        response.success(httpResponse.data);
      },
      error: function(httpResponse) {
        response.error(httpResponse.data);
      }
    }
  );
});

Parse.Cloud.define('searchLocation', function(request, response) {
  ig.searchLocation(
    {
      lat: '48.858844',
      lng: '2.294351',
      distance: '100'
    },
    {
      success: function(httpResponse) {
        response.success(httpResponse.data);
      },
      error: function(httpResponse) {
        response.error(httpResponse.data);
      }
    }
  );
});

Parse.Cloud.define('getUser', function(request, response) {
  ig.getUser(
    '1574083',
    {},
    {
      success: function(httpResponse) {
        console.log(httpResponse.data);
        response.success(httpResponse.data);
      },
      error: function(httpResponse) {
        console.log(httpResponse.data);
        response.error(httpResponse.data);
      }
    }
  );
});

Parse.Cloud.define('getTag', function(request, response) {
  ig.getTag(
  'latergram',
  {},
    {
      success: function(httpResponse) {
        console.log(httpResponse.data);
        response.success(httpResponse.data);
      },
      error: function(httpResponse) {
        console.log(httpResponse.data);
        response.error(httpResponse.data);
      }
    }
  );
});

Parse.Cloud.define('getLocation', function(request, response) {
  ig.getLocation(
    '1',
    {},
    {
      success: function(httpResponse) {
        console.log(httpResponse.data);
        response.success(httpResponse.data);
      },
      error: function(httpResponse) {
        console.log(httpResponse.data);
        response.error(httpResponse.data);
      }
    }
  );
});

Parse.Cloud.define('getPopularMedia', function(request, response) {
  ig.getPopularMedia(
    {
      count:'3'
    },
    {
      success: function(httpResponse) {
        console.log(httpResponse.data);
        response.success(httpResponse.data);
      },
      error: function(httpResponse) {
        console.log(httpResponse.data);
        response.error(httpResponse.data);
      }
    }
  );
});

Parse.Cloud.define('getRecentMediaByUser', function(request, response) {
  ig.getRecentMediaByUser(
    '3',
    {
      count: '1'
      //,access_token: 'ACCESS_TOKEN' // Override the global access_token variable
    },
    {
      success: function(httpResponse) {
        console.log(httpResponse.data);
        response.success(httpResponse.data);
      },
      error: function(httpResponse) {
        console.log(httpResponse.data);
        response.error(httpResponse.data);
      }
    }
  );
});

Parse.Cloud.define('getRecentMediaByTag', function(request, response) {
  ig.getRecentMediaByTag(
	  'latergram',
	  {
      count: '1'
    },
    {
      success: function(httpResponse) {
        response.success(httpResponse.data);
      },
      error: function(httpResponse) {
        response.error(httpResponse.data);
      }
    }
  );
});

Parse.Cloud.define('getRecentMediaByLocation', function(request, response) {
  ig.getRecentMediaByLocation(
    '514276',
    {
      count: '1'
    },
    {
      success: function(httpResponse) {
        response.success(httpResponse.data);
      },
      error: function(httpResponse) {
        response.error(httpResponse.data);
      }
    }
  );
});

Parse.Cloud.define('getSelfFeed', function(request, response) {
  ig.getSelfFeed(
    {
      count:'1'
      //,access_token: 'ACCESS_TOKEN' // Override the global access_token variable
    },
    {
      success: function(httpResponse) {
        console.log(httpResponse.data);
        response.success(httpResponse.data);
      },
      error: function(httpResponse) {
        console.log(httpResponse.data);
        response.error(httpResponse.data);
      }
    }
  );
});

Parse.Cloud.define('getSelfLikedMedia', function(request, response) {
  ig.getSelfFeed(
    {
      count:'1'
      //,access_token: 'ACCESS_TOKEN' // Override the global access_token variable
    },
    {
      success: function(httpResponse) {
        console.log(httpResponse.data);
        response.success(httpResponse.data);
      },
      error: function(httpResponse) {
        console.log(httpResponse.data);
        response.error(httpResponse.data);
      }
    }
  );
});

Parse.Cloud.define('testPagination', function(request, response) {
  ig.getSelfFeed(
    {},
    {
      success: function(httpResponse) {
        console.log("Page 1");
        console.log(httpResponse.data);
        var nextUrl = httpResponse.data.pagination.next_url;
		    ig.getNextPage(
          nextUrl,
          {
		      success: function(httpResponse) {
		        console.log("Page 2");
                console.log(httpResponse.data);
		        response.success(httpResponse.data);
		      },
		      error: function(httpResponse) {
		        console.log(httpResponse.data);
		        response.error(httpResponse.data);
		      }
		    }
		  );
      },
      error: function(httpResponse) {
        console.log(httpResponse.data);
        response.error(httpResponse.data);
      }
    }
  );
});
