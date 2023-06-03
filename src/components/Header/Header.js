import { Navbar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
 
const Header = () => {
    return (
        <div className='text-white'>
            <Navbar fluid={true} rounded={true} className='py-4 bg-sky-500'>
                <Navbar.Brand>
                    <NavLink to="/">
                        <span className="text-2xl font-bold">
                            QuizSkills
                        </span>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle className='text-white hover:bg-inherit'/>
                <Navbar.Collapse>
                    <div className='text-center md:flex md:gap-9 text-white'>
                        <Navbar.Link>
                            <NavLink className={({ isActive }) => isActive ? 'md:text-white md:bg-inherit md:p-0  font-bold text-black py-2 px-20 rounded' : undefined} to="/home">Home</NavLink>
                        </Navbar.Link>
                        <Navbar.Link>
                            <NavLink className={({ isActive }) => isActive ? 'md:text-white md:bg-inherit md:p-0 font-bold text-black py-2 px-20 rounded' : undefined} to="/statistics">Statistics</NavLink>
                        </Navbar.Link>
                        <Navbar.Link>
                            <NavLink className={({ isActive }) => isActive ? 'md:text-white md:bg-inherit md:p-0 font-bold text-black py-2 px-20 rounded' : undefined} to="/blog">Blog</NavLink>
                        </Navbar.Link>
                    </div>
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
};

export default Header;