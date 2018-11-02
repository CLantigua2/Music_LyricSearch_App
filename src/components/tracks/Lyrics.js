import React from 'react';
import axios from 'axios';

class Lyrics extends React.Component {
	state = {
		track: {},
		lyrics: {}
	};

	componentDidMount() {
		axios
			.get(
				`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this
					.props.match.params.id}
&apikey=${process.env.REACT_APP_MM_KEY}`
			)
			.then((res) => {
				this.setState({ lyrics: res.data.message.body.lyrics });
				// console.log(res.data);
				return axios.get(
					`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${this
						.props.match.params.id}
&apikey=${process.env.REACT_APP_MM_KEY}`
				);
			})
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<div>
				<h1>Lyrics</h1>
			</div>
		);
	}
}

export default Lyrics;
