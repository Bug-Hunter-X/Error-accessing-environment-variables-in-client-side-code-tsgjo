# Next.js Client-Side Environment Variable Access Error

This repository demonstrates a common error in Next.js applications when attempting to access environment variables within client-side code.  Accessing environment variables directly in the browser (client-side) will result in errors because the `process` object is not available in the browser's context. 

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to `/about`.
5. Observe the error in your browser's console related to `process` being undefined.

## Solution

The solution is to access environment variables on the server-side and pass them down as props to your client-side components.

This repository includes a solution in the `aboutSolution.js` file which demonstrates how to achieve this with `getStaticProps` or `getServerSideProps`