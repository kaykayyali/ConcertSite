/* jslint esnext: true */
class Main extends React.Component{
	constructor(){
		super()
		this.state = {
			track: {}
		}
	}
	componentDidLoad(){
		$.ajax({
			url: "https://api.spotify.com/v1/search?type=track&query=" + this.props.search,
			success: (tracks) => {
				this.setState({
					track: tracks[0]
				})
			}
		})
	}




	render(){
		return(
	
		<div class="player">
			<div class="container-fluid">
					<div class="row">
						<Infobar />
						<Playbutton /> 
					</div>
					<div class="row">
						<Progressbar />
					</div>
					<ImageHolder />
			</div>		
		</div>

			)
	}
}