import React from "react";

const page = () => {
  return (
    <main className="root-container flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-5xl font-bebas-neue font-bold text-center text-light-100 mb-4">
        Oops! You&apos;ve Been Rate Limited
      </h1>
      <p className="text-light-200 text-base mb-4">
        It looks like you&apos;ve made too many requests in a short amount of
        time. To ensure fair usage for everyone and maintain the quality of our
        service, we&apos;ve temporarily limited your access.
      </p>

      <h2 className="text-xl font-medium text-light-100 mb-3">
        What Happens Now?
      </h2>
      <ul className="list-inside list-disc mb-4 text-light-200">
        <li>
          Wait a few moments: The restriction will be lifted after a brief
          pause.
        </li>
        <li>
          Try again soon: Once the cooldown period has passed, you can continue
          using our service.
        </li>
      </ul>

      <h2 className="text-xl font-medium text-light-100 mb-3">
        Why Is This Happening?
      </h2>
      <p className="text-light-200 mb-4">
        We set rate limits to prevent abuse and ensure that our service runs
        smoothly for all users. These limits help protect our servers from
        excessive traffic and keep things fair for everyone.
      </p>

      <h2 className="text-xl font-medium text-light-100 mb-3">
        How Long Do I Need to Wait?
      </h2>
      <p className="text-light-200 mb-4">
        The limit should reset automatically within a few minutes. We recommend
        waiting for a short while and trying again after some time.
      </p>

      <p className="text-light-100 mb-4">
        If you frequently encounter this issue, consider:
      </p>
      <ul className="list-inside list-disc mb-4 text-light-200">
        <li>
          Spreading out your requests: Avoid making too many in a short time.
        </li>
        <li>
          Contacting support: If you believe this limit was imposed by mistake
          or need higher limits, feel free to{" "}
          <a href="#" className="text-blue-500 hover:text-blue-700">
            contact us
          </a>
          .
        </li>
      </ul>

      <p className="text-center text-gray-500 mt-6">
        Thank you for your understanding and patience!
      </p>
    </main>
  );
};

export default page;
