export type TMovie = {
	vote_count: number;
	id: string;
	video: false;
	vote_average: number;
	title: string;
	popularity: number;
	poster_path: string | null;
	original_language: string;
	original_title: string;
	genre_ids: Array<number>;
	backdrop_path: string | null;
	adult: boolean;
	overview: string;
	release_date: string;
	most_popular: boolean;
};

export type TMovies = Array<TMovie>;
