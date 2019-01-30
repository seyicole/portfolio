
// //changing the heading of an element//

// document.getElementsByClassName("text-center");
// [div#band.container.text-center, h3.text-center, p.text-center, a.text-center, a.text-center, a.text-center, div.row.text-center, h3.text-center, h3.text-center, footer.text-center]
// var myClass = document.getElementsByClassName("text-center");

// undefined
// myClass
// [div#band.container.text-center, h3.text-center, p.text-center, a.text-center, a.text-center, a.text-center, div.row.text-center, h3.text-center, h3.text-center, footer.text-center]
// var myH3 = myClass[0]
    
// undefined
// var = myH3 = myClass[1].getElementsByTagName("h3");
// VM3275:1 Uncaught SyntaxError: Unexpected token =
// var myH3 = myClass[1].getElementsByTagName("h3");
// undefined
// myH3
// []
// var = myH3 = myClass[1].getElementsByTagName("");
// VM3303:1 Uncaught SyntaxError: Unexpected token =
// var = myH3 = myClass[1].getElementsByTagName("");
// VM3309:1 Uncaught SyntaxError: Unexpected token =
// document.getElementByTagName("h3");
// VM3380:1 Uncaught TypeError: document.getElementByTagName is not a function
//     at <anonymous>:1:10
// (anonymous) @ VM3380:1
// document.getElementsByTagName("h3");
// [h3, h3, h3, h3.text-center, h3.text-center, h3.text-center]
// var myTag = document.getElementsByTagName("h3"); 
// undefined
// myTag
// [h3, h3, h3, h3.text-center, h3.text-center, h3.text-center]
// myTag[0].innerHTML = "Problem";
// "Problem"
// Navigated to file:///C:/Users/seyicole/Documents/EfiweOrg/contact.html
// var mypage = document.getElementsByClassName("text-center");
// undefined
// myPage
// <body id=​"myPage" data-spy=​"scroll" data-target=​".navbar" data-offset=​"50">​…​</body>​
// Navigated to file:///C:/Users/seyicole/Documents/EfiweOrg/contact.html
// var myText = document.getElementsByClassName("text-center");
// undefined
// myText
// [div#band.container.text-center, h3.text-center, p.text-center, a.text-center, a.text-center, a.text-center, div.row.text-center, h3.text-center, h3.text-center, footer.text-center]0: div#band.container.text-center1: h3.text-centeraccessKey: ""align: ""assignedSlot: nullattributes: NamedNodeMapbaseURI: 
// myText[1].textContent;
// "THE STORY/HOW THIS STARTED"
// myText.textContent = "My Story";
// "My Story"
// Navigated to file:///C:/Users/seyicole/Documents/EfiweOrg/contact.html

// //changing the background//

// var tip = document.getElementById("band");
// undefined
// tip
// <div id=​"band" class=​"container text-center">​…​</div>​
// tip.getAttribute("id");
// "band"
// tip.getAttribute("class");
// "container text-center"
// tip.setAttribute("class", "text");
// undefined
// tip.setAttribute("alt", "caramel");
// undefined
// tip.style;
// CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: ""…}
// tip.style.backgroundColor = "blue";
// "blue"

// //adding and elements//

// var newLi = document.createElement("li");
// undefined
// newLi
// <li>​</li>​
// var newA = document.creatElement("a");
// VM5322:1 Uncaught TypeError: document.creatElement is not a function
//     at <anonymous>:1:21
// (anonymous) @ VM5322:1
// ar newA = document.createElement("a");
// VM5326:1 Uncaught SyntaxError: Unexpected identifier
// var newA = document.createElement("a");
// undefined
// newA
// <a>​</a>​
// var menu = document.getElementById("myNavbar").getElementsByTagName("ul");
// undefined
// menu
// [ul.nav.navbar-nav.navbar-right, ul.dropdown-menu]0: ul.nav.navbar-nav.navbar-right1: ul.dropdown-menulength: 2__proto__: HTMLCollection
// menu.appendChild(newLi);
// VM5561:1 Uncaught TypeError: menu.appendChild is not a function
//     at <anonymous>:1:6
// (anonymous) @ VM5561:1
// menu[0].appendChild(newLi);
// <li>​</li>​
// newLi.appendChild(newA);
// <a>​</a>​
// newA.innerHTML = "Blog";
// "Blog"
// menu.insertBefore(newLi, menu.getElementsByTagName(("li")[5]);
// VM5843:1 Uncaught SyntaxError: missing ) after argument list
// menu.insertBefore(newLi, menu.getElementsByTagName("li")[5]);
// VM5847:1 Uncaught TypeError: menu.getElementsByTagName is not a function
//     at <anonymous>:1:31
// (anonymous) @ VM5847:1
// menu[0].insertBefore(newLi, menu[0].getElementsByTagName(("li")[5]);
// VM5945:1 Uncaught SyntaxError: missing ) after argument list
// menu[0].insertBefore(newLi, menu[0].getElementsByTagName("li")[5]);
// VM5961:1 Uncaught DOMException: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.
//     at <anonymous>:1:9
// (anonymous) @ VM5961:1
// menu[0].insertBefore(newLi, menu.getElementsByTagName("li")[5]);
// VM5969:1 Uncaught TypeError: menu.getElementsByTagName is not a function
//     at <anonymous>:1:34
// (anonymous) @ VM5969:1

