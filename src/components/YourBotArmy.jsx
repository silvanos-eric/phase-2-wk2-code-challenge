import { Table, Button } from ".";

const YourBotArmy = ({ armyList, onRelease }) => {
  const release = (id) => {
    onRelease(id);
  };

  return (
    <section>
      <h2>Army</h2>
      <Table striped bordered hover>
        <thead className="text-center">
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Avatar</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {armyList.length < 1 && (
            <p className="text-center">No Bot Enlisted.</p>
          )}
          {armyList.length > 0 &&
            armyList.map(({ id, name, avatar_url }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>
                  <img className="img" src={avatar_url} alt="" />
                </td>
                <td>
                  <Button
                    onClick={(event) => {
                      event.stopPropagation();
                      release(id);
                    }}
                  >
                    Release
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </section>
  );
};

export { YourBotArmy };
