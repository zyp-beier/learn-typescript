interface IPoint {
    x:number
    y:number
}
function addPoints(p1:IPoint,p2:IPoint):IPoint {
    let x = p1.x + p2.x
    let y = p1.y + p2.y
    return {x:x,y:y}
}

let newPoint = addPoints({x:1,y:3},{x:2,y:5})

console.log(newPoint)
