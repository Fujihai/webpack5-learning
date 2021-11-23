import "./heading.js";
import createHeading from "./heading.js";
import "./main.css";
import supercar from "./supercar.jpg";

const heading = createHeading();

document.body.append(heading);

// 创建图片并导入;
const img = new Image();
img.src = supercar;

document.body.append(img);
