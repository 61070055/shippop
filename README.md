# Homework

## ข้อ 01 Basic Javascript
1.1) เขียน function แสดงค่าทาง console โดย function รับ parameter 2 ตัว
``` 
var firstName = prompt("Firstname : ")
var lastName = prompt("Lastname :")

if (firstName == "Shippop"){
    console.log("Best Online Shipping Platform")
} else {
    console.log("Hello Shippop, My name is " + firstName + " " + lastName )
}
```
2.2) First Class Function คืออะไร กรุณาแสดงตัวอย่างพร้อมคำอธิบาย

คือ Function ที่สามารถทำให้เป็นตัวแปรได ้เช่น
```
var shippop = function(a + b){
    return a + b;
}
```

## ข้อ 02 Database Design 
เคยใช้ MySQL, SQLite, PostgreSQL, NoSQL ครับ
ส่วนปัญหาที่พบระหว่างการทำงานก็คือ
- เกิดความซ้ำซ้อนของข้อมูล ทำให้กินเนื้อที่ และมีโอกาสตรวจสอบได้ผิดพลาด
- เมื่อมีข้อมูลมากจะทำให้การค้นหาใช้เวลานานเวลา Query

ส่วนวิธีเเก้ปัญหาคือ การนำ Normalization มาใช้ครับ จะช่วยให้ลดความซ้ำซ้อนของข้อมูลได้ เมื่อไม่เกิดความซ้ำซ้อนปัญหาที่เหลืออยู่ก็จะหายไปด้วยครับ

## ข้อ 03 ทำโจทย์ตามตำแหน่งที่ตนเองสมัคร สำหรับ Frontend
ใช้ react  สามารถใช้งาน add to cart ได้


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
