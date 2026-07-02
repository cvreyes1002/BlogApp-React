import { Link } from "react-router"
import Navbar from "../components/Navbar"

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-6 md:py-12 max-w-2xl">
        {/* Header Section */}
        <h2 className="flex items-center text-2xl font-bold mb-4">
          <img 
            className="w-8 h-8 rounded-full mr-2" 
            src="https://gravatar.com/avatar/b9408a09298632b5151200f3449434ef?s=128" 
            alt="brad"
          /> 
          <span className="capitalize">brad</span>
          
          <Link to="/manage-avatar" className="ml-2 inline-block" action="#" method="POST">
            <button className="px-3 py-1.5 text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 rounded transition-colors duration-200">
              Manage Avatar
            </button>
            {/* Unfollow button alternative:
            <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-1 px-3 rounded shadow transition duration-150 ease-in-out">
              Stop Following <span className="ml-1">✕</span>
            </button> 
            */}
          </Link>
        </h2>

        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 pt-2 mb-4">
          <a 
            href="#" 
            className="py-2 px-4 text-gray-600 hover:text-blue-600 border-b-2 border-transparent hover:border-gray-300 transition duration-150"
          >
            Posts: 3
          </a>
          <a 
            href="#" 
            className="py-2 px-4 text-blue-600 font-medium border-b-2 border-blue-600 active"
          >
            Followers: 3
          </a>
          <a 
            href="#" 
            className="py-2 px-4 text-gray-600 hover:text-blue-600 border-b-2 border-transparent hover:border-gray-300 transition duration-150"
          >
            Following: 2
          </a>
        </div>

        {/* List Group */}
        <div className="flex flex-col border border-gray-200 rounded-md overflow-hidden shadow-sm">
          <a 
            href="#" 
            className="flex items-center px-4 py-3 border-b border-gray-200 bg-white hover:bg-gray-50 text-gray-700 transition duration-150 last:border-b-0"
          > 
            <img className="w-6 h-6 rounded-full mr-3" src="https://gravatar.com/avatar/b9216295c1e3931655bae6574ac0e4c2?s=128" alt="User 1" /> 
            <span>User 1</span> 
          </a>
          <a 
            href="#" 
            className="flex items-center px-4 py-3 border-b border-gray-200 bg-white hover:bg-gray-50 text-gray-700 transition duration-150 last:border-b-0"
          > 
            <img className="w-6 h-6 rounded-full mr-3" src="https://gravatar.com/avatar/b9216295c1e3931655bae6574ac0e4c2?s=128" alt="User 2" /> 
            <span>User 2</span> 
          </a>
          <a 
            href="#" 
            className="flex items-center px-4 py-3 bg-white hover:bg-gray-50 text-gray-700 transition duration-150"
          > 
            <img className="w-6 h-6 rounded-full mr-3" src="https://gravatar.com/avatar/b9216295c1e3931655bae6574ac0e4c2?s=128" alt="User 3" /> 
            <span>User 3</span> 
          </a>
        </div>
      </div>
    </>
  )
}

export default Profile