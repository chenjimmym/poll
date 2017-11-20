var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');
var Option = mongoose.model('Option');

var process = require('../controllers/process.js');

module.exports = function(app){



    app.get('/polls', function(req, res) {
        process.getAllPolls(req, res);
    });

    
    app.post('/addquestion', function(req, res) {
        process.addQuestion(req, res);
    });
    
    app.post('/addoptions', function(req, res) {
        process.addOptions(req, res);
    });

    app.post('/vote', function(req, res) {
        process.vote(req, res);
    });
    
    app.post('/delete', function(req, res) {
        process.deletePoll(req, res);
    });

    app.get('/poll/:id', function(req, res) {
        process.getOnePoll(req, res);
    });
    
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./../../public/dist/index.html"))
    });

}