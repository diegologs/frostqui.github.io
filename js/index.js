$(document).ready(function(){
      $('.parallax').parallax();
       $('.kappa').kappa();

       var GitHubCommits = require("github-commits");
       var gitHubCommits = new GitHubCommits();
 
       gitHubCommits.forUser("frostqui")
            .currentWeekCommits()
            .toArray(function(repositories){
              console.log(repositories);
            });
    });
