// Cargar y generar el menú dinámico desde el archivo JSON
fetch('menu.json')
    .then(response => response.json())
    .then(data => {
        const menu = data.menu;
        const menuContainer = document.getElementById('menu');

        // Recorrer cada ítem del menú
        menu.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.url;
            a.innerText = item.title;

            li.appendChild(a);

            // Si el ítem tiene submenú, crearlo
            if (item.subMenu) {
                const ul = document.createElement('ul');
                item.subMenu.forEach(subItem => {
                    const subLi = document.createElement('li');
                    const subA = document.createElement('a');
                    subA.href = subItem.url;
                    subA.innerText = subItem.title;
                    subLi.appendChild(subA);
                    ul.appendChild(subLi);
                });
                li.appendChild(ul);
            }

            menuContainer.appendChild(li);
        });
    })
    .catch(error => {
        console.error('Error al cargar el menú:', error);
    });
