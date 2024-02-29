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
        {`I'm a fullstack developer based on frontend, that loves to learn. I currently `}
        <Link href="/work">work</Link>
        {` as FS Developer at `}
        <span className="not-prose">
          <Badge href="https://www.tecabot.ai/">
            <svg
              width="15"
              height="13"
              role="img"
              aria-label="Tecabot logo"
              className="inline-flex mr-1"
            >
              <use href="/sprite.svg#tecabot" />
            </svg>
            Tecabot
          </Badge>
        </span>
        {`, where I help working with `}
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
        {` and helps as a backend to implement features and debugging working with `}
        <Badge href="https://rubyonrails.org/">
          <svg
            width="15"
            height="13"
            role="img"
            aria-label="Ruby on rails logo"
            className="inline-flex mr-1"
          >
            <use href="/sprite.svg#ror" />
          </svg>
          Ruby on Rails
        </Badge>
        .
      </p>
    </section>
  );
}
