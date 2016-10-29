var apiURL = 'https://api.github.com/users/';
var viewmodel = new Vue({
	el:'#app',
	data: {
		sortparam: '',
        filterkey: '',
        order: 1,
        items:[{
        		"login":'',
        		"id":'',
        		"avatar_url":'',
        		"gravatar_id":'',	
			    "url":'',		
			    "html_url":	'',	
			    "followers_url":'',
			    "following_url":'',
			    "gists_url":'',	
			    "starred_url":'',		
			    "subscriptions_url": '',
			    "organizations_url":'',
			    "repos_url":'',		
			    "events_url":'',		   
			    "received_events_url":'', 
			    "type": '',
			    "site_admin":''
			  }],
		followee:''
       
   },

	computed: {

		  filteredUsers: function () {
		    var self = this
		    return self.items.filter(function (item) {
		      return item.login.indexOf(self.filterkey) !== -1  ||
		      		 item.id.toString().indexOf(self.filterkey) !== -1

		    });
		  }
	},
	created: function(){
		this.followee = 'rcdosado';
		this.fetchData()
	},


	 methods: {
 		sortvia: function (sortparam, order) {
	    this.order = this.order * -1;
            this.sortparam = sortparam;
        },
        fetchData: function() {
        	var self = this;
        	if (this.followee)
	        	$.get(apiURL+this.followee+'/followers', function(data){
	        		self.items = data;
	        		// console.log(self.items[0].login);
	        	});

        }       

    }	
});