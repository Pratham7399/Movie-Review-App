package dev.prathamesh.movies;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;
    public List<Movie> allMovies(){
        return movieRepository.findAll();
           //findAll() is a method of mongoRepository
    }

    public Optional<Movie> singelMovie(String imdbId){
        return movieRepository.findMovieByImdbId(imdbId);
    }
}
