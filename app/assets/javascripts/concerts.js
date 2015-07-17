$('.albumsLink').on('click', function(event){
	event.preventDefault;
	
		console.log(event.target.id);
		var searchTerm = event.target.id
		var  url = "https://api.spotify.com/v1/artists/"+ searchTerm +"/albums" 
		console.log (url)
		var request = $.get(url, handleAlbums)
	});

function handleAlbums(data) {
	console.log(data)
	$('#album_results').empty()
	var previousName = ""
	data.items.forEach(function(album,index) {
		if (previousName != album.name){

			$('#album_results').append('<li>'+
				"<button style='margin-top:5px;margin-bottom:5px;' class = 'btn btn-default' type='album' id = '"+ album.id + "'>" +'<span style = "font-size:22px; line-height:2;">'+
				 album.name + '</span>'+ 
				  " <img class = 'img-thumbnail pull-right' src='" + album.images[0].url +"' width=11%>" +"</button>"+'</li>')
		}
	 previousName = album.name
	});

	$('button[type="album"]').on('click', function(event){		
		console.log(event.target.id);
		var searchTerm = event.target.id
		var  url = "https://api.spotify.com/v1/albums/"+ searchTerm +"/tracks" 
		console.log (url)
		var request = $.get(url, handleTracks)
	});

	$('#albumModal').modal('toggle')

};

function handleTracks(data) {
	console.log(data)
	$('#albumModal').modal('toggle')

	$('#tracks_results').empty()
	var previousName = ""

	data.items.forEach(function(track) {
		console.log(track.name)
		$('#tracks_results').append('<li>' + "<a href= '#' id= 'track' target='_blank'>"+ track.name +"</a>" +'</li>');	
		$('#track').on('click', playTrack(event,track.preview_url))	
	});

	$('#tracksModal').modal('toggle')
};
function playTrack(event,src){
	event.preventDefault

	$('iframe').prop('src', src)
}