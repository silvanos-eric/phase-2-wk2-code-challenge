import { Card, Button } from ".";

const BotDetails = ({ bot, onAdd }) => {
  const {
    avatar_url,
    id,
    name,
    health,
    damage,
    armor,
    bot_class,
    catchphrase,
  } = bot || {};

  const enlist = (id) => {
    onAdd(id);
  };

  return (
    <section>
      <h2>Bot Details</h2>
      {bot ? (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={avatar_url} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="pt-2">
              <p>
                <span className="fw-bold">ID:</span> {id}
              </p>
              <p>
                <span className="fw-bold">Health:</span> {health}
              </p>
              <p>
                <span className="fw-bold">Damage:</span> {damage}
              </p>
              <p>
                <span className="fw-bold">Armor:</span> {armor}
              </p>
              <p>
                <span className="fw-bold">Bot Class:</span> {bot_class}
              </p>
              <p>
                <span className="fw-bold">Cathphrase:</span> {catchphrase}
              </p>
            </Card.Text>
            <Card.Footer>
              <Button
                variant="success"
                onClick={(event) => {
                  event.stopPropagation();
                  enlist(id);
                }}
              >
                Enlist
              </Button>
            </Card.Footer>
          </Card.Body>
        </Card>
      ) : (
        <p>
          No Bot selected. Select one from the collection to display
          information.
        </p>
      )}
    </section>
  );
};

export { BotDetails };
