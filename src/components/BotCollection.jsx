import { Table, Button } from ".";

const BotCollection = ({ collection, onSelect, onDischarge }) => {
  const showBotDetails = (index) => {
    onSelect(index);
  };

  const discharge = (id) => {
    fetch(`http://localhost:3000/bots/${id}`, { method: "DELETE" });
    onDischarge(id);
  };

  return (
    <section>
      <h2>Collection</h2>
      <Table striped bordered hover>
        <thead className="text-center">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Avatar</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="text-center">
          {collection.map(({ id, name, avatar_url }, index) => (
            <tr
              style={{ cursor: "pointer" }}
              key={id}
              onClick={() => showBotDetails(index)}
            >
              <td>{id}</td>
              <td>{name}</td>
              <td>
                <img className="img" src={avatar_url} alt="" />
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={(event) => {
                    event.stopPropagation();
                    discharge(id);
                  }}
                >
                  X
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export { BotCollection };
