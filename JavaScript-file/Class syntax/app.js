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

// function Color(r, g, b) {
//     this.r = r
//     this.g = g
//     this.b = b
// }

// // สามารถสร้าง prototype property หรือ method ได้ เช่น
// Color.prototype.rgb = function () {
//     const { r, g, b } = this
//     return `rgb(${r}, ${g}, ${b})`
// }

// Color.prototype.hex = function () {
//     const { r, g, b } = this
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
// }

// Color.prototype.rgba = function (a = 1.0) {
//     const { r, g, b } = this
//     return `rgba(${r}, ${g}, ${b}, ${a})`
// }

// // มีความหมายเหมือนกับ Factory Function แต่สั้นกว่า ไม่ต้องใช้คำสั่ง return ด้วย สร้าง object ใหม่ และคืนค่า ให้อัตโนมัติ

// // เปรียบเทียบกับ แบบ Factory Function, Factory Function ต้องสร้าง property method ให้กับ object เท่านั้น เพราะว่าไม่มี prototype แท้ๆ ของตัวเอง
// function color(r, g, b) {
//     const color = {}
//     color.r = r
//     color.g = g
//     color.b = b
//     return color
// }

// const color1 = new Color(30, 255, 50);
// const color2 = new Color(50, 60, 70)
// const colorF = color(30, 40, 50)


// Classes very Important most use

// class Color {
//     constructor(r, g, b, name) {
//         this.r = r
//         this.g = g
//         this.b = b
//         this.name = name
//     }

//     innerRGB() {
//         const { r, g, b } = this
//         return `${r}, ${g}, ${b}`
//     }

//     rgb() {
//         return `rgb(${this.innerRGB()})`
//     }
//     rgba(a = 1.0) {
//         return `rgba(${this.innerRGB()}, ${a})`
//     }
//     hex() {
//         const { r, g, b } = this
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//     }
// }



// more //////////

class Color {
    constructor(r, g, b) {
        this.r = r
        this.g = g
        this.b = b
        this.calHSL()
    }
    innerRGB() {
        const { r, g, b } = this
        return `${r}, ${g}, ${b}`
    }

    rgb() {
        return `rgb(${this.innerRGB()})`
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`
    }
    hex() {
        const { r, g, b } = this
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    }

    hsl() {
        const { h, s, l } = this;
        return `hsl(${h},${s}%, ${l}%)`;
    }
    fulllySaturated() {
        const { h, l } = this;
        return `hsl(${h},100%, ${l}%)`;
    }
    opposite() {
        const { h, s, l } = this;
        const newHue = (h + 180) % 360;
        return `hsl(${newHue},${s}%, ${l}%)`;
    }

    calHSL() {
        let { r, g, b } = this

        r /= 255
        g /= 255
        b /= 255

        let cMin = Math.min(r, g, b),
            cMax = Math.max(r, g, b),
            delta = cMax - cMin,
            h = 0,
            s = 0,
            l = 0;

        if (delta == 0) h = 0;
        else if (cMax == r) h = ((g - b) / delta) % 6; //red is max
        else if (cMax == g) h = ((b - r) / delta) + 2; // green is max
        else h = ((r - g) / delta) + 4; // blue is max

        h = Math.round(h * 60)

        // Make negative hues positive behind 360°
        if (h < 0) h += 360;
        // Calculate lightness
        l = (cMax + cMin) / 2;

        // Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        // Multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
        this.h = h;
        this.s = s;
        this.l = l;
    }
}

const c1 = new Color(245, 20, 10, 'brightRed')
const c2 = new Color(255, 255, 255, 'white')