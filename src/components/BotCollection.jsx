const BotCollection = ({ collection }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Avatar</th>
      </tr>
    </thead>
    <tbody>
      {collection.map(({ id, name, avatar_url }) => (
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
);

export { BotCollection };
