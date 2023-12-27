function DetallesMovie({ movie }) {
  let release_date = movie?.release_date;
  let date = new Date(release_date);
  let year = date.getFullYear();
  let lang = movie?.spoken_languages;
  return (
    <article className="w-full max-w-[960px] flex flex-wrap items-start">
      <figure className="w-full max-w-[250px] sm:w-[200px] mb-8">
        <img
          src={"https://image.tmdb.org/t/p/original/" + movie?.poster_path}
          alt=""
        />
        <button className="w-full px-4 py-2 font-secondary text-center border-white border-solid border-2 hover:text-blue-400 hover:border-blue-400">
          Agragar a favoritos
        </button>
      </figure>
      <div className="sm:pl-8 w-full sm:w-[calc(100%-200px)]">
        <h2 className="font-secondary text-3xl mb-5">{movie?.title}</h2>
        <div className="flex justify-start text-blue-300 opacity-[.6]">
          <time
            className="border-blue-300 border-solid border-2 px-2 py-1 rounded-lg font-secondary text-sm mr-2"
            datetime={release_date}
          >
            {year}
          </time>
          <p className="border-blue-300 border-solid border-2 px-2 py-1 rounded-lg font-secondary text-sm">
            Puntaje : {movie?.vote_average}
          </p>
        </div>
        <h3 className="font-primary text-md mb-3 mt-4">
          Título original : {movie?.original_title}
        </h3>
        <p className="font-primary text-sm pb-4">
          {lang?.lenght < 0 ? "Lenguajes " : "Lenguaje "}:
          {lang?.map((l, index) => {
            return (
              <>
                {index > 0 && ","}
                <span> {l.name}</span>
              </>
            );
          })}
        </p>
        <p className="font-primary text-xs pb-4">
          Psinopsis : {movie?.overview}
        </p>
        <div className="font-primary text-xs">
          Generos :{" "}
          {movie?.genres?.map((g, index) => {
            return (
              <>
                {index > 0 && ","}
                <span className="font-secondary ml-2">{g.name}</span>
              </>
            );
          })}
          .
        </div>
      </div>
    </article>
  );
}

export default DetallesMovie;
