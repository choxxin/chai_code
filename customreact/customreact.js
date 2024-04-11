//Here we will learn that how  react woks behind the scene

function customRender(reactElement, Cointainer) {
  const domElement = document.createElement(reactElement.type); //crate elemnt is the function to create elemnt ,we creating dom elemnt
  domElement.innerHTML = reactElement.children; //putting the children inside
  for (const prop in reactElement.props) {
    if (prop === "children") continue; //to avoid infutire mistake
    domElement.setAttribute(prop, reactElement.props[prop]); //taking every props and implemnting it
  }
  Cointainer.appendChild(domElement); //putting all of it into root cointainer
}

const reactElement = {
  //we are creating our own  elemnt which takes hrml type and its detail
  type: "a",
  props: {
    href: "https.//google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainCointainer = document.querySelector("#root"); //getting the main part og react

customRender(reactElement, mainCointainer); //custom render will take the code from react elemnt and put it into maincinainer (our root)

//GET ALL THE DETAILS IN GITHUB OF REact
