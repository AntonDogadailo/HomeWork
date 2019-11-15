class Marker {
    constructor(color, ink, str) {
        this.color = color;
        this.ink = ink;
        this.str = str;
    };
    print(str) {
        this.str = str.value;
        let spaceArr = str.split(" ").length - 1;
        //let spaceDiffSymb = str.lenght - spaceArr;
        console.log(spaceDiffSymb);
        
        }
    }

let a = new Marker();
a.print(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);