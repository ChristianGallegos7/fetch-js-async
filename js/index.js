const API = 'https://jsonplaceholder.typicode.com/todos';
const app = document.getElementById('app');

const getData = async () => {
   try {
    const res = await fetch(API)
    const data = await res.json()

    if(data.length === 0){
        app.innerHTML = `<li>NO HAY DATOS</li>`
        return;
    }

    const ul = document.createElement('ul');

    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `
        ID: ${item.id} 
        TITLE: ${item.title} 
        STATUS: ${item.completed}
        `
        ul.appendChild(li)
    })

    app.appendChild(ul)
   } catch (error) {
    console.error('Error fetching data:', error);
    app.innerHTML = '<p>Error al obtener los datos.</p>';
   }
}
getData()



