module.exports = {
    options: {
        // the banner is inserted at the top of the output
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
    }
,
    dist: {
        files: {
            'dist/<%= pkg.name %>.min.js'
        :
            ['<%= concat.dist.dest %>']
        }
    }
};