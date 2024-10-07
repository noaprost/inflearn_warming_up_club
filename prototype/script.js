function Person(name, email, birthday) {
  const person = Object.create(personPrototype);
  person.name = name;
  person.email = email;
  person.birthday = birthday;
  return person;
}

const personPrototype = {
  calculateAge() {
    const diff = Date.new() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  },
};
