var friends = require('../data/friends');

module.exports = function(app){

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        
        // This object holds the match
        var matchedFriend = {
            name: "",
            photo: "",
            friendDifference: Infinity
        };
        // results from user's answers
        var userData = req.body;
        var friendScore = userData.scores;

        // This holds the difference between the user's score and other users' score
        var scoreDifference;


        // Loop through all the users in the database
        for(var i = 0; i < friends.length; i++){
            var currentFriend = friends[i];
            scoreDifference = 0;

            console.log(currentFriend);
        // Loop through all the scores
            for(j = 0; j < currentFriend.scores; j++){
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = friendScore[j];

                // Calculate the score difference
                scoreDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }

            if(scoreDifference <= matchedFriend.friendDifference){
                matchedFriend.name = currentFriend.name;
                matchedFriend.photo = currentFriend.photo;
                matchedFriend.friendDifference = scoreDifference;
            }
        }
        console.log(userData + "this is user data");
        friends.push(userData);

        res.json(matchedFriend);
    });



    

}