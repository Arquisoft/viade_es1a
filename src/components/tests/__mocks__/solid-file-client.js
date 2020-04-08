const response = {
    files: [
        {
            url: 'webId',
            type: 'text/turtle'
        }
    ], 
    type: 'folder',
    itemType: 'Container'
}

export default class SolidFileClient {
    async readFile (url, request) {
      return "Esto es una prueba"
    }
  
    async readFolder (url, options) { 
        if (url) {
            return response;
        }
    }
  
    async deleteFile (url) {
        if (response.files[0].url === url) {
            return {
                ok: 'valid'
            }
        }
        return {};
    }
  
    async deleteFolder (url, options) {
        return {
            ok: 'valid'
        }
     }
  }