const fs = require('fs');

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
<div class="card w-25">
    <div class="text-light bg-primary card-header">
        <h2>${name}</h2>
        <h2>${role}</h2>
    </div>
    <div id="card-body">
    <ul>
        <li class="list-group-item" >ID: ${id}</li>
        <li class="list-group-item" >Email: ${email}</li>
        <li class="list-group-item" >${extraCard}</li>
    </ul> 
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
    <title>Team Profiles</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
</head>
<body>

<header class="text-light bg-danger">
    <h1>My Team</h1>
</header>


<section class = "container">
${cardInfo}
</section>


</body>
</html>
    `
}

function writeFile(html){
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', html, err => {
        if (err) {
            reject(err);

            return;
        }

        resolve({
            ok: true,
            message: 'File created!'
        });
      });
    });
}

module.exports = {generateCardInfo, generateHtml, writeFile}