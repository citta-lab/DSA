/** 
 * 
 * 1515. Best Position for a Service Centre
 * 
 * A delivery company wants to build a new service center in a new city. 
 * The company knows the positions of all the customers in this city on a 
 * 2D-Map and wants to build the new center in 
 * a position such that the sum of the euclidean distances to all customers 
 * is minimum.
 * 
 * Input: positions = [[0,1],[1,0],[1,2],[2,1]]
 * Output: 4.00000
 * 
 * Input: positions = [[1,1],[3,3]]
 * Output: 2.82843
 * 
 * leetcode-question:1515
 * leetcode:https://leetcode.com/problems/best-position-for-a-service-centre/
 */

 var getMinDistSum = function(positions) {
    
    /** final and last step we will stop the problem */
    const MIN_STEP_ACCURACY = 0.0000001;
    
    /** directions */
    const DIRECTIONS = [[-1,0], [1,0], [0,-1],[0,1]];
    
    /** Step 1: */
    // starting point of co-ordinates 
    let x = 0;
    let y = 0;
    
    // calculating total distance on x and y then divide by position length so we move closer to middle than starting the calculation from 0,0 co-ordinates
    for(let position of positions){
        const [xPosition, yPosition] = position;
        x += xPosition;
        y += yPosition;
    }
    
    x = x / positions.length;
    y = y / positions.length; 
    
    /** Step 2: */
    // storing these co-ordinates and distance to this x,y from all positions 
    let totalDistance = calculateDist(positions, x, y);
    let centerPoint = new Coordinates(x,y, totalDistance);
    
    /** Step 2: */
    // steps we start taking from x and y
    let STEP = 50.0; 
    
    while(STEP > MIN_STEP_ACCURACY){
        let minDist = centerPoint;
        
        for(let dir of DIRECTIONS){
            let dX = centerPoint.x + dir[0] * STEP;
            let dY = centerPoint.y + dir[1] * STEP;
            let newTotalDist = calculateDist(positions, dX, dY);
            
            if(newTotalDist < centerPoint.dist){
                minDist = new Coordinates(dX, dY, newTotalDist);
            }
            
            /** increasing precision by reudicng steps when we feel we are far */
            if(centerPoint === minDist){
                STEP = STEP / 2
            }
            
            centerPoint = minDist;    
        }
    }
    return centerPoint.dist; 
};

function calculateDist(positions, x , y){
    let totalDist = 0;
    for(let position of positions){
        totalDist = totalDist + distFormula(position, x, y);
    }
    
    return totalDist;
}


function distFormula(position, x, y){
    return Math.sqrt(Math.pow((x - position[0]),2) + Math.pow((y - position[1]),2))
}

class Coordinates {
    constructor(x, y, dist){
        this.x = x;
        this.y = y;
        this.dist = dist
    }
}
