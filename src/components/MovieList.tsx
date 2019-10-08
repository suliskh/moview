import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Dimmer, Loader, Card } from 'semantic-ui-react';
import { MovieCard } from './MovieCard';
import { Movie } from '../store/movie/types';
import { RootState } from '../store';
import { IMG_BASE_URL } from '../services/config';
import * as fromMovieActions from '../store/movie/actions';

interface StateProps {
	isLoading: boolean;
	data: Array<Movie>;
}

interface DispatchProps {
	requestMovies: typeof fromMovieActions.getMovies;
}

type MovieListProps = StateProps & DispatchProps;

class MovieList extends React.Component<MovieListProps, {}> {
	componentDidMount() {
		const { data, requestMovies } = this.props;

		if (data.length <= 1) {
			requestMovies();
		}
	}

	render() {
		const { data, isLoading } = this.props;

		return (
			<Card.Group style={{ justifyContent: 'center' }}>
				{data && !isLoading ? (
					data.map((movie: Movie) => (
						<MovieCard
							key={movie.id}
							averageVote={movie.vote_average}
							backdropPath={IMG_BASE_URL + movie.backdrop_path}
							movieId={movie.id}
							overview={movie.overview}
							releaseDate={movie.release_data}
							title={movie.title}
						/>
					))
				) : (
					<Dimmer active inverted>
						<Loader>Loading</Loader>
					</Dimmer>
				)}
			</Card.Group>
		);
	}
}

const mapStateToProps = ({ movies }: RootState): StateProps => ({
	isLoading: movies.isLoading,
	data: movies.data,
});
const mapDispatchToProps = (
	dispatch: ThunkDispatch<{}, {}, any>
): DispatchProps =>
	bindActionCreators({ requestMovies: fromMovieActions.getMovies }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MovieList);
