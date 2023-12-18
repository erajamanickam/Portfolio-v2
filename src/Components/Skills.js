import React from 'react'
import reactLogo from '../../src/images/react.png'
import expressLogo from '../../src/images/expressjs.png'
import mongodbLogo from '../../src/images/mongodb.png'
import nodeLogo from '../../src/images/nodejs.png'
import jsLogo from '../../src/images/javascript.png'
import jqLogo from '../../src/images/jquery.png'
import mysqlLogo from '../../src/images/mysql.png'
import tailwindLogo from '../../src/images/tailwind.png'
import bootstrapLogo from '../../src/images/bootstrap.png'
import phpLogo from '../../src/images/php.png'
import htmlLogo from '../../src/images/html.png'
import cssLogo from '../../src/images/css.png'

const Skills = () => {
    return (
        <section className="py-12 z-20 relative" id='skills'>
            <div className="container mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-3xl font-bold text-white mb-8 text-center animate__animated animate__jackInTheBox">Skills</h2>
                <div className='flex flex-wrap mx-[-15px] justify-center'>
                    <div className='sm:basis-1/5 basis-2/5 sm:w-1/4 w-1/2 rounded-xl mb-7 mt-0 mx-4 bg-[linear-gradient(180deg,_#01d2f870_0%,_#1f1e1c99_67%)]'>
                        <div className='text-center rounded-xl bg-stone-800 p-5 mb-0 mt-0.5 mx-0.5'>
                            <img src={reactLogo} alt='React' className='mx-auto mb-2' />
                            <p className='mb-0 text-yellow-500'>React</p>
                        </div>
                    </div>
                    <div className='sm:basis-1/5 basis-2/5 sm:w-1/4 w-1/2 rounded-xl mb-7 mt-0 mx-4 bg-[linear-gradient(180deg,_#eeeeee8c_0%,_#1f1e1c99_67%)]'>
                        <div className='text-center rounded-xl bg-stone-800 p-5 mb-0 mt-0.5 mx-0.5'>
                            <img src={expressLogo} alt='Express' className='mx-auto mb-2' />
                            <p className='mb-0 text-yellow-500'>Express</p>
                        </div>
                    </div>
                    <div className='sm:basis-1/5 basis-2/5 sm:w-1/4 w-1/2 rounded-xl mb-7 mt-0 mx-4 bg-[linear-gradient(180deg,_#49a83dba_0%,_#1f1e1c99_67%)]'>
                        <div className='text-center rounded-xl bg-stone-800 p-5 mb-0 mt-0.5 mx-0.5'>
                            <img src={mongodbLogo} alt='MongoDB' className='mx-auto mb-2' />
                            <p className='mb-0 text-yellow-500'>MongoDB</p>
                        </div>
                    </div>
                    <div className='sm:basis-1/5 basis-2/5 sm:w-1/4 w-1/2 rounded-xl mb-7 mt-0 mx-4 bg-[linear-gradient(180deg,_#49a83dba_0%,_#1f1e1c99_67%)]'>
                        <div className='text-center rounded-xl bg-stone-800 p-5 mb-0 mt-0.5 mx-0.5'>
                            <img src={nodeLogo} alt='Node' className='mx-auto mb-2' />
                            <p className='mb-0 text-yellow-500'>Node</p>
                        </div>
                    </div>
                    <div className='sm:basis-1/5 basis-2/5 sm:w-1/4 w-1/2 rounded-xl mb-7 mt-0 mx-4 bg-[linear-gradient(180deg,_#01d2f870_0%,_#1f1e1c99_67%)]'>
                        <div className='text-center rounded-xl bg-stone-800 p-5 mb-0 mt-0.5 mx-0.5'>
                            <img src={tailwindLogo} alt='Tailwind' className='mx-auto mb-2' />
                            <p className='mb-0 text-yellow-500'>Tailwind</p>
                        </div>
                    </div>
                    <div className='sm:basis-1/5 basis-2/5 sm:w-1/4 w-1/2 rounded-xl mb-7 mt-0 mx-4 bg-[linear-gradient(180deg,_#ac13fea8_0%,_#1f1e1c99_67%)]'>
                        <div className='text-center rounded-xl bg-stone-800 p-5 mb-0 mt-0.5 mx-0.5'>
                            <img src={bootstrapLogo} alt='Bootstrap' className='mx-auto mb-2' />
                            <p className='mb-0 text-yellow-500'>Bootstrap</p>
                        </div>
                    </div>
                    <div className='sm:basis-1/5 basis-2/5 sm:w-1/4 w-1/2 rounded-xl mb-7 mt-0 mx-4 bg-[linear-gradient(180deg,_#ffe60099_0%,_#1f1e1c99_67%)]'>
                        <div className='text-center rounded-xl bg-stone-800 p-5 mb-0 mt-0.5 mx-0.5'>
                            <img src={jsLogo} alt='Javascript' className='mx-auto mb-2' />
                            <p className='mb-0 text-yellow-500'>Javascript</p>
                        </div>
                    </div>
                    <div className='sm:basis-1/5 basis-2/5 sm:w-1/4 w-1/2 rounded-xl mb-7 mt-0 mx-4 bg-[linear-gradient(180deg,_#1169dfa6_0%,_#1f1e1c99_67%)]'>
                        <div className='text-center rounded-xl bg-stone-800 p-5 mb-0 mt-0.5 mx-0.5'>
                            <img src={jqLogo} alt='jQuery' className='mx-auto mb-2' />
                            <p className='mb-0 text-yellow-500'>jQuery</p>
                        </div>
                    </div>
                    <div className='sm:basis-1/5 basis-2/5 sm:w-1/4 w-1/2 rounded-xl mb-7 mt-0 mx-4 bg-[linear-gradient(180deg,_#7889ef94_0%,_#1f1e1c99_67%)]'>
                        <div className='text-center rounded-xl bg-stone-800 p-5 mb-0 mt-0.5 mx-0.5'>
                            <img src={phpLogo} alt='PHP' className='mx-auto mb-2' />
                            <p className='mb-0 text-yellow-500'>PHP</p>
                        </div>
                    </div>
                    <div className='sm:basis-1/5 basis-2/5 sm:w-1/4 w-1/2 rounded-xl mb-7 mt-0 mx-4 bg-[linear-gradient(180deg,_#e85939b3_0%,_#1f1e1c99_67%)]'>
                        <div className='text-center rounded-xl bg-stone-800 p-5 mb-0 mt-0.5 mx-0.5'>
                            <img src={htmlLogo} alt='HTML5' className='mx-auto mb-2' />
                            <p className='mb-0 text-yellow-500'>HTML5</p>
                        </div>
                    </div>
                    <div className='sm:basis-1/5 basis-2/5 sm:w-1/4 w-1/2 rounded-xl mb-7 mt-0 mx-4 bg-[linear-gradient(180deg,_#264de49e_0%,_#1f1e1c99_67%)]'>
                        <div className='text-center rounded-xl bg-stone-800 p-5 mb-0 mt-0.5 mx-0.5'>
                            <img src={cssLogo} alt='CSS3' className='mx-auto mb-2' />
                            <p className='mb-0 text-yellow-500'>CSS3</p>
                        </div>
                    </div>
                    <div className='sm:basis-1/5 basis-2/5 sm:w-1/4 w-1/2 rounded-xl mb-7 mt-0 mx-4 bg-[linear-gradient(180deg,_#ffe60099_0%,_#1f1e1c99_67%)]'>
                        <div className='text-center rounded-xl bg-stone-800 p-5 mb-0 mt-0.5 mx-0.5'>
                            <img src={mysqlLogo} alt='Mysql' className='mx-auto mb-2' />
                            <p className='mb-0 text-yellow-500'>Mysql</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
