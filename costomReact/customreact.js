
function customRender(reactElement,container){
   const domElement = document.createElement(reactElement.type)
console.log(domElement);
   domElement.innerHTML=reactElement.children;
//    domElement.setAttribute("href",reactElement.props.herf)
//    domElement.setAttribute("target",reactElement.props.target)

for (const key in reactElement.props) {
    domElement.setAttribute(`${key}`,reactElement.props[key])
}
container.appendChild(domElement)
}

const reactElement ={
    type: 'a',
    props :{
        herf :"https://google.com",
        target:"_blank"
    },
    children:"click me "
}

const maincontainer = document.getElementById("root");

customRender(reactElement,maincontainer)