import { useState, useRef } from "react"

import emailjs from '@emailjs/browser'

import EarthCanvas from "./canvas/Earth"

const Contact = () => {

    const formRef = useRef()

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { target } = e
        const { name, value } = target
        setForm({ ...form, [name]: value })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        //yGEEJave7I0yF_aJA
        //template_7bv4j8p
        //service_14ydmp8

        emailjs.send(
            'service_14ydmp8',
            'template_hrzayun',
            {
                from_name: form.name,
                to_name: 'Bodhisattwa Basu',
                from_email: form.email,
                to_email: 'basubodhisattwa6@gmail.com',
                message: form.message
            },
            'yGEEJave7I0yF_aJA'
        )
            .then(() => {
                setLoading(false)
                alert('Thank you.I will get back to you as soon as possible')

                setForm({
                    name: '',
                    email: '',
                    message: '',
                })
            }, (error) => {
                setLoading(false)
                console.log(error);

                alert('Something Went Wrong')
            }
            )
    }


    return (
        <div
            className={`sm:mt-12 mt-4 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden pl-8 pr-7 sm:pr-2 mb-7`}
        >
            <div
                className='flex-[0.75] bg-gradient-to-r from-gray-700 via-gray-900 to-black p-8 rounded-2xl '
            >
                <p className="sm:text-[4.5rem] text-40px bg-clip-text bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700 text-transparent sm:mr-6 mr-2">Get in touch</p>
                <h3 className="sm:px-[7rem] sm:py-5 px-[1rem] py-[1rem] font-extralight sm:text-4xl uppercase bg-clip-text bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-900 via-amber-800 to-rose-400 text-transparent text-2xl">Contact.</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='mt-12 flex flex-col gap-8 '
                >
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Name</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your good name?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your email</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your web address?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Message</span>
                        <textarea
                            rows={7}
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='What you want to say?'
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>

                    <button
                        type='submit'
                        className='bg-gradient-to-r from-gray-700 via-gray-900 to-black py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </div>

            <div
                className='xl:flex-1 xl:h-auto md:h-[500px] h-[350px] p-5 sm:p-0 m-[3rem] sm:m-0'
            >
                <EarthCanvas />
            </div>
        </div>
    )
}

export default Contact