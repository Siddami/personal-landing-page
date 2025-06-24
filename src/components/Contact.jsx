function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="space-y-4 px-4 py-8 dark:bg-gray-300 "
    >
      <h2 id="contact-title" className="text-2xl font-semibold text-gray-900">
        Let’s Connect
      </h2>
      <span className="text-gray-900">Email: </span>
      <a
        href="mailto:abdulkareemsiddiqat@outlook.com"
        className="text-blue-600 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
      >
        abdulkareemsiddiqat@outlook.com
      </a>
    </section>
  );
}

export default Contact;