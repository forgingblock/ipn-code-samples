class IPNController {

    static index(req, res) {
    	console.log(JSON.stringify(req.body));
      // Here is the part that will give you the IPN data
      res.status(200).send('OK');
      res.end();
    }
  
  }
  
  module.exports = IPNController;