document.querySelector('#title').innerHTML = "Truck Power"

// Truck Power
  
function createMenu() {
    //duplicate links from primary nav
    menuLinks = document.querySelectorAll("ul#primaryNav li a");
    console.log(menuLinks);
    let newUl = document.createElement("ul");
    //create the new list items for the bottom of the page
    menuLinks.forEach(menuLink => {
      
      let newLi = document.createElement("li");
      let newLink = document.createElement("a");


      newLink.setAttribute("href", menuLink.getAttribute("href"));
      newLi.appendChild(newLink);

      document.querySelector("#smallNavArea").appendChild(newUl);
      newUl.appendChild(newLi);


      console.log(menuLink.text);
      newLink.textContent = menuLink.innerText;
    });
  }
  
  createMenu();