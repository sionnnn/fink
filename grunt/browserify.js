module.exports = {
    babel: {
        options: {
           transform: [
              ["babelify", {
                 loose: "all"
              }]
           ],
          modules:"amd"
        },
        files: {
           "./<%= paths.dest.root %>/assets/js/app.js": ["./<%= paths.src.root %>/js/app.js"]
        }
    },
    typescript: {
      options: {
        plugin: [
          ["tsify"]
        ]
      },
      files: {
         "./<%= paths.dest.root %>/assets/js/app.js": ["./<%= paths.src.root %>/js/app.ts"]
      }
    }
};