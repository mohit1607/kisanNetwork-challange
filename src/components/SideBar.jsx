import React, {useState} from 'react'
import { Link, useHref, useLocation, useParams } from "react-router-dom";

const data = [
  {
    name: 'Shyam-lal',
    contact: '+918003321811',
    slug: 'shyamlal'
  },
  {
    name: 'Ram-lal',
    contact: '+918003321811',
    slug: 'ramlal'
  },
  {
    name: 'Badri-lal',
    contact: '+918003321811',
    slug: 'badrilal'
  },
  {
    name: 'Veer-das',
    contact: '+918386047487',
    slug: 'veerdas'
  },
  {
    name: 'Ram-avatar',
    contact: '+917073659849',
    slug: 'ramavatar'
  },
   {
    name: 'Sunil',
    contact: '+918686048487',
    slug: 'sunil'
  },
]

const SideBar = () => {
    const [toogle, setToogle] = useState(true)



    const params = useParams();
  return (
    <>
    {
      toogle ? (
            <div className={(toogle ? "md:w-1/2 w-full flex-wrap  overflow-hidden transition-all h-full bg-[#F4F4F7]": "w-0 overflow-hidden h-full")}>
            <div className='flex justify-evenly mt-3'>
              <div className='font-bold text-xl'>contacts</div>
              <button className='rounded-md bg-sky-600 text-white px-3 py1' onClick={() => setToogle(!toogle)}>Back</button>
            </div>
            <div>
              <ul>
                {
                data.map((curr,index) => {
                  return(
                    <li key={curr.slug} className={`text-center cursor-pointer font-bold my-4 ${
                      params.slug === `${curr.slug}` ? "text-blue-500": " "
                    }`}>
                      <Link  to={{
                        pathname: `users/${curr?.slug}/${curr?.name}/${curr?.contact}`,
                      }}
                      >
                      {curr?.name}
                      </Link>
                    </li>
                  )
                })
              }
              </ul>
            </div>
        </div>
      ) : (
        <button className='rounded-md bg-sky-600 text-white px-3 py1' onClick={() => setToogle(!toogle)}>Open Contacts</button>
      )
    }
    </>
  )
}

export default SideBar