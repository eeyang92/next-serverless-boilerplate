# Serverless-Side Rendering React Next

Sample repo for setting up Next and React on AWS Lambda with the Serverless Framework.

- Create a `secrets.json` file with `NODE_ENV` set
    - Example:
    ```
    {
        "NODE_ENV": "production"
    }
    ```

- Webpack is working; however, you must modify `serverless.yaml` to include any modules used in your React app, as webpack won't pick them up (since they are not called directly from the entry points). Hopefully this can be fixed - modifiying `webpack.config.json` seems to have no effect.

- Original Dog example from https://github.com/adnanrahic/serverless-side-rendering-react-next, updated to use `next-serverless`