/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	GOOG_API_KEY
	CX
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const googApiKey = process.env.GOOG_API_KEY;
const cx = process.env.CX;

exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const jobTitle = "Software Engineer";
    const daysBack = "2";
    
    const api_key = 'AIzaSyBokUGx07SGs4Qy5kcdtT9RDztNGwE0kmw';
    const cx = '6069166fa70fd403e';
    const q = jobTitle + ' AND San Diego OR remote -India Java';
    const url = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyBokUGx07SGs4Qy5kcdtT9RDztNGwE0kmw&cx=6069166fa70fd403e&q="Software%20Engineer"%20AND%20San%20Diego%20OR%20remote%20-India%20Java&dateRestrict=d9'
    
    const response = await fetch(url, {
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
        // "key": api_key,
      },
      body: event.body
    });

    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
        body: await response.text(),
    };
};


// //      const res = await fetch("https://www.googleapis.com/customsearch/v1", {
//         method: "POST",
//         headers: { "Content-Type": "application/json",
//           "key": api_key,
//           "cx": cx,
//           "q": q,
//           "d": daysBack
//         },
//         body: "" // JSON.stringify({ jobTitle, field2 })
