/**
 * 
 * You're asked to go through the days and add up all the pageviews, uniques. 
 * Find day that had the most and least traffic. 
 * Then you're asked to find the 7 days where the traffic was highest.
 * 
 * https://leetcode.com/discuss/interview-experience/1047320/reddit-phone-screen-front-end-reject
 */

 const daysAndTraffic = {
	'01-01-2020': {
	  'ios': { unique: 123, pageviews: 456 },
	  'android': { unique: 345, pageviews: 789 }
	},
	'01-02-2020': {
	  'ios': { unique: 1234, pageviews: 4567 },
	  'android': { unique: 3456, pageviews: 6789 }
	},
    '01-03-2020': {
        'ios': { unique: 121, pageviews: 467 },
        'android': { unique: 356, pageviews: 689 }
    },
      '01-04-2020': {
        'ios': { unique: 122, pageviews: 457 },
        'android': { unique: 345, pageviews: 689 }
    },
      '01-05-2020': {
        'ios': { unique: 34, pageviews: 67 },
        'android': { unique: 34, pageviews: 89 }
    },
      '01-06-2020': {
        'ios': { unique: 232, pageviews: 712 },
        'android': { unique: 2256, pageviews: 9789 }
    },
      '01-07-2020': {
        'ios': { unique: 1544, pageviews: 8567 },
        'android': { unique: 956, pageviews: 9711 }
    },
      '01-08-2020': {
        'ios': { unique: 34, pageviews: 457 },
        'android': { unique: 3456, pageviews: 129 }
    },
      '01-09-2020': {
        'ios': { unique: 554, pageviews: 5567 },
        'android': { unique: 666, pageviews: 6559 }
    }
}


let viwesWithDays = (obj) => {
    return Object.keys(obj).map((key) => {
        let sum = 0;
        let perDay = obj[key];
        let iosSum = perDay.ios.unique + perDay.ios.pageviews;
        let androidSum = perDay.android.unique + perDay.android.pageviews;

        sum = iosSum + androidSum;
        return [key, sum];
    })
}

let arr = viwesWithDays(daysAndTraffic);
console.log(arr)

let maxVisit = -Infinity;
let maxVisitDay = null;
let minVisit = Infinity;
let minVisitDay = null; 

function findMaxMinDays(arr){
    for(let pair of arr){
        const [date, visit] = pair;

        if(visit > maxVisit) maxVisitDay = date;
        maxVisit = Math.max(visit, maxVisit); 

        if(visit < minVisit) minVisitDay = date;
        minVisit = Math.min(visit, minVisit);
    }

    return {
        maxVisit,
        maxVisitDay,
        minVisit,
        minVisitDay
    }
}


let maxAndMinVisit = findMaxMinDays(arr);
console.log(maxAndMinVisit);


function findMaxVisitInAWindow(arr, window) {

    let maxSum = 0;
    let curSum = 0;

    let startDate = null;
    let endDate = null;

    for(let i=0; i<arr.length; i++){
        curSum = curSum + arr[i][1];
        if(i < window - 1){
            continue;
        }

        /** if dates needs to be figured out */
        if(curSum > maxSum) {
            endDate = arr[i][0]; 
            startDate = arr[i-window + 1][0];
        }

        maxSum = Math.max(maxSum, curSum);

        curSum = curSum - arr[i-window + 1][1];
    }

    return {
        startDate,
        endDate,
        maxSum
    }
}

let result = findMaxVisitInAWindow(arr, 3);
console.log(result);