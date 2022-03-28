/**
 * 
 * You're asked to go through the days and add up all the pageviews, uniques. 
 * Find day that had the most and least traffic. 
 * Then you're asked to find the 7 days where the traffic was highest.
 * 
 * https://leetcode.com/discuss/interview-experience/1047320/reddit-phone-screen-front-end-reject
 */

 const DailyVisitsInfo = {
    '2019-09-30': {
      'android':    {'pageviews': 818019, 'uniques': 202770},
      'ios':        {'pageviews': 543987, 'uniques': 241062},
      'mobile web': {'pageviews': 168518, 'uniques': 109986},
      'new reddit': {'pageviews': 196908, 'uniques': 109611},
      'old reddit': {'pageviews': 660134, 'uniques': 123657}},
    '2019-10-01': {
      'android':    {'pageviews': 1048749, 'uniques': 283306},
      'ios':        {'pageviews': 828792, 'uniques': 390098},
      'mobile web': {'pageviews': 184459, 'uniques': 115771},
      'new reddit': {'pageviews': 398615, 'uniques': 233145},
      'old reddit': {'pageviews': 907138, 'uniques': 196448}},
    '2019-10-02': {
      'android':    {'pageviews': 880578, 'uniques': 240355},
      'ios':        {'pageviews': 730838, 'uniques': 319622},
      'mobile web': {'pageviews': 184750, 'uniques': 114611},
      'new reddit': {'pageviews': 279593, 'uniques': 168069},
      'old reddit': {'pageviews': 760666, 'uniques': 155327}},
    '2019-10-03': {
      'android':    {'pageviews': 1059309, 'uniques': 271188},
      'ios':        {'pageviews': 949155, 'uniques': 377975},
      'mobile web': {'pageviews': 219475, 'uniques': 129146},
      'new reddit': {'pageviews': 263442, 'uniques': 151467},
      'old reddit': {'pageviews': 942120, 'uniques': 192728}},
    '2019-10-04': {
      'android':    {'pageviews': 862312, 'uniques': 226090},
      'ios':        {'pageviews': 619707, 'uniques': 290069},
      'mobile web': {'pageviews': 193268, 'uniques': 122686},
      'new reddit': {'pageviews': 229165, 'uniques': 142950},
      'old reddit': {'pageviews': 795943, 'uniques': 164039}},
    '2019-10-05': {
      'android':    {'pageviews': 1120160, 'uniques': 273314},
      'ios':        {'pageviews': 988276, 'uniques': 387495},
      'mobile web': {'pageviews': 288832, 'uniques': 158737},
      'new reddit': {'pageviews': 240202, 'uniques': 130491},
      'old reddit': {'pageviews': 989403, 'uniques': 185670}},
    '2019-10-06': {
      'android':    {'pageviews': 858731, 'uniques': 218702},
      'ios':        {'pageviews': 613857, 'uniques': 279428},
      'mobile web': {'pageviews': 205438, 'uniques': 128173},
      'new reddit': {'pageviews': 183293, 'uniques': 101012},
      'old reddit': {'pageviews': 783536, 'uniques': 159166}},
    '2019-10-07': {
      'android':    {'pageviews': 875835, 'uniques': 225737},
      'ios':        {'pageviews': 660286, 'uniques': 298102},
      'mobile web': {'pageviews': 194847, 'uniques': 123422},
      'new reddit': {'pageviews': 268803, 'uniques': 157003},
      'old reddit': {'pageviews': 928663, 'uniques': 182583}},
    '2019-10-08': {
      'android':    {'pageviews': 730295, 'uniques': 196759},
      'ios':        {'pageviews': 526199, 'uniques': 252986},
      'mobile web': {'pageviews': 162475, 'uniques': 104726},
      'new reddit': {'pageviews': 195413, 'uniques': 117025},
      'old reddit': {'pageviews': 661811, 'uniques': 138799}},
    '2019-10-09': {
      'android':    {'pageviews': 940563, 'uniques': 264979},
      'ios':        {'pageviews': 811657, 'uniques': 355546},
      'mobile web': {'pageviews': 239530, 'uniques': 134925},
      'new reddit': {'pageviews': 281969, 'uniques': 165749},
      'old reddit': {'pageviews': 903507, 'uniques': 191280}},
    '2019-10-10': {
      'android':    {'pageviews': 1238809, 'uniques': 352852},
      'ios':        {'pageviews': 1280193, 'uniques': 509026},
      'mobile web': {'pageviews': 308224, 'uniques': 176322},
      'new reddit': {'pageviews': 695061, 'uniques': 415375},
      'old reddit': {'pageviews': 1052078, 'uniques': 225951}},
    '2019-10-11': {
      'android':    {'pageviews': 1195259, 'uniques': 310991},
      'ios':        {'pageviews': 985675, 'uniques': 404357},
      'mobile web': {'pageviews': 265551, 'uniques': 148136},
      'new reddit': {'pageviews': 336884, 'uniques': 188324},
      'old reddit': {'pageviews': 975506, 'uniques': 192578}},
    '2019-10-12': {
      'android':    {'pageviews': 1266037, 'uniques': 345190},
      'ios':        {'pageviews': 1219302, 'uniques': 475284},
      'mobile web': {'pageviews': 384964, 'uniques': 199407},
      'new reddit': {'pageviews': 297321, 'uniques': 173010},
      'old reddit': {'pageviews': 890779, 'uniques': 195166}},
    '2019-10-13': {
      'android':    {'pageviews': 1130614, 'uniques': 307259},
      'ios':        {'pageviews': 844338, 'uniques': 371143},
      'mobile web': {'pageviews': 246071, 'uniques': 142415},
      'new reddit': {'pageviews': 258091, 'uniques': 143176},
      'old reddit': {'pageviews': 822883, 'uniques': 170550}},
    '2019-10-14': {
      'android':    {'pageviews': 897041, 'uniques': 260099},
      'ios':        {'pageviews': 736483, 'uniques': 346120},
      'mobile web': {'pageviews': 235071, 'uniques': 142057},
      'new reddit': {'pageviews': 257214, 'uniques': 158398},
      'old reddit': {'pageviews': 886109, 'uniques': 194097}},
    '2019-10-15': {
      'android':    {'pageviews': 1138852, 'uniques': 323401},
      'ios':        {'pageviews': 985817, 'uniques': 442360},
      'mobile web': {'pageviews': 270442, 'uniques': 160943},
      'new reddit': {'pageviews': 322952, 'uniques': 188132},
      'old reddit': {'pageviews': 894164, 'uniques': 194601}},
    '2019-10-16': {
      'android':    {'pageviews': 979532, 'uniques': 277708},
      'ios':        {'pageviews': 847920, 'uniques': 369393},
      'mobile web': {'pageviews': 244069, 'uniques': 146472},
      'new reddit': {'pageviews': 291979, 'uniques': 173726},
      'old reddit': {'pageviews': 918243, 'uniques': 204639}},
    '2019-10-17': {
      'android':    {'pageviews': 1096164, 'uniques': 309467},
      'ios':        {'pageviews': 890928, 'uniques': 393046},
      'mobile web': {'pageviews': 266852, 'uniques': 158225},
      'new reddit': {'pageviews': 320596, 'uniques': 187187},
      'old reddit': {'pageviews': 985259, 'uniques': 212018}},
    '2019-10-18': {
      'android':    {'pageviews': 753472, 'uniques': 223278},
      'ios':        {'pageviews': 563915, 'uniques': 282073},
      'mobile web': {'pageviews': 188831, 'uniques': 112560},
      'new reddit': {'pageviews': 211066, 'uniques': 126008},
      'old reddit': {'pageviews': 669198, 'uniques': 147196}},
    '2019-10-19': {
      'android':    {'pageviews': 962797, 'uniques': 268282},
      'ios':        {'pageviews': 828801, 'uniques': 365575},
      'mobile web': {'pageviews': 253350, 'uniques': 148604},
      'new reddit': {'pageviews': 224350, 'uniques': 132178},
      'old reddit': {'pageviews': 797857, 'uniques': 175173}},
    '2019-10-20': {
      'android':    {'pageviews': 1193759, 'uniques': 301888},
      'ios':        {'pageviews': 1004094, 'uniques': 396294},
      'mobile web': {'pageviews': 271591, 'uniques': 152289},
      'new reddit': {'pageviews': 272765, 'uniques': 144697},
      'old reddit': {'pageviews': 864199, 'uniques': 171296}},
    '2019-10-21': {
      'android':    {'pageviews': 1150444, 'uniques': 324092},
      'ios':        {'pageviews': 969914, 'uniques': 438752},
      'mobile web': {'pageviews': 313117, 'uniques': 181763},
      'new reddit': {'pageviews': 322088, 'uniques': 190611},
      'old reddit': {'pageviews': 1092289, 'uniques': 244912}},
    '2019-10-22': {
      'android':    {'pageviews': 854847, 'uniques': 242732},
      'ios':        {'pageviews': 686744, 'uniques': 314710},
      'mobile web': {'pageviews': 238664, 'uniques': 139864},
      'new reddit': {'pageviews': 247561, 'uniques': 151861},
      'old reddit': {'pageviews': 851689, 'uniques': 192428}},
    '2019-10-23': {
      'android':    {'pageviews': 1136770, 'uniques': 337558},
      'ios':        {'pageviews': 1011291, 'uniques': 421009},
      'mobile web': {'pageviews': 226507, 'uniques': 136628},
      'new reddit': {'pageviews': 515574, 'uniques': 302266},
      'old reddit': {'pageviews': 1037322, 'uniques': 224113}},
    '2019-10-24': {
      'android':    {'pageviews': 885550, 'uniques': 262365},
      'ios':        {'pageviews': 757652, 'uniques': 329568},
      'mobile web': {'pageviews': 221004, 'uniques': 131525},
      'new reddit': {'pageviews': 275350, 'uniques': 164440},
      'old reddit': {'pageviews': 936442, 'uniques': 197569}},
    '2019-10-25': {
      'android':    {'pageviews': 716841, 'uniques': 205726},
      'ios':        {'pageviews': 583224, 'uniques': 243210},
      'mobile web': {'pageviews': 152725, 'uniques': 90524},
      'new reddit': {'pageviews': 213456, 'uniques': 112371},
      'old reddit': {'pageviews': 763489, 'uniques': 135122}},
    '2019-10-26': {
      'android':    {'pageviews': 951608, 'uniques': 296377},
      'ios':        {'pageviews': 983876, 'uniques': 405359},
      'mobile web': {'pageviews': 289110, 'uniques': 169347},
      'new reddit': {'pageviews': 262176, 'uniques': 164183},
      'old reddit': {'pageviews': 807378, 'uniques': 168252}},
    '2019-10-27': {
      'android':    {'pageviews': 1205083, 'uniques': 335858},
      'ios':        {'pageviews': 1263216, 'uniques': 468237},
      'mobile web': {'pageviews': 325777, 'uniques': 181759},
      'new reddit': {'pageviews': 311810, 'uniques': 165675},
      'old reddit': {'pageviews': 920115, 'uniques': 183343}},
    '2019-10-28': {
      'android':    {'pageviews': 895987, 'uniques': 272203},
      'ios':        {'pageviews': 859704, 'uniques': 364293},
      'mobile web': {'pageviews': 282609, 'uniques': 161611},
      'new reddit': {'pageviews': 334023, 'uniques': 178003},
      'old reddit': {'pageviews': 938582, 'uniques': 188509}},
    '2019-10-29': {
      'android':    {'pageviews': 766997, 'uniques': 249285},
      'ios':        {'pageviews': 732930, 'uniques': 334302},
      'mobile web': {'pageviews': 201104, 'uniques': 119804},
      'new reddit': {'pageviews': 238816, 'uniques': 136042},
      'old reddit': {'pageviews': 754392, 'uniques': 146707}},
    '2019-10-30': {
      'android':    {'pageviews': 711952, 'uniques': 237852},
      'ios':        {'pageviews': 688647, 'uniques': 320108},
      'mobile web': {'pageviews': 232315, 'uniques': 136811},
      'new reddit': {'pageviews': 394880, 'uniques': 265357},
      'old reddit': {'pageviews': 861369, 'uniques': 186888}},
    '2019-10-31': {
      'android':    {'pageviews': 848622, 'uniques': 235523},
      'ios':        {'pageviews': 757241, 'uniques': 299549},
      'mobile web': {'pageviews': 255190, 'uniques': 135642},
      'new reddit': {'pageviews': 327093, 'uniques': 166043},
      'old reddit': {'pageviews': 1004334, 'uniques': 174195}},
    '2019-11-01': {
      'android':    {'pageviews': 1009634, 'uniques': 277224},
      'ios':        {'pageviews': 985454, 'uniques': 365798},
      'mobile web': {'pageviews': 340559, 'uniques': 172191},
      'new reddit': {'pageviews': 380106, 'uniques': 187060},
      'old reddit': {'pageviews': 1197665, 'uniques': 207036}},
    '2019-11-02': {
      'android':    {'pageviews': 764325, 'uniques': 231608},
      'ios':        {'pageviews': 748339, 'uniques': 324697},
      'mobile web': {'pageviews': 226231, 'uniques': 127424},
      'new reddit': {'pageviews': 211358, 'uniques': 110537},
      'old reddit': {'pageviews': 747725, 'uniques': 137999}},
    '2019-11-03': {
      'android':    {'pageviews': 720454, 'uniques': 218085},
      'ios':        {'pageviews': 616098, 'uniques': 273528},
      'mobile web': {'pageviews': 201056, 'uniques': 119318},
      'new reddit': {'pageviews': 175020, 'uniques': 92434},
      'old reddit': {'pageviews': 738077, 'uniques': 144804}},
    '2019-11-04': {
      'android':    {'pageviews': 850667, 'uniques': 247563},
      'ios':        {'pageviews': 767865, 'uniques': 307741},
      'mobile web': {'pageviews': 214536, 'uniques': 118853},
      'new reddit': {'pageviews': 279638, 'uniques': 146726},
      'old reddit': {'pageviews': 959795, 'uniques': 177118}},
    '2019-11-05': {
      'android':    {'pageviews': 883781, 'uniques': 292929},
      'ios':        {'pageviews': 843265, 'uniques': 386380},
      'mobile web': {'pageviews': 264919, 'uniques': 153470},
      'new reddit': {'pageviews': 284949, 'uniques': 176978},
      'old reddit': {'pageviews': 1011618, 'uniques': 220325}},
    '2019-11-06': {
      'android':    {'pageviews': 1189013, 'uniques': 361782},
      'ios':        {'pageviews': 1222918, 'uniques': 491474},
      'mobile web': {'pageviews': 340257, 'uniques': 178917},
      'new reddit': {'pageviews': 377485, 'uniques': 212397},
      'old reddit': {'pageviews': 1117135, 'uniques': 222187}},
    '2019-11-07': {
      'android':    {'pageviews': 1149410, 'uniques': 395503},
      'ios': {'pageviews': 1261771, 'uniques': 509686},
      'mobile web': {'pageviews': 301117, 'uniques': 182553},
      'new reddit': {'pageviews': 650360, 'uniques': 365394},
      'old reddit': {'pageviews': 1049098, 'uniques': 248047}},
    '2019-11-08': {
      'android':    {'pageviews': 1225972, 'uniques': 353731},
      'ios':        {'pageviews': 1149590, 'uniques': 458661},
      'mobile web': {'pageviews': 309976, 'uniques': 172001},
      'new reddit': {'pageviews': 414602, 'uniques': 225001},
      'old reddit': {'pageviews': 1155450, 'uniques': 217974}},
    '2019-11-09': {
      'android':    {'pageviews': 934881, 'uniques': 277578},
      'ios':        {'pageviews': 753657, 'uniques': 330896},
      'mobile web': {'pageviews': 229383, 'uniques': 131696},
      'new reddit': {'pageviews': 242391, 'uniques': 127208},
      'old reddit': {'pageviews': 759403, 'uniques': 147741}},
    '2019-11-10': {
      'android':    {'pageviews': 1155272, 'uniques': 344532},
      'ios':        {'pageviews': 961367, 'uniques': 414086},
      'mobile web': {'pageviews': 316443, 'uniques': 180163},
      'new reddit': {'pageviews': 291638, 'uniques': 157320},
      'old reddit': {'pageviews': 992157, 'uniques': 209716}},
    '2019-11-11': {
      'android':    {'pageviews': 1017050, 'uniques': 297403},
      'ios':        {'pageviews': 786895, 'uniques': 340634},
      'mobile web': {'pageviews': 303616, 'uniques': 191342},
      'new reddit': {'pageviews': 308475, 'uniques': 169901},
      'old reddit': {'pageviews': 936982, 'uniques': 189128}},
    '2019-11-12': {
      'android':    {'pageviews': 917009, 'uniques': 297440},
      'ios':        {'pageviews': 771828, 'uniques': 369154},
      'mobile web': {'pageviews': 281645, 'uniques': 176258},
      'new reddit': {'pageviews': 321270, 'uniques': 182655},
      'old reddit': {'pageviews': 979610, 'uniques': 217932}},
    '2019-11-13': {
      'android':    {'pageviews': 866966, 'uniques': 257861},
      'ios':        {'pageviews': 696012, 'uniques': 295133},
      'mobile web': {'pageviews': 146846, 'uniques': 91303},
      'new reddit': {'pageviews': 299146, 'uniques': 153051},
      'old reddit': {'pageviews': 746445, 'uniques': 165837}},
    '2019-11-14': {
      'android':    {'pageviews': 720578, 'uniques': 228043},
      'ios':        {'pageviews': 610685, 'uniques': 273632},
      'mobile web': {'pageviews': 233233, 'uniques': 145642},
      'new reddit': {'pageviews': 246216, 'uniques': 131454},
      'old reddit': {'pageviews': 809409, 'uniques': 164890}},
    '2019-11-15': {
      'android':    {'pageviews': 893927, 'uniques': 268507},
      'ios':        {'pageviews': 721442, 'uniques': 301548},
      'mobile web': {'pageviews': 272139, 'uniques': 172320},
      'new reddit': {'pageviews': 273291, 'uniques': 148183},
      'old reddit': {'pageviews': 830540, 'uniques': 163286}},
    '2019-11-16': {
      'android':    {'pageviews': 859666, 'uniques': 250634},
      'ios':        {'pageviews': 776614, 'uniques': 301808},
      'mobile web': {'pageviews': 252932, 'uniques': 136008},
      'new reddit': {'pageviews': 203651, 'uniques': 104984},
      'old reddit': {'pageviews': 698273, 'uniques': 133476}},
    '2019-11-17': {
      'android':    {'pageviews': 896853, 'uniques': 292943},
      'ios':        {'pageviews': 883463, 'uniques': 372019},
      'mobile web': {'pageviews': 309958, 'uniques': 165411},
      'new reddit': {'pageviews': 272320, 'uniques': 153546},
      'old reddit': {'pageviews': 813187, 'uniques': 176295}},
    '2019-11-18': {
      'android':    {'pageviews': 1142720, 'uniques': 326486},
      'ios':        {'pageviews': 1002917, 'uniques': 408472},
      'mobile web': {'pageviews': 333752, 'uniques': 176264},
      'new reddit': {'pageviews': 381209, 'uniques': 202905},
      'old reddit': {'pageviews': 1071201, 'uniques': 218746}},
    '2019-11-19': {
      'android':    {'pageviews': 1211191, 'uniques': 355036},
      'ios':        {'pageviews': 1005068, 'uniques': 423271},
      'mobile web': {'pageviews': 308485, 'uniques': 161385},
      'new reddit': {'pageviews': 426082, 'uniques': 235286},
      'old reddit': {'pageviews': 1044983, 'uniques': 224812}},
    '2019-11-20': {
      'android':    {'pageviews': 1075637, 'uniques': 310187},
      'ios':        {'pageviews': 868377, 'uniques': 375826},
      'mobile web': {'pageviews': 223399, 'uniques': 122215},
      'new reddit': {'pageviews': 356930, 'uniques': 208573},
      'old reddit': {'pageviews': 983578, 'uniques': 197101}},
    '2019-11-21': {
      'android':    {'pageviews': 1613490, 'uniques': 331628},
      'ios':        {'pageviews': 626490, 'uniques': 288464},
      'mobile web': {'pageviews': 193197, 'uniques': 111844},
      'new reddit': {'pageviews': 300378, 'uniques': 175446},
      'old reddit': {'pageviews': 830788, 'uniques': 164052}},
    '2019-11-22': {
      'android':    {'pageviews': 1291546, 'uniques': 280199},
      'ios':        {'pageviews': 575184, 'uniques': 257443},
      'mobile web': {'pageviews': 191464, 'uniques': 116411},
      'new reddit': {'pageviews': 225093, 'uniques': 118371},
      'old reddit': {'pageviews': 760191, 'uniques': 145437}},
    '2019-11-23': {
      'android':    {'pageviews': 1153728, 'uniques': 298063},
      'ios':        {'pageviews': 755030, 'uniques': 311642},
      'mobile web': {'pageviews': 219457, 'uniques': 130288},
      'new reddit': {'pageviews': 221081, 'uniques': 111902},
      'old reddit': {'pageviews': 723509, 'uniques': 132801}},
    '2019-11-24': {
      'android':    {'pageviews': 1336061, 'uniques': 375491},
      'ios':        {'pageviews': 985014, 'uniques': 418290},
      'mobile web': {'pageviews': 336195, 'uniques': 198403},
      'new reddit': {'pageviews': 267522, 'uniques': 140548},
      'old reddit': {'pageviews': 957462, 'uniques': 189477}},
  }

 const daysAndTraffic = {
	
	'01-02-2020': {
	  'ios': { unique: 1234, pageviews: 4567 },
	  'android': { unique: 3456, pageviews: 6789 }
	},
    '01-01-2020': {
        'ios': { unique: 123, pageviews: 456 },
        'android': { unique: 345, pageviews: 789 }
      },
    '01-03-2020': {
        'ios': { unique: 121, pageviews: 467 },
        'android': { unique: 356, pageviews: 689 }
    },
      '01-04-2020': {
        'ios': { unique: 122, pageviews: 457 },
        'android': { unique: 345, pageviews: 689 }
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
    },
    '01-05-2020': {
        'ios': { unique: 34, pageviews: 67 },
        'android': { unique: 34, pageviews: 89 }
    },
}


let viwesWithDays = (obj) => {
    return Object.keys(obj)
    .sort((a,b) => new Date(a) - new Date(b))
    .map((key) => {
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