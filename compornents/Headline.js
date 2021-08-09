import React from 'react';

export default function Headline(props) {
  return (
    <div>
      <h1 className="text-6xl font-bold">
        I love{' '}
        <a className="text-blue-600" href="https://nextjs.org">
          koko.js!
        </a>
      </h1>

      <p className="mt-3 text-2xl">
        Get started by editing{' '}
        <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
          pages/about.js
        </code>
      </p>
    </div>
  );
}
