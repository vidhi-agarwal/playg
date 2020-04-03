import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
	state = { images: [] };

	onSearchSubmit = async term => {
		const response = await unsplash.get(
			'https://api.unsplash.com/search/photos',
			{
				params: { query: term }
			}
		);

		this.setState({ images: response.data.results });
	};

	render() {
		return (
			<div className='ui container' style={{ matginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				Found: {this.state.images.length} images
			</div>
		);
	}
}

export default App;