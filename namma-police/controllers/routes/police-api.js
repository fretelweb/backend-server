/* @author Ashwin Iyer
 * @details These are API used in the police's app
 */
define(
    [
        '../route-handlers/police-api-handlers',
        //'passport',
    ],
    function(policeApiHandlers) {
        function initialize(expressInstance) {
            //passport configurations
            var app = expressInstance,
                debug = require('debug')('nammapolice:police-api');

            app.post('/request/acknowledge', function (req, res) {
                debug('request to /request/acknowledge');
                console.log(req.body);
                responseData = {
                    pastData: req.body.citizenid
                }
                res.json(responseData);
                // policeApiHandlers.acknowledgeRequest(req, function(responseData){
                    
                // });
            });

            app.get('/location/citizen/:citizenId', function (req, res){
                debug('Inside /location/citizen/citizenId');
                responseData = {
                    greeting: req.params.citizenId
                }               
                res.json(responseData);

                // policeApiHandlers.getCitizenLocation(req, function(responseData){    

                // });
            });

            app.post('/citizen/ratings', function (req, res) {
                debug('request to /citizen/ratings');
                policeApiHandlers.rateCitizen(req, function(responseData){
                    res.json(responseData);
                });
            });

            app.post('/police/location/update', function(req, res){
                debug('request to /police/location/update');
                policeApiHandlers.updatePoliceLocation(req, function(responseData){
                    res.json(responseData);
                });
            });
        }
        return {
            initialize: initialize
        }
    }
);