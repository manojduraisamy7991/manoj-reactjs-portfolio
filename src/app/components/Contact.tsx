export const Contact = () => {
    return (
      <section id="contact" className="py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
          <div className="text-center mb-4">
            <p>Email: <a href="mailto:manojduraisamy7991@gmail.com" className="underline">manojduraisamy7991@gmail.com</a> | Phone Number: <a href="tel:9080888076" className="underline">9080888076</a></p>
            <p>Front End Developer - <a href="https://leetcode.com/example" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition duration-300">leetcode (Started)</a></p>
          </div>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/manojduraisamy1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition duration-300"
            >
              <svg
                className="w-8 h-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22.385 5.019a8.894 8.894 0 0 1-2.569.703 4.458 4.458 0 0 0 1.963-2.469 8.873 8.873 0 0 1-2.823 1.077 4.443 4.443 0 0 0-7.595 4.054 12.612 12.612 0 0 1-9.155-4.65A4.416 4.416 0 0 0 2 7.8a4.431 4.431 0 0 1-2-1.137v.055a4.44 4.44 0 0 0 1.996 3.688 4.415 4.415 0 0 1-1.996-.547v.055a4.444 4.444 0 0 0 3.553 4.352 4.405 4.405 0 0 1-1.968.074 4.443 4.443 0 0 0 4.137 3.084 8.912 8.912 0 0 1-5.512 1.898 8.83 8.83 0 0 1-1.051-.062 12.575 12.575 0 0 0 6.796 1.992c8.153 0 12.625-6.753 12.625-12.625 0-.192-.005-.384-.014-.574a9.063 9.063 0 0 0 2.224-2.303l-.048-.019z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/manojduraisamy1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition duration-300"
            >
              {/* <svg
                className="w-8 h-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.643 2H2.358C1.562 2 1 2.564 1 3.192v17.615c0 .628.563 1.192 1.358 1.192h19.285c.798 0 1.357-.564 1.357-1.192V3.192C23 2.564 22.441 2 21.643 2zM8.104 19.807H4.743V9.128h3.361v10.679zm-1.68
                a1.847 1.847 0 1 1-.001-3.694 1.847 1.847 0 0 1 .001 3.694zm11.399 11.54h-3.36v-5.687c0-1.348-.484-2.268-1.694-2.268-1.245 0-1.983.834-2.307 1.647-.118.287-.148.682-.148 1.081v5.228H7.4V9.128h3.213v1.392c.425-.648 1.195-1.574 2.908-1.574 2.122 0 3.724 1.386 3.724 4.37v6.49h-.001zm-9.645-9.197a1.85 1.85 0 1 1-.001-3.698 1.85 1.85 0 0 1 .001 3.698zm-1.735 9.197H4.744V9.128h2.374v10.679z" />
              </svg> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" w-8 h-8 fill-current bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
            </a>

            <a
              href="https://github.com/manojduraisamy7991"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition duration-300"
            >
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" w-8 h-8 bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
            </a>
          
            {/* Add more social platform links */}
          </div>
        </div>
      </section>
    );
  };
