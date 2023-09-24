import inquirer from "inquirer"; // inquirer is used to prompt the user for their input
import qr from "qr-image"; // qr-image is used to generate the QR code

import fs from "fs"; // fs is used to write the QR code to a file

inquirer.prompt([{
    message: "Paste your URL here", name: "URL"
}]).then(answers => {
    let url = answers.URL;
    let qr_img = qr.image(url)
    qr_img.pipe(fs.createWriteStream('qr_img.png'));
    fs.writeFile('URL.txt', url, (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Successfully Written to File.");
    });
})
    .catch(error => {
        console.log("Error", error);
    });