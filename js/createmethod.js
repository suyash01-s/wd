let body=document.body
let div=document.createElement("div")

div.style.background="linear-gradient(blue,black)"
div.style.height="300px"
div.style.width="100%"
div.style.padding = "50px";
div.style.margin = "20px";
div.style.textAlign = "center";
div.style.color = "white";

div.innerHTML +=`<h1>WELCOME TO CSS</h1>
<button onclick="myclick()">click</button>
<table rules="all" border="1px" bgcolor="orange" cellpadding="10px">
        <tr>
            <th>roll</th>
            <th>name</th>
            <th>class</th>
            <th>marks</th>
        </tr>
        <tr>
            <td>1</td>
            <td>a</td>
            <td>bcs</td>
            <td>35</td>
        </tr>
        <tr>
            <td>2</td>
            <td>b</td>
            <td>bsc</td>
            <td>40</td>
        </tr>

    </table><br>`
body.appendChild(div)