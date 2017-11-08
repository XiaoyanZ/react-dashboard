const express = require('express');
const router = express.Router();
const GOOGLE_API_KEY = 'AIzaSyAN_SaliMnUm_Q-g_dv-LTbg9iYKVZc07Y';

var google = require('googleapis');
var kgsearch = google.kgsearch('v1');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});


router.get('/google/kgsearch', (req, res, next) => {
  console.log(req.query);
    kgsearch.entities.search({
      key: GOOGLE_API_KEY,
      query: req.query.query
    }, function(err, result){
      if(err) return next(err);
      res.send(result);
    })
});


module.exports = router;

