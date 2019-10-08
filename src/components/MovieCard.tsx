import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react';

interface MovieCardProps {
	averageVote: number;
	backdropPath: string;
	movieId: string;
	overview: string;
	releaseDate: string;
	title: string;
	hasLink?: boolean;
	fluid?: boolean;
}

function MovieCard({
	averageVote,
	backdropPath,
	movieId,
	overview,
	releaseDate,
	title,
	hasLink,
	fluid
}: MovieCardProps): JSX.Element {
	return (
		<Card fluid={fluid}>
			<Image src={backdropPath} wrapped ui={false} />
			<Card.Content>
				<Card.Header>
					{hasLink ? <Link to={'movie/' + movieId}>{title}</Link> : title}
				</Card.Header>
				<Card.Meta>
					<span className="date">{releaseDate}</span>
				</Card.Meta>
				<Card.Description>{overview}</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<Icon name="thumbs up" />
				{averageVote}
			</Card.Content>
		</Card>
	);
}

export { MovieCard };
