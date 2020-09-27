const Engineer = require("./Engineer");

function generateCardInfo(name, role, id, email, extra){
    let extraCard = '';

    if(role === 'Engineer'){
        extraCard = `<a href='github.com/${extra}'>Github: ${extra}</a>`
    }else if(role === 'Manager'){
        extraCard = `Office Number: ${extra}`
    }else if(role === 'Intern'){
        extraCard = `School: ${extra}`
    }else{
        extraCard = '';
    }

    return `
<div id = card>
    <div id='card-head'>
        <h2>${name}</h2>
        <h2>${role}</h2>
    </div>
    <div id="card-body">
        <p>ID: ${id}</p>
        <p>Email: ${email}</p>
        <p>${extraCard}</p>
    </div>
</div>
    `
}

function generateHtml(cardInfo){
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<header class="red-background white-text">
    <h1>My Team</h1>
<header>


<section class = "flex">
${cardInfo}
</section>


</body>
</html>
    `
}

module.exports = [generateCardInfo, generateHtml]