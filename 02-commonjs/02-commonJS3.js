// function Module (id, parent) {
//     this.id = id;
//     this.exports = {}
//     this.parent = parent
//     if (parent && parent.childen) {
//       parent.childen.push(this)
//     }
//     this.filename = null;
//     this.loaded = false
//     this.childen = []
//   }

// // native extension for .json
// Module._extensions['.json'] = function(module, filename) {
//   var content = NativeModule.require('fs').readFileSync(filename, 'utf8')
//   try{
//     module.exports = JSON.parse(stripBOM(content))
//   }catch (e) {
//     e.message = filename + ":" + e.message
//     throw e
//   }
// }
// console.log(require.extensions)