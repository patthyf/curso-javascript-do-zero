var ajax = function(method, url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
  
    xhr.open(method, url);
    xhr.send(null);
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject('Erro na API');
        }
      }
    }
  });
}

ajax('GET', 'https://api.gith3ub.com/users/diego3g')
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
