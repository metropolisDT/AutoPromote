var password = process.argv[3];
var username = process.argv[2];
var tweet = process.argv[4];
//do data validation here;
username = "jhonboger";
username = "twitmore1"
password = "Impossible123!!2";
password = "iImpossible123!!"
tweet = "heyyyy";
console.log(username);
console.log(password);
console.log(tweet);
if(!password || !username || !tweet){
    console.log("You forgot an argument! \nExample usage:\n\nnode twit.js username password message");
    process.exit();
}
const twitter = require("twitter");
twitter.postOnTwitter(username, password, tweet, uploadFile = false, randomFollow = false).catch(function(error){
    console.log(error);
    console.log(error.name);
    process.exit();
});
//twitter.verifyLoginInfo(username, password).catch((error) => {
 //   console.log(error);
  //  process.exit();
//});