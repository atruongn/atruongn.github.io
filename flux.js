jQuery(document).ready(function($) {
var myQuotes = new Array();
myQuotes[0] = "In a constant state of <a target='_blank' href='https://open.spotify.com/track/2VIalhAkUV3aw0ncDID4Cs?si=dceb2a8500ba4781'>flux</a>.";
myQuotes[1] = "Get a <a target='_blank'  href='https://open.spotify.com/track/2EvwLVrnYbCZEG6Kx5DCRy'>piece of me</a> in /work.";
myQuotes[2] = "Kinda far from the <a target='_blank' href='https://open.spotify.com/track/6QfS2wq5sSC1xAJCQsTSlj'>shallow</a> now.";
myQuotes[3] = "Looking for <a target='_blank' href='https://open.spotify.com/track/7ARveOiD31w2Nq0n5FsSf8'>perfect places</a>.";
myQuotes[4] = "Probably <a target='_blank' href='https://open.spotify.com/track/7r5mUkmwLRXTtuoJEzJboP'>dancing on my own</a>.";
myQuotes[5] = "Won't click <a target='_blank' href='https://open.spotify.com/track/3LUvWNx3ceBjsOeuDOMEsl'>X</a> until I press ⌘+S.";
    
var myRandom = Math.floor(Math.random()*myQuotes.length);

document.getElementById('myQuote').innerHTML= myQuotes[myRandom];
});
