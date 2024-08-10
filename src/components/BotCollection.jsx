const BotCollection = ({ collection, onSelect, onDischarge }) => {
  const showBotDetails = (index) => {
    onSelect(index);
  };

  const discharge = (id) => {
    onDischarge(id);
  };

  return (
    <section>
      <h2>Collection</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Avatar</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {collection.map(({ id, name, avatar_url }, index) => (
            <tr key={id} onClick={() => showBotDetails(index)}>
              <td>{id}</td>
              <td>{name}</td>
              <td>
                <img src={avatar_url} alt="" />
              </td>
              <td>
                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    discharge(id);
                  }}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export { BotCollection };
