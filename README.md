<svg fill="none" viewBox="0 0 600 300" width="800" height="300" xmlns="http://www.w3.org/2000/svg">
  <foreignObject width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml">
      <style>
        @keyframes hi  {
            0% { transform: rotate( 0.0deg) }
           10% { transform: rotate(14.0deg) }
           20% { transform: rotate(-8.0deg) }
           30% { transform: rotate(14.0deg) }
           40% { transform: rotate(-4.0deg) }
           50% { transform: rotate(10.0deg) }
           60% { transform: rotate( 0.0deg) }
          100% { transform: rotate( 0.0deg) }
        }
        @keyframes gradient {
          0% {
            background-position: 0 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0 50%;
          }
        }
        .container {
          --color-main: #5452ee;
          --color-primary: #e73c7e;
          --color-secondary: #23a6d5;
          --color-tertiary: #ffff;
          background: linear-gradient(-45deg, var(--color-main), var(--color-primary), var(--color-secondary), var(--color-tertiary));
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
          width: 100%;
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }
        .hi {
          animation: hi 1.5s linear -0.5s infinite;
          display: inline-block;
          transform-origin: 60% 60%;
        }
        @media (prefers-color-scheme: light) {
          .container {
            --color-main: #F15BB5;
            --color-primary: #24b0ef;
            --color-secondary: #4526f6;
            --color-tertiary: #f6f645;
          }
        }
        @media (prefers-reduced-motion) {
          .container {
            animation: none;
          }
          .hi {
            animation: none;
          }
        }
      </style>
      <div class="container">
        <h1>Hi there, my name is Vinayak<div class="hi">👋</div></h1>
      </div>
    </div>
  </foreignObject>
</svg>

## What is this Framework
This is a Test Automation framework mainly developed with help of cypress

## Tech Stack Used for this Framework
1. Node.js (JS runtime environment)
2. NPM (Node Package Manager)
3. Cypress (Automation Tool for Testing JS Web apps)
4. GitHub (To host the code on repo)
5. AWS code build (To build and test the application/ No build required as testing website directly but can be done)
6. Cypress cloud (To record all test execution related on cloud)
7. AWS SNS notification as per build status. Refer :- https://docs.aws.amazon.com/codebuild/latest/userguide/sample-build-notifications.html#sample-build-notifications-ref
8. AWS S3 to store code artifacts in this case test result report.
9. AWS Event bridge to initialize the email when build status is changed
10. AWS Lambda function in python to create the email and AWS SES to send the email with test artifact/report to user.

## Below is the complete Infrastructure used for this framework

<div style="width: 100%;">
  <img src="Cypress_Infra_Vinayak.svg" style="width: 100%;" alt="Click to see the source">
</div>

