const camera = {
    price : 600,
    weight : 2000,
    myDes :() => {
        return `This canon camera is of ${this.price}$ `;
    }
}

console.log(camera.myDes());
