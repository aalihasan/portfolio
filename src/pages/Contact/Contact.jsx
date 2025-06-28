import React from 'react';
import { useForm } from 'react-hook-form';
import { MdEmail, MdPhone, MdWhatsapp } from 'react-icons/md';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = data => {
    console.log('Contact Info:', data);
    alert('Thank you for contacting!');
    reset();
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 md:px-20 bg-base-100 text-base-content"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 text-lg">
            <p className="flex items-center gap-3">
              <MdEmail className="text-xl text-blue-600" />
              <span>alihasan.cse6@gmail.com</span>
            </p>
            <p className="flex items-center gap-3">
              <MdPhone className="text-xl text-green-600" />
              <span>+8801763838761</span>
            </p>
            <p className="flex items-center gap-3">
              <MdWhatsapp className="text-xl text-green-500" />
              <span>+8801763838761</span>
            </p>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg space-y-4"
          >
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
                placeholder="Your Name"
                className="input input-bordered w-full"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address',
                  },
                })}
                placeholder="Your Email"
                className="input input-bordered w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                {...register('message', {
                  required: 'Message is required',
                  minLength: {
                    value: 10,
                    message: 'Message should be at least 10 characters',
                  },
                })}
                placeholder="Your Message"
                rows="4"
                className="textarea textarea-bordered w-full"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
