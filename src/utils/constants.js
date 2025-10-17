export const DUMMY_FILE_FOLDER_DATA = {
    name: "File Explorer",
    type: "folder",
    children: [
        {
            name: "node_modules",
            type: "folder",
            children: []
        },
        {
            name: "public",
            type: "folder",
            children: [
                {
                    name: "favicon.ico",
                    type: "file"
                },
                {
                    name: "index.html",
                    type: "file"
                },
                {
                    name: "manifest.json",
                    type: "file"
                },
                {
                    name: "robots.txt",
                    type: "file"
                }
            ]
        },
        {
            name: 'src',
            type: 'folder',
            children: [
                {
                    name: 'components',
                    type: 'folder',
                    children: [
                        {
                            name: 'Header.js',
                            type: 'file'
                        },
                        {
                            name: 'Footer.js',
                            type: 'file'
                        },
                        {
                            name: 'App.js',
                            type: 'file'
                        }
                    ]
                },
                {
                    name: 'App.css',
                    type: 'file'
                },
                {
                    name: 'App.test.js',
                    type: 'file'
                },
                {
                    name: 'index.css',
                    type: 'file'
                },
                {
                    name: "index.js",
                    type: "file"
                },
                {
                    name: "logo.csv",
                    type: "file"
                },
                {
                    name: "reportWebVitals.js",
                    type: "setupTests.js"
                },
                {
                    name: "setupTests.js",
                    type: "file"
                }
            ]
        },
        {
            name: ".gitignore",
            type: "file"
        },
        {
            name: "package.json",
            type: "file"
        },
        {
            name: "package-lock.json",
            type: "file"
        },
        {
            name: "README.md",
            type: "file"
        }
    ]
}