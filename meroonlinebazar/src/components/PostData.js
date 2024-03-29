export function PostData(type, userData) {
    let BaseURL = 'https://appwithdjangoandreact.herokuapp.com/auth/';
    //let BaseURL = 'http://localhost/PHP-Slim-Restful/api/';
    

    return new Promise((resolve, reject) =>{
    
         
        fetch(BaseURL+type, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                
              }, 
            
            body: JSON.stringify(userData)
          })
          .then((response) => response.json())
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });

  
      });
}