/**
 *
 * 1604. Alert Using Same Key-Card Three or More Times in a One Hour Period
 * 
 * LeetCode company workers use key-cards to unlock office doors. 
 * Each time a worker uses their key-card, the security system saves the worker's name and the time when it was used.
 * The system emits an alert if any worker uses the key-card three or more times in a one-hour period.
 *
 * You are given a list of strings keyName and keyTime where [keyName[i], keyTime[i]] corresponds 
 * to a person's name and the time when their key-card was used in a single day.
 *
 * Access times are given in the 24-hour time format "HH:MM", such as "23:51" and "09:49".
 * Return a list of unique worker names who received an alert for frequent keycard use.
 * Sort the names in ascending order alphabetically.
 *
 * Notice that "10:00" - "11:00" is considered to be within a one-hour period, 
 * while "22:51" - "23:52" is not considered to be within a one-hour period.
 *
 * 
 * Input: keyName = ["daniel","daniel","daniel","luis","luis","luis","luis"],
 * keyTime = ["10:00","10:40","11:00","09:00","11:00","13:00","15:00"]
 *
 * Output: ["daniel"]
 * Explanation: "daniel" used the keycard 3 times in a one-hour period ("10:00","10:40", "11:00").
 *
 * Hint:
 * - will need to build adjList kind of data where name:times are mapped per person
 * - if we have times array more than 2 per name then we need to sort so we have it in order
 * - use a helper to find if it has been accessed with in an hour but more than 3 times
 */

var alertNames = function(keyName, keyTime) {
    // so we don't keep duplicates
    const abusers = new Set();
    
    // map: name->times[] (sorted) 
    const times = {};
    
    
    for (let i=0; i<keyName.length; i++) {
        const name = keyName[i];
        const time = keyTime[i];
       
        /** building adjList */
        if (times[name] == null) times[name] = [];
        times[name].push(time);
        
        /** if we have more than two then we should sort the time */
        if (times[name].length > 2) {
            
            times[name].sort();
            const len = times[name].length;
            
            // we check all triples for a time difference below 1 hour.
            // as times are sorted, we need to check all i and i+2
            for (let i=0; i<len-2; i++) {
                if (belowHour(times[name][i], times[name][i+2])) {    
                    abusers.add(name);
                }
            }
        }
        
    }
    const ar = Array.from(abusers);
    
    // sort them lexicographically
    ar.sort();
    return ar;
        
    /*
    same hour: true
    hour diff is above 1: false
    hour diff is 1: m2 must be <= m1
    */
    function belowHour(t1, t2) {
        const [h1, m1] = t1.split(':').map(num => parseInt(num));
        const [h2, m2] = t2.split(':').map(num => parseInt(num));
        if (h1 === h2) return true;
        if (h2-h1 > 1) return false;
        if (m2 <= m1) return true;
    }
};
  
