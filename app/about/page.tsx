import Image from "next/image";
import platzi from 'public/images/about/platzi.jpg';
import coffee from 'public/images/about/coffee.jpg';
import learning_platzi from 'public/images/about/learning_platzi.jpg';
import ubuntu from 'public/images/about/ubuntu.jpg';

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
       <div className="columns-1 sm:columns-2 gap-4 my-8">
        
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="My experience at platzi conf, where i started to learn about programming"
            src={platzi}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div> 
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="Coffee, my favorite potion to code"
            src={coffee}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="Me learning Linux and Git sometime ago"
            src={learning_platzi}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="My favorite OS, Ubuntu"
            src={ubuntu}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
