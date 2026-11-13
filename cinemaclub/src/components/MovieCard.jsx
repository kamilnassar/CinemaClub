function MovieCard({ title, year, rating, available, popular, duration }) {
  return (
    <article className="movie-card">
      <h2>{title}</h2>
      <p>שנת יציאה: {year}</p>
      <p>דירוג: {rating}</p>
      {available &&<p>זמין לצפייה</p>}
      {popular &&<p>בחירת הצוות</p>}
      {duration>50 && <p>duration in minutes: {duration}</p>}
    </article>
  );
}

export default MovieCard;