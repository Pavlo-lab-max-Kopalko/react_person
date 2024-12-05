export const Person = ({ person }) => {
  let partner = '';

  if (person.sex === 'm') {
    partner = 'wife';
  } else {
    partner = 'husbant';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && <p className="Person__age">I am {person.age}</p>}
      {person.isMarried === true && (
        <p className="Person__partner">
          {person.partnerName} is my {partner}
        </p>
      )}
    </section>
  );
};
