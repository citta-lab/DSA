/**
 *  Interviewer briefly introduced themselves. Went straight into technical coding.
    Interviewer made it clear that they were not looking for best/optimal approach, but overall code-quality, test cases, understanding of the problem.

    #1 Input string = Y N Y N. Y=customers were shopping at this hour, N=customers were not shopping at this hour. Penalty func = # hours (shop is opened and no customer) + #hours (shop is closed and customers would have shopped). Write a function find_penalty . Find penalty, given an input and closing time.

    Guaranteed 1 space between Y/N.

    Closing time = 0, penalty = 3 (lost 3 Y)
    Closing time = 1, penalty = 2 (lost 2 Y)
    Closing time = 2, penalty = 1 (lost 1 Y)
    Closing time = 3, penalty = 0
    Closing time = 4, penalty = 1 (because of 1 N).

    I tested my code, interviewer asked about edge cases. When I was comfortable with my code, interviewer pasted their own TC. They all passed.

    #2 Follow-up, find best closing time. Write a func find_best_closing_time.

    This is where I got it wrong at first, I went straight into optimizing approach in O(N) time. Interviewer asked me to forget about optimizing, I said we could use find_penalty, and interviewer agreed - it would take O(n^2).
    I tested my code, interviewer asked about edge cases. When I was comfortable with my code, interviewer pasted their own TC. They all passed.
    #3 Valid log entry, BEGIN Y N Y N END (has BEGIN and END keyword). Input contains entries which may be valid or invalid.

    Write a func best_closing_times for valid enteries.

    BEGIN Y N Y N END BEGIN Y N N END has 2 valid entries.

    BEGIN Y N Y N END END Y N N END has only 1 valid entry - Y N Y N.

    Entries are littered with \n to mean a new line in the notebook. BEGIN \n Y N\n Y N END \nBEGIN Y\n\n N N END still has 2 valid entries.

    I tried parsing string, and cleaning input of \n. Interviewer hinted to use str.replace() method after seeing me struggle (I felt like an idiot). After cleaning the string it was easy, just had to make sure BEGIN was followed by END, and collect sub-string. Pass that sub-string to find_best_closing_time func in earlier question.

    I had to debug after my first attempt, interviewer gave me hint. After I was satisfied, I asked interviewer to present their TC. All TCs passed.

    example: https://leetcode.com/discuss/interview-experience/1551743/Accept-or-Stripe-Phone-screen-or-SDE-or-US-or-October-2021

    */


    const findPenalty = function(data, closingHour){
        let arr = data.split(' ');
    
        if(!arr.length) return 0;
    
        let penalty = 0;
    
        for(let time=0; time<arr.length; time++){
            let char = arr[time];
    
            // Y Y N | N => here penalty would be 1 as we didnt close until after NO SHOW UP
            if(closingHour > time && char === 'N') penalty ++;
    
            // Y Y | Y  => here penatly would be 1 again as we closed but people showed up  
            if(closingHour <= time && char === 'Y') penalty ++;
        }
    
        return penalty;
    }
    
    
    console.log(findPenalty('Y Y Y N', 0)); // 3
    console.log(findPenalty('Y Y Y N', 1)); // 2
    console.log(findPenalty('Y Y Y N', 2)); // 1
    console.log(findPenalty('Y Y Y N', 3)); // 0
    console.log(findPenalty('Y Y Y N', 4)); // 1
    console.log(findPenalty('', 1));        // 0
    console.log(findPenalty('Y N Y Y N', 5)); // should be 1 ?? 
    
    console.log("------------- find best closing time -----------------");
    
    const findBestClosingTime = function (data) {
        let maxProfit = 0;
        let index = 0;
    
        let currentProfit = 0;
        let arr = data.split(' ');
        for(let i=0; i<arr.length; i++){
            
            let value = arr[i];
            
            if(value === 'Y') currentProfit ++; 
            if(value === 'N') currentProfit --;
    
            if(currentProfit > maxProfit){
                maxProfit = currentProfit;
                index = i; 
            }
        }
    
        return index > 0 ? index + 1 : 0;
    }
    
    console.log(findBestClosingTime('Y Y Y N')); // 3
    console.log(findBestClosingTime('')); // 0
    console.log(findBestClosingTime('Y Y Y N Y N')); // 3
    console.log(findBestClosingTime('Y Y N N')); // ????

    console.log("------------- parse and find best closing time -----------------");

    const validLogEntry = function (data){
        let replacedStr = data.replace('\n', '');
        let arr = replacedStr.split('BEGIN');

        let cleaned = [];
        let closingTimes = [];
        for(let element of arr){
            
            element = element.trim(); 
            
            if(element.endsWith('END')){
                let endIndex = element.indexOf('END');
                element = element.slice(0, endIndex);
                
                console.log(element.trim())
                cleaned.push(element.trim());
                let ret = findBestClosingTime(element.trim());
                closingTimes.push(ret);
            }
        }

        return [cleaned, closingTimes]

    }


    console.log(validLogEntry('BEGIN Y N Y N END'));// 1 valid entry, [0] closing time
    console.log(validLogEntry('BEGIN Y N Y N END BEGIN Y N N END')); // 2 valid entry, [0,0] closing time
    console.log(validLogEntry('BEGIN Y N Y N END END Y N N END')); // 1 valid entry, 0 closing time
    console.log(validLogEntry('BEGIN Y Y Y N END BEGIN Y Y Y N Y N END')); // 2 valid entry, [3,3] closing time
