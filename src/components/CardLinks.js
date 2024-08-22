import { RocketLaunchIcon, GlobeAmericasIcon } from "@heroicons/react/24/outline";

export default function CardLinks({ links }) {
  return (
  <div>
    {links.map((link) => (
    <div>
          <a
          href={link.url}
          target="_blank"
          className="float-right inline-block">
            <svg
              class="size-7 text-gray-500 hover:text-purple-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d={link.path}
              />
            </svg>
          </a>
    </div>
    ))}
  </div>
  )
}
