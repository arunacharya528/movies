import { CarouselView } from "../../Reuseable/OwlCarousel/Carousel";
import { useEffect, useState } from "react";
import { getLatestMovies } from "./handler";
import { getRating } from "../../Reuseable/getRating";
import { toast } from "wc-toast";

export const Latest = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        toast.promise(
            getLatestMovies()
                .then(response => {
                    const responseMovies = response.data.data.movies;
                    setMovies(responseMovies);
                })
                .catch(error => console.log(error))
            , {
                loading: "Loading...",
                success: "Loaded successfully",
                error: "Failed to load movies"
            }
        )
    }, []);



    let carouselItems = movies.map((movie, index) => {
        return (
            <div class="row mx-5 my-3">
                <div class="col-sm-6 d-block m-auto">
                    <section class="">
                        <span class="badge badge-primary">NEW</span>
                        <h1>{movie.title}</h1>
                        <span class="studio"></span>
                        <div class="rating py-3 title-font">
                            <span>Rating: </span>

                            {getRating(movie.rating).map((item) => <>{item}</>)}
                        </div>
                        <p class="description fw-bold">{movie.summary.length < 150 ? movie.summary : movie.summary.substr(0, 150) + "..."}</p>
                        <div class="d-flex">
                            {movie.genres.map((genre, index) =>
                                <span class="badge badge-primary">{genre}
                                    {index !== movie.genres.length - 1 ? <>,&nbsp;</> : ""}
                                </span>
                            )}
                        </div>
                        <span class="d-block">{movie.year}</span>
                        <div>
                            <a class="btn btn-primary my-3">View</a>
                        </div>
                    </section>
                </div>
                <div class="col-sm-6">
                    <img src={movie.large_cover_image} alt="Black Widow poster" class="poster d-block m-auto" />
                </div>
            </div>
        );
    });


    return (
        <div class="container">
            <wc-toast></wc-toast>
            <h2 className="text-center py-3 banner">Latest Movies</h2>
            <CarouselView items={carouselItems} displayItems={2}></CarouselView>
        </div>
    );
}