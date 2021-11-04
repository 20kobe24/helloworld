export default function FamilyMembers() {
  let family = [
    { name: 'Leo', age: 18 },
    { name: 'Petra', age: 16 },
    { name: 'Salih', age: 26 },
    { name: 'Maron', age: 32 },
    { name: 'Lous', age: 36 },
    { name: 'Müller', age: 26 },
    { name: 'Eato', age: 13 },
    { name: 'Rony', age: 11 },
    { name: 'Body', age: 17 },
    { name: 'Sano', age: 23 },
    { name: 'Sandro', age: 16 },
  ];
  /*JSX*/
  const list = family.map((person, index) => (
    <li key={index}> {person.name}</li>
  ));
  return (
    <div>
      <ul class="list-group">
        <li class="list-group-item list-group-item-danger">{list}</li>
      </ul>
    </div>
  );
}
