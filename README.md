# MERN Full Stack Udemy Course

## Section 2: Server Side Architecture

Node: Javascript runtime used to execute code outside the browser
Express: Library that runs in the Node runtime. Has helpers to make dealing with HTTP traffic easier

Route Handler Example:

app.get("/", (req, res) => {

res.send({ hi: "there" });

});

app: Express app to register this route handler with

get: Watch for incoming requests with this method

'/': Watch for requests trying to access '/' ("root" route)

req: Object representing the incoming request

res: Object representing the outgoing response

res.send({hi:'there}): Immediately send some JSON back to who ever make this request

Express Route Handlers:

get: Get info

post: Send info

put: Update all the properties of something

delete: Delete something

patch: Update on or two properties of something

app.listen(5001): instructs express to tell Node to listen to incoming traffic coming from port 5001

Deployment Instructions: 12. Deployment Checklist

1. Dynamic Port Binding
2. Specify Node Environment
3. Specify Start Script
4. Create .gitignore
