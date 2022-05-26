/**
 * 1344. Angle Between Hands of a Clock
 *
 * Given two numbers, hour and minutes, return the smaller angle (in degrees) formed between the hour and the minute hand.
 * Answers within 10-5 of the actual value will be accepted as correct.
 *
 * Input: hour = 12, minutes = 30
 * Output: 165
 *
 * Input: hour = 1, minutes = 57. <--- this will fail if we dont do return Math.min(diff, 360-diff)
 * Output: 76.50000
 *
 * leetcode:https://leetcode.com/problems/angle-between-hands-of-a-clock/submissions/
 * leetcode-question:1344
 */

/** Time:O(1) and Space:O(1) */
var angleClock = function(hour, minutes) {
    let oneMinAngle = 6;    // (i.e 360/60 = 6)
    let oneHourAngle = 30;  // (i.e 360/12 = 30)
    
    /** hour angle explanation
    - if 1 hour then totalHourAngle is 1 * 30 = 30
    - If 10 hours then totalHourAngle is 10 * 30 = 300
    - if 12 hours then totalHourAngle is 12 * 30 = 360 but in reality the angle is 0 degree
    so we need to mod. i.e (hour % 12) * 30 
    - Important thing about hour hand is it FOLLOWS the minute hand, so there will
    be movement in hour hand. So considering that the formulat will be
       (hour % 12 + minutes/60) * 30
       */
    
    let minAngle = minutes * 6;
    let hourAngle = (hour % 12 + minutes/60 ) * 30;
    
    let diff = Math.abs(hourAngle - minAngle);
    return Math.min(diff, 360-diff)
    
};
