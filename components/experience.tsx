import {BriefcaseIcon, BoltIcon, WrenchScrewdriverIcon, LanguageIcon , BeakerIcon, AcademicCapIcon} from '@heroicons/react/20/solid'

const edu = [
  {
    name: 'School name',
    date: 'Date here',
    description: 'Description here'
  }
]

const work = [
  {
    name: 'Work experience 1',
    date: 'Date here',
    description: 'Description here'
  }
]

const skills = [
  {
    name: 'Example - Example - Example - Example - Example'
  },
  {
    name: 'Example - Example - Example - Example - Example',
  },
  {
    name: 'Example - Example - Example - Example - Example',
  },
  {
    name: 'Example - Example - Example - Example - Example',
  },
  {
    name: 'Example - Example - Example - Example - Example',
  },

]

const other = [
  {
    name: 'Something',
    date: 'Date here',
    description: 'Description here'
  },
]

const interests = [
  {
    name: 'Example - Example - Example - Example'
  },
  {
    name: 'Example - Example - Example - Example'
  }
]

const languages = [
  {
    name: 'Language 1', 
    description: 'Spoken and written - Level here'
  }
]

export default function Experince() {
  return (
    <div className="bg-white px-6 py-22 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700 ">
        <p className="text-base font-semibold leading-7 text-red-800">My experience</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Education</h1>
        <div className="mt-10 max-w-2xl">
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            {edu.map((person) => (
              <li className='flex gap-x-3' key={person.name}>
                <AcademicCapIcon className="mt-1 h-5 w-5 flex-none text-red-800" aria-hidden="true" />
                <span>
                <strong className="font-semibold text-gray-900">{person.name}</strong>
                <br />
                {person.description}
                </span>
              </li>
            ))}
          </ul>
          
          </div>
          <br />
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Work experience</h1>
        <div className="mt-10 max-w-2xl">
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            {work.map((person) => (
                <li className='flex gap-x-3' key={person.name}>
                  <BriefcaseIcon className="mt-1 h-5 w-5 flex-none text-red-800" aria-hidden="true" />
                  <span>
                  <strong className="font-semibold text-gray-900">{person.name}</strong>
                  <br />
                  {person.description}
                  </span>
                </li>
                ))}
          </ul>
          </div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Skills</h1>
        <div className="mt-10 max-w-2xl">
          <ul role="list" className=" max-w-xl space-y-8 text-gray-600">

            {skills.map((person) => (
                <li className='flex gap-x-3' key={person.name}>
                    <BeakerIcon className="mt-1 h-5 w-5 flex-none text-red-800" aria-hidden="true" />
                    <span>
                    <p className=" text-gray-900">{person.name}</p>
                    </span>
                </li>
                ))}
          </ul>
          
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Other experiences</h1>
          <div className="mt-10 max-w-2xl">
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            {other.map((person) => (
                <li className='flex gap-x-3' key={person.name}>
                    <WrenchScrewdriverIcon className="mt-1 h-5 w-5 flex-none text-red-800" aria-hidden="true" />
                    <span>
                    <strong className="font-semibold text-gray-900">{person.name}</strong>
                    <br />
                    {person.description}
                    </span>
                </li>
                ))}
          </ul>          
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Interests</h1>
          <div className="mt-10 max-w-2xl">
          <ul role="list" className=" max-w-xl space-y-8 text-gray-600">
            {interests.map((person) => (
                <li className='flex gap-x-3' key={person.name}>
                    <BoltIcon className="mt-1 h-5 w-5 flex-none text-red-800" aria-hidden="true" />
                    <span>
                    <p className=" text-gray-900">{person.name}</p>
                    </span>
                </li>
                ))}
          </ul>          
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Languages</h1>
          <div className=" max-w-2xl">
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            {languages.map((person) => (
                <li className='flex gap-x-3' key={person.name}>
                    <LanguageIcon className="mt-1 h-5 w-5 flex-none text-red-800" aria-hidden="true" />
                    <span>
                    <p className=" text-gray-900">{person.name}</p>
                    <p className=" text-gray-900">{person.description}</p>
                    </span>
                </li>
                ))}
          </ul>          
          </div>
      </div>
      
    </div>
  )
}