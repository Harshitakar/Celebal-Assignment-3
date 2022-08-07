var ul = document.getElementById('list')
var li;
var add = document.getElementById('add')
add.addEventListener('click', adding);
var remove = document.getElementById('remove')
remove.addEventListener('click', removing);


function adding() {
    var item = document.querySelector('input').value;
    var toodo = document.createTextNode(item);
    if (item == '') {
        return false
    } else {
        li = document.createElement('li')
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'newvalue')
        var label = document.createElement('label')
        label.setAttribute('id','lab')

        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(toodo)
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0])
        li.className = 'visual'

    }
}


function removing() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }

    }
}