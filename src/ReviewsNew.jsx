export function ReviewsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateReview(params, () => event.target.reset());
  };
  return (
    <div>
      <h1>New Review</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Brewery name: <input name="name" type="text" />
        </div>
        <div>
          Review: <input name="review" type="text" />
        </div>
        <button type="submit">Submit review</button>
      </form>
    </div>
  );
}
