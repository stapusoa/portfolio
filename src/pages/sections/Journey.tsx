import React from "react";

interface JourneyProps {
  user: string;
  story: string;
  step: string[];
  task: string[];
  feeling: string[];
  feedback: string[];
}

const Journey: React.FC<JourneyProps> = ({ user, story, step, task, feeling, feedback }) => (
  <div className="bg-white  pt-12 pb-16 px-32 grid grid-cols-8 grid-flow-row items-start gap-8">
    <div className="col-start-1 col-span-8 py-2 text-left">
      <h6 className="m-0 font-gilroy font-300 text-8 text-grey-800 tracking-wide">user journey map</h6>
    </div>
    <div className="col-start-1 col-span-8 border-solid border border-grey-200 overflow-hidden rounded-2 p-6">
      <div className="flex flex-row justify-content justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="m-0 font-gilroy font-semibold text-5 text-left text-grey-700">{user}</h1>
          <p className="m-0 font-gilroy font-300 text-4 text-left text-grey-500">
            {story}
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="">
                  </th>
                  {step.map((step, index) => (
                  <th key={index} scope="col" className="px-2">
                    <div className="py-2 text-center font-gilroy text-4 font-400 text-white bg-green rounded-md">{step}</div>
                  </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="whitespace-nowrap text-left py-3 px0 font-gilroy font-400 text-4 text-grey-600">
                    Task
                  </td>
                  {task.map((taskItem, index) => (
                  <td key={index} className="whitespace-nowrap text-left py-3 px-2 font-gilroy font-300 text-4 text-grey-600">
                    {taskItem}
                  </td>
                   ))}
                </tr>
                <tr>
                  <td className="whitespace-nowrap text-left py-3 px0 font-gilroy font-400 text-4 text-grey-600">
                    Feeling
                  </td>
                  {feeling.map((emotion, index) => (
                  <td key={index} className="whitespace-nowrap text-left py-3 px-2 font-gilroy font-300 text-4 text-grey-600">
                    {emotion}
                  </td>
                  ))}
                </tr>
                <tr>
                  <td className="whitespace-nowrap text-left py-3 pr-8 font-gilroy font-400 text-4 text-grey-600">
                    Improvement Opportunity
                  </td>
                  {feedback.map((issue, index) => (
                  <td key={index} className="whitespace-nowrap text-left py-3 px-2 font-gilroy font-300 text-4 text-grey-600">
                    {issue}
                  </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Journey;