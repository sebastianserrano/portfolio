(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"certifications":[{"imageInfo":{"src":"/images/aws-1.png","alt":"My Image"},"link":"https://www.youracclaim.com/badges/411a6b22-1e24-4382-a67f-afdd2e084816/linked_in_profile"},{"imageInfo":{"src":"/images/gcp-1.png","alt":"My Image"},"link":"https://www.credential.net/35e77aec-f56e-45a2-b0b4-500cc5419b32?key=d9cd218d0854b7432a7b5ecf37a5b04ab68878d2435a9f87ed787ebc5562a905"}]}')},11:function(e,t,a){e.exports=a(22)},16:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),o=a.n(r);a(16);var c=function(e){var t=e.text;return i.a.createElement("div",{className:"container-fluid",id:"header"},i.a.createElement("div",{className:"row justify-content-center"},i.a.createElement("img",{src:"/images/ink-2.png",id:"polygon-background",alt:"polygon-background"}),i.a.createElement("header",null,i.a.createElement("h3",null,t),i.a.createElement("hr",null))))};var s=function(e){var t=e.text,a=e.link,n=e.target;return i.a.createElement("li",{className:"nav-item",key:t},i.a.createElement("a",{className:"nav-link",target:n,href:a,rel:"noopener noreferrer"},t))};var l=function(e){return e.map((function(e){return i.a.createElement(s,{text:e.text,link:e.link,target:e.target,key:e.text})}))};var m=function(){var e=l([{text:"Projects",link:"#projects",target:""},{text:"Certifications",link:"#certifications",target:""},{text:"Github",link:"https://github.com/sebastianserrano",target:"_blank"},{text:"Docker",link:"https://hub.docker.com/u/sebastianserrano",target:"_blank"},{text:"Contact",link:"#contact",target:""}]);return i.a.createElement("div",{className:"container-fluid",id:"navbar"},i.a.createElement("ul",{className:"row nav justify-content-center"},e))};function d(e){var t=e.text;return i.a.createElement("h4",{className:"text-center"},t)}d.defaultProps={text:"Title"};var u=d;var h=function(e){var t=e.text;return i.a.createElement("p",{className:"card-text"},t)};var p=function(){return i.a.createElement("section",{className:"container-fluid section",id:"profile"},i.a.createElement("div",{className:"row justify-content-center"},i.a.createElement("div",{className:"card bg-dark text-center col-lg-6 col-sm-9 col-11"},i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"card-title"},i.a.createElement(u,{text:"Fullstack Web Developer"})),i.a.createElement(h,{text:"Avionics Engineer and Full Stack Web Developer with a passion for programming and world changing ideas with 3 years of experience in software development ranging from IOS mobile apps to cutting edge websites built with many different capabilities. Proven ability to learn a wide spectrum of essential technologies to bring ideas to life at scale. Experienced with e-commerce and integration apps with global clients such as Shopify, Rakuten, and Walmart"})))))};var g=function(e){var t=e.text;return i.a.createElement("h6",{className:"topic"},t)},f=a(2),b=a(3);var v=function(e){var t=e.text;return i.a.createElement("div",{className:"skill-item col-lg-3 col-sm-3 col-6",key:t},i.a.createElement(f.a,{icon:b.b}),i.a.createElement("p",null,t))};var k=function(e){return e.map((function(e){return i.a.createElement(v,{text:e,key:e})}))};var E=function(e){var t=e.topic,a=e.skills,n=k(a);return i.a.createElement("div",{className:"container-fluid skillset"},i.a.createElement("div",{className:"row"},i.a.createElement(g,{text:t})),i.a.createElement("div",{className:"row"},n))};var w=function(){return i.a.createElement("section",{className:"container-fluid section",id:"skills"},i.a.createElement("div",{className:"row justify-content-center"},i.a.createElement("div",{className:"col-lg-8 col-md-10 col-sm-10 col-11"},i.a.createElement(u,{text:"Skills"}),i.a.createElement("hr",null),i.a.createElement(E,{topic:"Languages",skills:["Javascript","Python","Swift"]}),i.a.createElement(E,{topic:"Databases",skills:["PostgreSQL","MongoDB","Firebase"]}),i.a.createElement(E,{topic:"Frontend",skills:["React JS","Redux","Bootstrap","HTML","CSS"]}),i.a.createElement(E,{topic:"Backend",skills:["NodeJS","REST API"]}),i.a.createElement(E,{topic:"Cloud",skills:["Amazon Web Services","Google Cloud Platform"]}),i.a.createElement(E,{topic:"Tools",skills:["Stripe","Twilio","Plaid","ElasticSearch","Git/Github","Docker","Ansible"]}))))};var y=function(e){var t=e.imageInfo,a=t.name,n=t.alt,r=t.link;return i.a.createElement("div",{className:"col-lg-5 col-md-5 col-sm-6 col-12"},i.a.createElement("div",{className:"thumbnail-project-image"},"midhub"===n?i.a.createElement("img",{className:"project-image",src:a,alt:n}):i.a.createElement("a",{href:r},i.a.createElement("img",{className:"project-image",src:a,alt:n}))))};var x=function(e){var t=e.text,a=e.link;return i.a.createElement("a",{className:"project-name",href:a},t)};var N=function(e){var t=e.text;return i.a.createElement("p",{className:"project-info"},t)};var S=function(e){var t=e.text;return i.a.createElement("div",{className:"col-lg-4 col-sm-6 col-6"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"tool-icon col-lg-1 col-md-1 col-sm-1 col-1",key:t},i.a.createElement(f.a,{icon:b.b})),i.a.createElement("div",{className:"tool-text col-lg-9 col-md-5 col-sm-9 col-9"},t)))};var j=function(e){return e.map((function(e){return i.a.createElement(S,{text:e,key:e})}))};var I=function(e){var t=e.description,a=t.name,n=t.link,r=t.descriptionText,o=t.tools,c=j(o);return i.a.createElement("div",{className:"col-lg-5 col-md-6 col-sm-6 col-10 project-description"},i.a.createElement("article",null,i.a.createElement(x,{text:a,link:n}),i.a.createElement(N,{text:r}),i.a.createElement("div",{className:"container-fluid skillset"},i.a.createElement("div",{className:"row"},c))))};var A=function(e){var t=e.imageInfo,a=e.description,n=a.background;return i.a.createElement("div",{className:"row justify-content-center align-content-center project",id:n},i.a.createElement(y,{imageInfo:t}),i.a.createElement(I,{description:a}))};var T=function(e){return e.projects.map((function(e){return i.a.createElement(A,{imageInfo:e.imageInfo,description:e.description,key:e.description.name})}))},J=a(9);var W=function(){var e=T(J);return i.a.createElement("section",{className:"container-fluid section",id:"projects"},i.a.createElement(u,{text:"Projects"}),i.a.createElement("hr",null),e)};var M=function(e){var t=e.text;return i.a.createElement("a",{className:"nav-link text-center",href:"mailto:${text}"},i.a.createElement(f.a,{icon:b.a}),i.a.createElement("p",null,t))},P=a(4);var C=function(e){var t=e.text;return i.a.createElement("a",{className:"nav-link text-center",href:"https://github.com/sebastianserrano"},i.a.createElement(f.a,{icon:P.a}),i.a.createElement("p",null,t))};var R=function(e){var t=e.text;return i.a.createElement("a",{className:"nav-link text-center",href:"https://www.linkedin.com/in/sebastian-serrano-3214a9172/"},i.a.createElement(f.a,{icon:P.b}),i.a.createElement("p",null,t))};var B=function(){return i.a.createElement("footer",{className:"container-fluid section",id:"contact"},i.a.createElement("div",{className:"row justify-content-center",id:"footer"},i.a.createElement("div",{className:"col-lg-2 col-md-12 col-sm-12 col-12"},i.a.createElement(u,{text:"Contact"})),i.a.createElement("div",{className:"col-lg-4 col-md-12 col-sm-12 col-12"},i.a.createElement(M,{text:"ocean.frameworks@gmail.com"})),i.a.createElement("div",{className:"col-lg-3 col-md-12 col-sm-12 col-12"},i.a.createElement(R,{text:"Sebastian Serrano"})),i.a.createElement("div",{className:"col-lg-3 col-md-12 col-sm-12 col-12"},i.a.createElement(C,{text:"Sebastian Serrano"}))))};var D=function(e){var t=e.imageInfo,a=t.src,n=t.alt,r=e.link;return i.a.createElement("div",null,i.a.createElement("img",{src:a,className:"certification-margin certification-image rounded img-fluid img-thumbnail",alt:n}),i.a.createElement("h6",{className:"text-center certification-link"},i.a.createElement("a",{href:r,className:"",target:"_blank"},"Verify")))},_=a(10);var L=function(){return i.a.createElement("section",{className:"container-fluid section",id:"certifications"},i.a.createElement("div",{className:"row justify-content-center"},i.a.createElement("div",{className:"col-lg-8 col-md-10 col-sm-10 col-11"},i.a.createElement(u,{text:"Certifications"}),i.a.createElement("hr",null),i.a.createElement("section",{className:"container-fluid section"},i.a.createElement("div",{className:"d-flex row justify-content-center"},_.certifications.map((function(e){var t=e.link,a=e.imageInfo;return i.a.createElement(D,{imageInfo:a,link:t})})))))))};var F=function(){return i.a.createElement("div",null,i.a.createElement(c,{text:"Sebastian Serrano"}),i.a.createElement(m,null),i.a.createElement(p,null),i.a.createElement(L,null),i.a.createElement(w,null),i.a.createElement(W,null),i.a.createElement(B,null))};var O=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e){e.exports=JSON.parse('{"projects":[{"imageInfo":{"name":"/images/midhub.png","alt":"midhub","link":""},"description":{"name":"Midhub","link":"https://midhub.co","descriptionText":"Midhub is an escrow system which empowers both freelancers and clients to make secure but fast transactions by live streaming their work. The idea for this project came from the problems that both parties have to deal with while working remotely when it comes to sending/receiving payments and the transfer of files securely. Checks are put in place so the funds can be released as soon as the client downloads the files uploaded by the freelancer","tools":["React JS","Redux","Bootstrap","Twilio","Stripe","Plaid","Node JS","PostgreSQL","Ansible","Jenkins","AWS Pipeline","AWS CodeDeploy"],"background":"midhub-background-project"}},{"imageInfo":{"name":"/images/midhub-backend-2.jpg","alt":"My Image","link":"https://github.com/sebastianserrano/midhub_backend"},"description":{"name":"Midhub Backend","link":"https://github.com/sebastianserrano/midhub_backend","descriptionText":"Midhub Backend is the server implementation of the original project \\"Midhub\\" that currently runs on nodejs. The reason for extracting this as a separate piece is for demonstrational purposes on the steps that were taken and the reasoning behind these for creating the overall architecture and structure of the server ","tools":["Node JS","PostgreSQL","Twilio","Stripe"],"background":"midhub-backend-background-project"}},{"imageInfo":{"name":"/images/cohesive.jpg","alt":"My Image","link":"https://github.com/sebastianserrano/cohesive"},"description":{"name":"Cohesive","link":"https://github.com/sebastianserrano/cohesive","descriptionText":"Cohesive is a IOS application written in Swift which brought students together depending on their educational needs. There are many times in which they urgently need each other\'s skills in order to complete assignments of any kind. By connecting them according to their abilities while these matching another student\'s needs, this pairing was made succesfully. For example, if student A is good with math but needs help with english, and student B is good with english but needs help with math, these two would match","tools":["Swift","Firebase","MongoDB","ElasticSearch"],"background":"cohesive-background-project"}},{"imageInfo":{"name":"/images/solid-nodejs.jpg","alt":"My Image","link":"https://github.com/sebastianserrano/solid_node"},"description":{"name":"Solid Node","link":"https://github.com/sebastianserrano/solid_node","descriptionText":"Solid node is a server which displays the core design principles of software development. Through research on various books and documentations such as \\"Clean Code\\" and \\"Clean Architecture\\" by Robert C. Martin, this knowledge has been available to me and applied to not only this project, but all the other ones as well with different techniques and flavours. Some of these principles can be seen on the description of this project right below","tools":["Open-closed principle","Single responsibility principle","Interface segregation principle","Dependency inversion principle","Node JS"],"background":"solid-nodejs-background-project"}},{"imageInfo":{"name":"/images/lambda-s3.jpg","alt":"My Image","link":"https://github.com/sebastianserrano/lambda-s3"},"description":{"name":"Lambda s3","link":"https://github.com/sebastianserrano/lambda-s3","descriptionText":"Lambda s3 is a set of javascript lambda functions running on a nodejs-10.x environment sitting behind an AWS API for uploading files to a s3 bucket. The project was created via sam (Serverless Application Model) giving it the ability to package and deploy as one piece with all of its required resources. With a simple git clone, sam package, and sam deploy commands the lambda function will be up and running in your aws environment","tools":["AWS Lambda","AWS Sam","AWS API","Node JS"],"background":"lambda-s3-background-project"}},{"imageInfo":{"name":"/images/react-s3.jpg","alt":"My Image","link":"https://github.com/sebastianserrano/react-s3"},"description":{"name":"React s3","link":"https://github.com/sebastianserrano/react-s3","descriptionText":"React s3 is a React JS component with hooks that has the capability of showing real time progress of file uploads to an AWS s3 bucket. The files did not have to be split into multiple parts by this component since this is done behind the scenes by the AWS Javascript SDK. The goal for this project is to be more than just an interface for one AWS operation, but to provide many more capabilities through the use of custom hooks. This project is currently under development","tools":["React Hooks","AWS JS SDK","React JS"],"background":"react-s3-background-project"}},{"imageInfo":{"name":"/images/project.jpg","alt":"My Image","link":"https://github.com/sebastianserrano/portfolio"},"description":{"name":"Portfolio","link":"https://github.com/sebastianserrano/portfolio","descriptionText":"This is the current project you are interacting with at the moment. I have opened its source code to the public for demonstrational purposes. Everything has been seriously taken into account, from the colors to the layout of the website, in order to achieve a clean and concise approach for transmiting information about who I am today and who I am planning to be in the future ","tools":["AWS Pipeline","Ansible","Jenkins","React JS","Bootstrap","Flexbox","AWS CodeDeploy"],"background":"portfolio-background-project"}}]}')}},[[11,1,2]]]);
//# sourceMappingURL=main.f5297eda.chunk.js.map