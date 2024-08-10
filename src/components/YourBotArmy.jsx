const YourBotArmy = ({ armyList }) => {
  return (
    <section>
      <h2>Army</h2>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Avatar</td>
          </tr>
        </thead>
        <tbody>
          {armyList.map(({ id, name, avatar_url }) => (
            <tr key={id}>
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

export { YourBotArmy };