// //styling//
// menu[0].insertBefore(newLi, menu[0].getElementsByTagName("li")[4]);
// <li>​…​</li>​
// var style = menu[0].getElementsByTagName("li")[4];
// undefined
// style
// <li>​…​</li>​
// style.setAttribute("style", "font-size: 10px");
// undefined
// style.style.fontSize = "30px";
// "30px"
// style.style.fontSize = "20px";
// "20px"
// style.style.fontSize = "15px";
// "15px"
// style.style.fontWeight = "lighter";
// "lighter"
// style.style.fontSize = "13px";
// "13px"


// //removing elements//

// var parent = getElementById("myNavbar").getElementsByTagName("ul")[0];
// VM6705:1 Uncaught ReferenceError: getElementById is not defined
//     at <anonymous>:1:14
// (anonymous) @ VM6705:1
// var parent = document.getElementById("myNavbar").getElementsByTagName("ul")[0];
// undefined
// parent
// <ul class=​"nav navbar-nav navbar-right">​…​</ul>​
// var child = parent.getElementsByTagName("li")[0];
// undefined
// var child = parent.getElementsByTagName("li")[4];
// undefined
// child
// <li style=​"font-size:​ 13px;​ font-weight:​ lighter;​">​…​</li>​
// var removed = parent.removeChild(child);
// undefined
// parent.appendChild(child);
// <li style=​"font-size:​ 13px;​ font-weight:​ lighter;​">​…​</li>​
// parent.insertBefore(child)[4];
// VM7241:1 Uncaught TypeError: Failed to execute 'insertBefore' on 'Node': 2 arguments required, but only 1 present.
//     at <anonymous>:1:8
// (anonymous) @ VM7241:1
// child.insertBefore(parent,  child.getElementsByTagName("li")[4]);
// VM7363:1 Uncaught DOMException: Failed to execute 'insertBefore' on 'Node': The new child element contains the parent.
//     at <anonymous>:1:7
// (anonymous) @ VM7363:1
// parent.insertBefore("li")[4];
// VM7381:1 Uncaught TypeError: Failed to execute 'insertBefore' on 'Node': 2 arguments required, but only 1 present.
//     at <anonymous>:1:8
// (anonymous) @ VM7381:1
// parent.insertBefore(removed)[4];
// VM7407:1 Uncaught TypeError: Failed to execute 'insertBefore' on 'Node': 2 arguments required, but only 1 present.
//     at <anonymous>:1:8
// (anonymous) @ VM7407:1
// child.insertBefore(removed, child.getElementsByTagName("li")[4]);
// VM7439:1 Uncaught DOMException: Failed to execute 'insertBefore' on 'Node': The new child element contains the parent.
//     at <anonymous>:1:7
// (anonymous) @ VM7439:1
// child.insertBefore(parent, child.getElementsByTagName("li")[4]);
// VM7445:1 Uncaught DOMException: Failed to execute 'insertBefore' on 'Node': The new child element contains the parent.
//     at <anonymous>:1:7
// (anonymous) @ VM7445:1
// removed.insertBefore(parent, removed.getElementsByTagName("li")[4]);
// VM7499:1 Uncaught DOMException: Failed to execute 'insertBefore' on 'Node': The new child element contains the parent.
//     at <anonymous>:1:9
// (anonymous) @ VM7499:1
// emoved.insertBefore(child, removed.getElementsByTagName("li")[4]);
// VM7523:1 Uncaught ReferenceError: emoved is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM7523:1
// removed.insertBefore(child, removed.getElementsByTagName("li")[4]);
// VM7549:1 Uncaught DOMException: Failed to execute 'insertBefore' on 'Node': The new child element contains the parent.
//     at <anonymous>:1:9
// (anonymous) @ VM7549:1
// parent.insertBefore(child, parent.getElementsByTagName("li")[4]);
// <li style=​"font-size:​ 13px;​ font-weight:​ lighter;​">​…​</li>​