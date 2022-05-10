import TheMovieDbSource from '../../data/themoviedb-source';

const Detail = {
  async render() {
    return `
      <h2>Detail Page</h2>
    `;
  },

  async afterRender() {
    const movie = await TheMovieDbSource.movieById(this.id);
    console.log(movie);
  },

};

export default Detail;
