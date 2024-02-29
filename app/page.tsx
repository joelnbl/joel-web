import Link from "next/link";

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
    />
  );
}

export default function Page() {
  return (
    <section>
       <p className="prose prose-neutral dark:prose-invert">
        {`I'm a frontend developer, optimist, and community builder. I currently `}
        <Link href="/work">work</Link>
        {` as the VP of Product at `}
        <span className="not-prose">
          <Badge href="https://vercel.com/home">
            <svg
              width="13"
              height="11"
              role="img"
              aria-label="Vercel logo"
              className="inline-flex mr-1"
            >
              <use href="/sprite.svg#vercel" />
            </svg>
            Vercel
          </Badge>
        </span>
        {`, where I help teach the `}
        <Badge href="https://nextjs.org">
          <img
            alt="Next.js logomark"
            src="/next-logo.svg"
            className="!mr-1"
            width="14"
            height="14"
          />
          Next.js
        </Badge>
        {` community, an open-source web framework built with `}
        <Badge href="https://react.dev">
          <svg
            width="14"
            height="14"
            role="img"
            aria-label="React logo"
            className="!mr-1"
          >
            <use href="/sprite.svg#react" />
          </svg>
          React
        </Badge>
        .
      </p>
    </section>
  );
}
