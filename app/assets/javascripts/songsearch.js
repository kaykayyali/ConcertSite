// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

function onPlayButtonClick(event) {
	console.log("Working")
	if (!$('.btn-play').hasClass('disabled')){
		if ($('.btn-play').hasClass('playing')) {
			$('.btn-play').removeClass('playing')
			$('.js-player').trigger('pause')						
		} else {
			$('.btn-play').addClass('playing')
			$('.js-player').trigger('play')
		}
	}

}

function onSearchSubmit(event) {
	console.log("Hit")
	var url = "https://api.spotify.com/v1/search?type=track&query=" + $('input[name="search"]').val()
	console.log(url)
	var request = $.get(url, onHandleTracks)
}

function onHandleTracks(data) {
	var track = data.tracks.items[0]
	console.log(track)
	getArtistInfo(track.artists[0].id)
	prepareAudioPlayer(track)
}

function prepareAudioPlayer(track) {
	$('.title').text(track.name);
	$('.author').text(track.artists[0].name);
	$('.btn-play').removeClass('disabled');
	$('audio').prop('src', track.preview_url);
	$('.js-player-image').prop('src', track.album.images[0].url);

}
function updateTrackTime(){
	$('progress').prop('value', Math.floor($('audio').prop('currentTime')))
}
function getArtistInfo(id){
	$.get('https://api.spotify.com/v1/artists/' + id, prepareArtistModal)
}
function prepareArtistModal(artist) {
	console.log(artist)
	$('#genre').empty();
	$('#artistModalLabel').text(artist.name);
	$('#image').prop('src',artist.images[0].url); 
	$('#pop').text(artist.popularity); 
	$('#followers').text(artist.followers.total);
	if (artist.genres[0]){
		$('#genre').html('<h5>Genres:</h5><ul id="genrelist"></ul>')
		artist.genres.forEach(function(genre){
			console.log(genre)
			var string = '<li>' + genre.charAt(0).toUpperCase() +genre.slice(1) + '</li>'
			$('#genrelist').append(string);
		});
	}	
}





