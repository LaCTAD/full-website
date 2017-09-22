app.factory('$posts', ['$http', function($http) {
   return {
     all: function() {
        return $http.get('wp-json/posts/', { cache: true }).then(function(response) {
          return response.data;
        });
     },
     id: function(id) {
        return $http.get('wp-json/posts/'+ id, { cache: true }).then(function(response) {
          return response.data;
        });
     },
     name: function(name) {
        return $http.get('wp-json/posts?filter[name]='+ name, { cache: true }).then(function(response) {
          return response.data;
        });
     },
     type: function(type) {
        return $http.get('wp-json/posts?type=' + type, { cache: true }).then(function(response) {
          return response.data;
        });
     },
     typeAll: function(type) {
        return $http.get('wp-json/posts?type=' + type + '&filter[posts_per_page]=-1', { cache: true }).then(function(response) {
          return response.data;
        });
     },
     typeName: function(type, name) {
        return $http.get('wp-json/posts?type=' + type + '&filter[name]=' + name, { cache: true }).then(function(response) {
          return response.data;
        });
     },
     category: function(type, cat) {
        return $http.get('wp-json/posts?type=' + type + '&filter[category_name]=' + cat, { cache: true }).then(function(response) {
          return response.data;
        });
     }
   };
 }]);