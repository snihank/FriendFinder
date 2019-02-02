var path = require('path');

module.exports = function(app) {
    // Basic route that sends the user to the home page
      app.get('/', function (req, res) {
          res.sendFile(path.join(__dirname, '../public/index.html'));
      });
      //route to display the survey page - survery.html)
      app.get('/survey', function (req, res) {
          res.sendFile(path.join(__dirname, '../public/survey.html'));
          console.log(__dirname);
      });
    
      // If no matching route is found default to home
      app.use('*', function (req, res) {
          res.sendFile(path.join(__dirname, '../public/index.html'));
      });
    };