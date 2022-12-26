export function BreweriesIndex(props) {
  return (
    <div>
      <h1>All breweries</h1>
      {props.breweries.map((brewery) => (
        <div key={brewery.id}>
          <h6>{brewery.brewery_name}</h6>
          <h8>{brewery.address}</h8>
          <p>{brewery.website}</p>
          <p>{brewery.state}</p>
          <button type="button" class="btn btn-info" onClick={() => props.onShowBrewery(brewery)}>
            More info{" "}
          </button>
        </div>
      ))}
    </div>
  );
}
