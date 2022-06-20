let bestFriend = {
    name: 'Micheal Okpara',
    age: 16,
    address: 'No 21, Beulah',
    town: 'Ibadan',
    state: 'Oyo',
    nationality: 'Nigeria',
    hobbies: 'playing games, listening to music e.t.c'
}

function myFriend () {
    console.log('My best friend Name is ' + bestFriend.name);
    console.log('My best friend Age is ' + bestFriend.age);
    console.log('My best friend Address is ' + bestFriend.address);
    console.log('My best friend Town is ' + bestFriend.town);
    console.log('My best friend State is ' + bestFriend.state  + ' State');
    console.log('My best friend Nationality is ' + bestFriend.nationality);
    console.log('My best friend Hobbies are ' + bestFriend.hobbies);

    return '......'
}

module.exports.myFriend = myFriend;