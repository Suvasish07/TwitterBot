var Twit = require('twit')
var config=require('./config')

var T = new Twit(config);

//
//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//
var searchparams= { q: 'narendra modi', count: 5 }
T.get('search/tweets',searchparams, function(err, data, response) {
var tweets=data.statuses;
for (let i=0;i<tweets.length;i++){
}
})


//
//  tweet 'hello world!'
//
tweetIt();

// setInterval(tweetIt,1000*20);

function tweetIt(){

    var r =Math.floor(Math.random()*100)
    
    var tweet={ status: 'the count is '+r+'     #theFirsTweet from GONEBOT' }
    T.post('statuses/update',tweet , tweeted);
    
    function tweeted(err,data,response){
    if(err) "something went rong";
    else console.log("you tweeted");
    }

}







