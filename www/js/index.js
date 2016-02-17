$(document).ready(function(){
    document.addEventListener("deviceready", function(){
        getRepos();
    });
});

// Get Repos for home screen
function getRepos(){
    var html = '';
    $.ajax({
        url: "https://api.github.com/repositories",
        dataType:"jsonp",
        success: function(response){
            $.each(response.data, function(i, item){
                if(i < 10){
                    html += '<li>' +
                        '<img class="thumbnail" src="'+this.owner.avatar_url+'">' +
                        '<h1><a href="'+this.html_url+'" target="_blank">'+this.name+'</a>' +
                        '<p>By '+this.owner.login+'</p>' +
                    '</li>';
                }
            });
        $('#repo_list').append(html);
        $('#repo_list').listview("refresh");
        }
    });
}
