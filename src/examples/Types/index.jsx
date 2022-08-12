function Types() {
  const string = "Name...";
  const intenger = 15;
  const decimal = 10.432432;
  const boolean = true;
  const date = new Date();

  const array = [5, 10, 15, 20];
  const object = {
    firstname: 'Lorem',
    lastname: 'Ipsum'
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>{string}</div>
      <div>{intenger}</div>
      <div>{decimal}</div>
      <div>{boolean.toString()}</div>
      <div>{date.toLocaleDateString()}</div>

      <p style={{ marginTop: 20 }}>List:</p>
      <ul>
        {array.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <p style={{ marginTop: 20 }}>Object:</p>
      <div>
        Uporabnik: {object.firstname} {object.lastname}
      </div>
    </div>
  );
}

export default Types;
