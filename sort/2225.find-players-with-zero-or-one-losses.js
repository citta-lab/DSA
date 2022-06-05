/**
 * 2225. Find Players With Zero or One Losses
 * 
 * You are given an integer array matches where matches[i] = [winneri, loseri] 
 * indicates that the player winneri defeated player loseri in a match.
 * 
 * Return a list answer of size 2 where:
 * answer[0] is a list of all players that have not lost any matches.
 * answer[1] is a list of all players that have lost exactly one match.
 * 
 * The values in the two lists should be returned in increasing order.
 * Note:
 * You should only consider the players that have played at least one match.
 * The testcases will be generated such that no two matches will have the same outcome.
 * 
 * Example:
 * Input: matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
 * Output: [[1,2,10],[4,5,7,8]]
 * Explanation:
 * Players 1, 2, and 10 have not lost any matches.
 * Players 4, 5, 7, and 8 each have lost one match.
 * Players 3, 6, and 9 each have lost two matches.
 * Thus, answer[0] = [1,2,10] and answer[1] = [4,5,7,8].
 * 
 * leetcode:https://leetcode.com/problems/find-players-with-zero-or-one-losses/
 * leetcode-question:2225
 * 
 * Hint:
 * Time:O(N) and Space:O(N)
 * - Use object instead of Map as Map retains the order but we need things to be in sorted order
 * - loop though matches and add entry to prepare map of {"player": "loss"}
 * - for winner, it would be `{ "winner": 0}` as winner doesnt have loss 
 * - for loser, it would be `{ "loser" : map[loser] + 1}`
 * - by doing this we are also making sure winner gets updated, if they EVER lose with others
 */

 var findWinners = function(matches) {
  
    /** lets keep everyone and only increment their value if they 
    have lost */
    
    let losers = {}
    for(let [winner, loser] of matches){
        
        if(!losers[winner])losers[winner] = 0;
        
        if(!losers[loser]) losers[loser] = 0;
        losers[loser] += 1
    }
    
    console.log(losers); // { '1': 0, '2':0, '3': 2, '4':1, .... }
    
    let result = [[], []];
    for(let player of Object.keys(losers)){
        if(losers[player] === 0) result[0].push(player);
        if(losers[player] === 1) result[1].push(player);
    }
    
    return result;
};