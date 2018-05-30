const fs = require('fs');

class ContentReader {

  constructor(response) {
    this.response = response;
  }

  /*
    return a Promise that reads asynchronously a file
    and resolves with the content of the file
  */
  read(path) {
    return () => new Promise(
      (resolve, reject) => fs.readFile(path,
        (error, content) => {
          if (error) {
            reject(error);
          }
          else {
            resolve(content);
          }
        }
      )
    );
  }

  write() {
    /*
    return (content) => new Promise(
        (resolve, reject) => {
          this.response.write(content);
          resolve();
        }
      )*/
    return (content) => Promise.resolve()
        .then( this.response.write(content) )
  }
  end() {
    return (content) => Promise.resolve()
      .then( this.response.end(content) )
  }

  error() {
    return () => this.read('error_html')()
                        .then( this.write() )
  }

}

module.exports = ContentReader;
