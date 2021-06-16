// function hex(r, g, b) {
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
// }

// function rgb(r, g, b) {
//     return `rgb(${r}, ${g}, ${b})`
// }

// function makeColor(r, g, b) {
//     const color = {}
//     color.r = r
//     color.g = g
//     color.b = b
//     color.rgb = function () {
//         const { r, g, b } = this
//         return `rgb(${r}, ${g}, ${b})`
//     }
//     color.hex = function () {
//         const { r, g, b } = this
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//     }
//     return color
// }

function Color(r, g, b) {
    this.r = r
    this.g = g
    this.b = b
}

// สามารถสร้าง prototype property หรือ method ได้ เช่น
Color.prototype.rgb = function () {
    const { r, g, b } = this
    return `rgb(${r}, ${g}, ${b})`
}

Color.prototype.hex = function () {
    const { r, g, b } = this
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

Color.prototype.rgba = function (a = 1.0) {
    const { r, g, b } = this
    return `rgba(${r}, ${g}, ${b}, ${a})`
}

// มีความหมายเหมือนกับ Factory Function แต่สั้นกว่า ไม่ต้องใช้คำสั่ง return ด้วย สร้าง object ใหม่ และคืนค่า ให้อัตโนมัติ

// เปรียบเทียบกับ แบบ Factory Function, Factory Function ต้องสร้าง property method ให้กับ object เท่านั้น เพราะว่าไม่มี prototype แท้ๆ ของตัวเอง
function color(r, g, b) {
    const color = {}
    color.r = r
    color.g = g
    color.b = b
    return color
}

const color1 = new Color(30, 255, 50);
const color2 = new Color(50, 60, 70)
const colorF = color(30, 40, 50)
