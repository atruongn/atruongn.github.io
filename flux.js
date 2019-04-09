jQuery(document).ready(function($) {
var myQuotes = new Array();
myQuotes[0] = "In a constant state of <a target='_blank' href='https://open.spotify.com/track/4zb3kFL9fXrrfTwIY4CcDy'>flux</a>.";
myQuotes[1] = "Check out some /work to get a <a target='_blank'  href='https://open.spotify.com/track/2EvwLVrnYbCZEG6Kx5DCRy'>piece of me</a>.";
myQuotes[2] = "Kinda far from the <a target='_blank' href='https://open.spotify.com/track/6QfS2wq5sSC1xAJCQsTSlj'>shallow</a> now.";
myQuotes[3] = "Looking for <a target='_blank' href='https://open.spotify.com/track/7ARveOiD31w2Nq0n5FsSf8'>perfect places</a>.";
myQuotes[4] = "Probably thinking about what I did <a target='_blank' href='https://open.spotify.com/track/3oHNJECGN3bBoGXejlw2b1'>last Friday night</a>.";
  
var myRandom = Math.floor(Math.random()*myQuotes.length);

document.getElementById('myQuote').innerHTML= myQuotes[myRandom];
});
