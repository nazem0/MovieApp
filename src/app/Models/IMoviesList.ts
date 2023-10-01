import { IMovie } from "./IMovie";

export interface IMoviesList {
    page: number,
    results: IMovie[],
    total_pages: number, total_results: number
}
