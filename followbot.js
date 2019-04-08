var Twit = require('twit');
var config=require('./config');

var T = new Twit(config);


var stream = T.stream('user');
console.log("stream entered")
stream.on('follow', onFollowed)
console.log("stream entered inside")
function onFollowed(){
    console.log("follow event");
    // var name= event.source.name;
    // var screenName=event.source.screen_name;
    // tweetIt('@'+screenName+'Thanks for following GONEBOT !');
}


// function tweetIt(txt){

//     console.log(txt)
//     var tweet={ status: txt };
//     T.post('statuses/update',tweet , tweeted);
//     function tweeted(err,data,response){
//     if(err) "something went rong";
//     else console.log("you tweeted who followed you.");
//     }
// }




