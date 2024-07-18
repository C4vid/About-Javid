fetch('https://jsonplaceholder.typicode.com/users')
 .then(response => response.json())
 .then(data => {


    // const firstElement = document.createElement('p');
    // firstElement.textContent = `First element: ${JSON.stringify(data[1])}`;
    // document.body.appendChild(firstElement);

    
    const list = document.createElement('ul');
    data.forEach(element => {
      const listItem = document.createElement('li');
      listItem.textContent = JSON.stringify(element);
      list.appendChild(listItem);
    });
    document.body.appendChild(list);
  })

  .catch(error => console.error('Error:', error));