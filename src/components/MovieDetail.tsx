import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import { MovieCard } from './MovieCard';
import { Movie } from '../store/movie/types';
import { RootState } from '../store';
import { IMG_BASE_URL } from '../services/config';
import * as fromMovieActions from '../store/movie/actions';

interface StateProps {
	isLoading: boolean;
	data: Movie;
}
interface DispatchProps {
	requestMovie: typeof fromMovieActions.getMovie;
}
interface PathParams {
	movieId: string;
}
type RouterProps = RouteComponentProps<PathParams>;

type MovieDetailProps = StateProps & DispatchProps & RouterProps;

class MovieDetail extends React.Component<MovieDetailProps, {}> {
	componentDidMount() {
		const { data, match, requestMovie } = this.props;

		if (data) {
			requestMovie(match.params.movieId);
		}
	}

	render() {
		const { data, isLoading } = this.props;

		return data && !isLoading ? (
			<Container>
				<MovieCard
					key={data.id}
					averageVote={data.vote_average}
					backdropPath={IMG_BASE_URL + data.backdrop_path}
					movieId={data.id}
					overview={data.overview}
					releaseDate={data.release_data}
					title={data.title}
					fluid={true}
				/>
			</Container>
		) : (
			<Container>
				<Dimmer active inverted>
					<Loader>Loading</Loader>
				</Dimmer>
			</Container>
		);
	}
}

const mapStateToProps = ({ selectedMovie }: RootState): StateProps => ({
	isLoading: selectedMovie.isLoading,
	data: selectedMovie.data,
});
const mapDispatchToProps = (
	dispatch: ThunkDispatch<{}, {}, any>
): DispatchProps =>
	bindActionCreators({ requestMovie: fromMovieActions.getMovie }, dispatch);

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(MovieDetail)
);
