import { Icons } from '@/components/icons';

export interface ProjectItemProps {
    // company: string;
    title: string;
    date: string;
    techstack: string;
    descriptions: string[];
    link:string;
  }




export function ProjectItem({
    title,
    date,
    techstack,
    descriptions,
    link,

}:ProjectItemProps) {

return (

    <details className="group" open>
    <summary className="flex items-center hover:cursor-pointer hover:text-hover">
    <div className="flex w-12 items-center justify-around px-1">
    <Icons.chevronRight
            size={16}
            className="transition group-open:rotate-90"
          />
        </div>
 
      <h3 className="font-medium">{title}</h3>
    </summary>
    <div className="space-y-1.5 py-1 pl-12 text-sm md:text-base">
      <div className="text-xs font-extralight">{date}</div>
      <div className='text-xs font-extrabold'><a href={link}>live link</a></div>
      <div className="text-xs font-thin">{techstack}</div>
      <ul>
        {descriptions.map((description, index) => (
          <li key={index} className="list-disc">
            {' '}
            {description}{' '}
          </li>
        ))}
      </ul>
    </div>
  </details>

);

}