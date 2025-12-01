import http from 'node:http';
const PORT = 3000;

const server = http.createServer((req, res) => {

    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const { pathname, searchParams } = parsedUrl;

    //console.log(parsedUrl);
    console.log(pathname);
    //console.log(searchParams);

    if(pathname === '\hi') {
        res.writeHead(200);
        res.end("Hello");
    }
    else if(pathname === '/who') {
        res.writeHead(200);
        res.end("I'm inji");
    }
    else {
        res.writeHead(200);
        res.end("please req : /hi or /who");
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
