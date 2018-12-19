# Serverless-Side Rendering React Next

Sample repo for setting up Next and React on AWS Lambda with the Serverless Framework.

- Create a `secrets.json` file with `NODE_ENV` set
    - Example:
    ```
    {
        "NODE_ENV": "production"
    }
    ```

- Original Dog example from https://github.com/adnanrahic/serverless-side-rendering-react-next, updated to use `next-serverless`