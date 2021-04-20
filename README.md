# Node + React Boiler Plate

Node Server is at : http://localhost:5000/
React Server is at : http://localhost:3000/

#### Run following command to install all the dependencies
```bash
npm install
cd client
npm install
```

#### At server.js root directory, run following command to concurrently run react and node server
```bash
npm run dev
```

## OUTPUT
```

> boiler-plate@1.0.0 dev C:\Users\Yogesh Sherawat\Desktop\allProjects\React+Node Boiler Plate
> concurrently "npm run server" "npm run client"

[0] 
[0] > boiler-plate@1.0.0 server C:\Users\Yogesh Sherawat\Desktop\allProjects\React+Node Boiler Plate
[0] > nodemon server
[0]
[1]
[1] > boiler-plate@1.0.0 client C:\Users\Yogesh Sherawat\Desktop\allProjects\React+Node Boiler Plate
[1] > npm start --prefix client
[1]
[0] [nodemon] 2.0.4
[0] [nodemon] to restart at any time, enter `rs`
[0] [nodemon] watching path(s): *.*
[0] [nodemon] watching extensions: js,mjs,json
[0] [nodemon] starting `node server.js`
[0] Server Started
[1] 
[1] > client@0.1.0 start C:\Users\Yogesh Sherawat\Desktop\allProjects\React+Node Boiler Plate\client
[1] > react-scripts start
[1]
[1] i ｢wds｣: Project is running at http://172.19.208.1/
[1] i ｢wds｣: webpack output is served from
[1] i ｢wds｣: Content not from webpack is served from C:\Users\Yogesh Sherawat\Desktop\allProjects\React+Node Boiler Plate\client\public
[1] i ｢wds｣: 404s will fallback to /
[1] Starting the development server...
[1]
[1] Compiled successfully!
[1]
[1] You can now view client in the browser.
[1]
[1]   Local:            http://localhost:3000
[1]   On Your Network:  http://172.19.208.1:3000
[1]
[1] Note that the development build is not optimized.
[1] To create a production build, use npm run build.
[1]

```

> The more you do practice, better you get at it