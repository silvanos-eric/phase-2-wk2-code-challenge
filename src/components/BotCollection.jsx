const BotCollection = ({ collection, onSelect }) => {
  const showBotDetails = (index) => {
    onSelect(index);
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
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export { BotCollection };
