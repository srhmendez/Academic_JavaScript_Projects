//title and slogan js
document.querySelector('#title').innerText = "The Arborist"
document.querySelector('#slogan').innerText = "Events and Arrays"

//create an array with the trees listed

const trees = ['oak', 'Pine', 'aspen', 'Bald Cypress']

const error = document.querySelector('#error')
const displayResults = document.querySelector('#treelist')

//displayResults.textContent = 'Testing right here'
//error.textContent = 'testing'

//display the lsit of trees inside the display treelist div

const listTrees = () => {
    let treeList = ""
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })
    displayResults.innerHTML = `${treeList} <span>${trees.length} elements long </span>`
};
listTrees()


//Add a redwood tree to the end of the tree list

document.querySelector('#add_redwood').onclick = () => {
    trees.push('redwood')
    listTrees();
};

//Add a pear tree to the start of the tree list

document.querySelector('#add_pear').onclick = () => {
    trees.unshift('pear')
    listTrees();
};

//remove the first tree from the list

document.querySelector('#remove_tree1').onclick = () => {
  if (trees.length > 1) {
    trees.shift();
    listTrees();
  } else {
    listTrees();

    error.textContent = "You need at least one tree to delete the 1st tree!";
    displayResults.textContent = "";
  }
};

//remove the second tree from the list

document.querySelector('#remove_tree2').onclick = () => {
    if (trees.length < 2) {
      error.textContent = "You need at least 2 trees to delete the 2nd tree!"
    } else if (trees.length >= 2) {
      trees.splice(1,1)
    }
    listTrees();
}

//Remove the last tree from the list

document.querySelector('#remove_treeLast').onclick = () => {
    if (trees.length > 1) {
        trees.pop();
        listTrees();
    } else {
        listTrees();

        error.textContent = "You need at least one tree in the list to remove it!"
        displayResults.textContent = "";
    }  
};





//Sort the array 

document.querySelector('#sortTrees').onclick = () => {
  if (trees.length > 0) {
      trees.sort((a, b) => {
          return a.toLowerCase().localeCompare(b.toLowerCase())
      })
      listTrees();

      errorElement.textContent = ''
  }
  else {

      errorElement.textContent = "Can't sort without any trees in the list."
  }
}
//make all trees lowercase

document.querySelector('#lowerTrees').onclick = () => {
    let treeList = []
    treeList = trees.map(trees => trees.toLowerCase())
    trees.splice(0, treeList.length, ...treeList)
    listTrees();

};



//Show the Third Tree
document.querySelector("#showName3").onclick = () => {
    if (trees.length < 3) {
      displayResults.innerHTML = "";
      error.innerHTML = "There is no tree 3 to display!!!";
    } else {
      treeList = [...trees];
      displayResults.innerHTML = `Tree #3 is: ${treeList[2]}`;
    }
  };

//Show the Fourth Tree
document.querySelector("#showName4").onclick = () => {
    if (trees.length < 4) {
      displayResults.innerHTML = "";
      error.textContent = "There is no tree 4 to display!!!";
    } else {
      //console.log(trees.length);
      treeList = [...trees];
      displayResults.innerHTML = `Tree # 4: is ${treeList[3]}`;
      //console.log("check");
    }
  };