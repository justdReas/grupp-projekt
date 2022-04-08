// Method vilken metod vill man använda samt body vilken data 
const  fetchUtility  = (url, method, body = {}) => { 
    const options = {
      method,
    };
  
    if (method === "POST" || method === "PUT") {
      options.headers = {
        "Content-Type": "",
      };
      options.body = JSON.stringify(body);
    }
  // lämna tillbaka fetch
    return fetch(url, options).then((response) => response.json());
  };
  // Kim Garcia Haas //Fetch class eller vad man kan kalla det. Denna api fil hjälper till att hämta FETCH

  const get = (url) => fetchUtility(url, 'GET')

  const post = (url, body) => fetchUtility(url, 'POST', body)

  const put = (url,body) => fetchUtility(url,'PUT', body)

  const taBort = (url) => fetchUtility(url, 'DELETE')

  export { get, post, put, taBort}; 

  