let myfriend = {
    name: 'Micheal Okpara',
    age: 16,
    address: 'No 21, Beulah',
    town: 'Ibadan',
    state: 'Oyo',
    nationality: 'Nigeria',
    hobbies: 'playing games, listening to music e.t.c'
}

function friend () {
    console.log('My best friend Name is ' + myfriend.name);
    console.log('My best friend Age is ' + myfriend.age);
    console.log('My best friend Address is ' + myfriend.address);
    console.log('My best friend Town is ' + myfriend.town);
    console.log('My best friend State is ' + myfriend.state);
    console.log('My best friend Nationality is ' + myfriend.nationality);
    console.log('My best friend Hobbies are ' + myfriend.hobbies);

    return '......'
}

module.exports.friend = friend;