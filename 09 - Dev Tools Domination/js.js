    const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('hello');

    // Interpolated
    console.log('Hi guys %s', ':)');

    // Styled
    console.log('%cI am a great text', 'font-size: 30px; background: cyan');

    // warning!
    console.warn('OH NOO!');

    // Error :|
    console.error('Error!');

    // Info
    console.info('I am an INFO');

    // Testing
    console.assert(1 === 2, 'That is wrong');

    // clearing
    console.clear();

    // Viewing DOM Elements
    //console.log(p);
    //console.dir(p);

    // Grouping together
    dogs.forEach(dog => {
      console.group(`${dog.name}`);
      console.log(`This is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age}`);
      console.groupEnd(`${dog.name}`);
    });

    // counting
    console.count('count');
    console.count('count');
    console.count('count');

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/arkejgit')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      })