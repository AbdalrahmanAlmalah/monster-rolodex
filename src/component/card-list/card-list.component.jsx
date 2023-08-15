import "./card-list.styles.css";
const CardList = (props) => {
  const { monsters } = props;

  return (
    <div className="card-list ">
      {monsters.map((monster) => {
        const { name, id, email } = monster;
        return (
          <div className="card-container" key={id}>
            <img
              src={`https://robohash.org/${id}AG.png?set=set1`}
              alt={`monster ${name}`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        );
      })}
    </div>
  );
};

//allows other files to import the code that written within it
export default CardList;
