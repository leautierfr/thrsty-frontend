export function BreweriesShow(props) {
  return (
    <div>
      <h4>{props.brewery.name}</h4>
      <h7>{props.brewery.address}</h7>
      <p>{props.brewery.website}</p>
      <p>{props.brewery.state}</p>
    </div>
  );
}
