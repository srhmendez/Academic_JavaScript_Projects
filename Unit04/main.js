//title and slogan js
document.querySelector('#title').innerText = "The Arborist"
document.querySelector('#slogan').innerText = "Events and Arrays"

//create an array with the trees listed

const trees = ['oak', 'Pine', 'aspen', 'Bald Cypress']

const error = document.querySelector('#error')
const displayResults = document.querySelector('#treelist')

displayResults.textContent = 'Testing right here'
error.textContent = 'testing'

//display the lsit of trees inside the display treelist div

const listTrees = () => {
    let treeList = ""
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })
    displayResults.innerHTML = `${treeList} <span>${trees.length} elements long </span>`
}
listTrees()


//Add a redwood tree to the end of the tree list

document.querySelector('#add_redwood').onclick = () => {
    trees.push('redwood')
    listTrees();
}

//Add a pear tree to the start of the tree list

document.querySelector('#add_pear').onclick = () => {
    trees.unshift('pear')
    listTrees();
}

//remove the first tree from the list

document.querySelector('#remove_tree1').onclick = () => {
    trees.shift('pear')
    listTrees();
}

//remove the second tree from the list

document.querySelector('#remove_tree2').onclick = () => {
    trees.splice(1,1);
    listTrees();
}

//Remove the last tree from the list

document.querySelector('#remove_treeLast').onclick = () => {
    trees.pop();
    listTrees();
}



//Turns the strings into all lowercase letters

const newListTrees = () => {
    let treeList = "";
    newTrees.forEach(tree => {
        treeList += `${tree} <br>`

    })
    displayResults.innerHTML = `${treeList} <span>There are ${newTrees.length} elements long</span>`;
}

//Sort list of trees A-Z

document.querySelector('#sortTrees').onclick = () => {
    trees.sort();
    listTrees();
}

//Lower Case of Array Items

document.querySelector('#lowerTrees').onclick = () => {
    let treeList = trees.map(tree => tree.toLowerCase());
    newListTrees();
}


//Show the Third Tree
document.querySelector('#showName3').onclick = () => {


    if(TREES.length < 3) {
        document.querySelector('#errList').innerHTML = `<br> <strong> We're sorry, the array  needs to have at least three items to show only the third item.</strong>`;
        } 
        else 
        {
        
        newTREES = TREES.slice(2, 3);
        newLISTTREES();
    }   

   
}

//Show the Fourth Tree
document.querySelector('#showName4').onclick = () => {

    if(trees.length < 4) {
        
        document.querySelector('#errList').innerHTML = `<br> <strong> ERROR! Array needs more than 4 items to show only the fourth. </strong>`;
    }
    else {
 
        newTrees = Trees.slice(3);
        newlistTrees();
    }
}