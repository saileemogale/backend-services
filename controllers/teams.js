
var express    = require('express');
var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'debug';
var teamsModel = require('../models/index')

var router = express.Router();


router.get('/', function(req, res) {
    logger.debug("Some debug messages " + Object.values(teamsModel));   
    return res.send(teamsModel.teams);
});

router.get('/:team_name', (req, res) => {
    team = teamsModel.teams.filter(function(item){
        return (item.name == req.param('team_name'));
    });

    if(team.length > 0){
        logger.debug("Team " + team);
        return res.send(team[0]);
    } else {
        res.status(404).send('Team not found');
    }
    
    
});

module.exports = router;