import React from 'react';

export default function About() {
  return (
    <div className="w-full h-full min-h-screen bg-gunmetal">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-pink">
            Check out our awesome team members
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="w-full bg-charcoal rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 h-80">
              <img
                className="object-center object-cover w-full h-full"
                src="https://media-exp1.licdn.com/dms/image/C4D03AQHGrqoUgQlw0g/profile-displayphoto-shrink_800_800/0/1638303417494?e=1651708800&v=beta&t=zXjrQTbMD10ch2wl53rjvmSIbyomQ-i9Bwt94U3FGBQ"
                alt="photo"
              />
            </div>
            <div className="w-full md:w-3/5 text-left p-4 md:p-4 space-y-2">
              <p className="text-xl text-white font-bold">Kevin Do</p>
              <p className="text-base text-manatee font-normal">
                Software Engineer
              </p>
              <p className="text-base leading-relaxed text-manatee font-normal">
                I am a full stack software developer with backgrounds in
                pharmacy and photography. Utilizing my patient-oriented
                experiences and my aesthetic-based hobbies, I strive to create
                elegant user-friendly applications that will make a difference
                in people’s lives.
              </p>
              <div className="flex justify-start space-x-2">
                <a
                  href="https://github.com/kevindo1"
                  className="text-pink hover:text-teal"
                >
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/kdo/"
                  className="text-pink hover:text-teal"
                >
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full bg-charcoal rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 h-80">
              <img
                className="object-center object-cover w-full h-full"
                src="https://media-exp1.licdn.com/dms/image/C5603AQFkDvmsf9zbiA/profile-displayphoto-shrink_800_800/0/1645230890388?e=1651708800&v=beta&t=5naNq_iNw8XH03_kRklqQFxQb3okFBTonJ6CcAdiVVI"
                alt="photo"
              />
            </div>
            <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
              <p className="text-xl text-white font-bold">Indy Holdsworth</p>
              <p className="text-base text-manatee font-normal">
                Software Engineer
              </p>
              <p className="text-base leading-relaxed text-manatee font-normal">
                Full-Stack Software Developer and avid organizer
              </p>
              <div className="flex justify-start space-x-2">
                <a
                  href="https://github.com/H-Indiana-Holdsworth"
                  className="text-pink hover:text-teal"
                >
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/h-indiana-holdsworth/"
                  className="text-pink hover:text-teal"
                >
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full bg-charcoal rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 h-80">
              <img
                className="object-center object-cover w-full h-full"
                src="https://media-exp1.licdn.com/dms/image/C5603AQH6RNuhVLHYIA/profile-displayphoto-shrink_800_800/0/1638296498343?e=1651708800&v=beta&t=PU9B8iEr0RDQJcX9EQ1WfSzh13M94PV-_u07b4-Qv_I"
                alt="photo"
              />
            </div>
            <div className="w-full md:w-3/5 text-left p-4 md:p-4 space-y-2">
              <p className="text-xl text-white font-bold">Mira Kinebuchi</p>
              <p className="text-base text-manatee font-normal">
                Software Engineer
              </p>
              <p className="text-base leading-relaxed text-manatee font-normal">
                I am a full stack software developer who puts user experience
                and interaction in the forefront of my mind. I am passionate
                about the intersectionality of mental health and tech, and
                strive to make the online world a more accessible, equal field.
              </p>
              <div className="flex justify-start space-x-2">
                <a
                  href="https://github.com/mira-kine"
                  className="text-pink hover:text-teal"
                >
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/mira-kinebuchi/"
                  className="text-pink hover:text-teal"
                >
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full bg-charcoal rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 h-80">
              <img
                className="object-center object-cover w-full h-full"
                src="https://media-exp1.licdn.com/dms/image/C4E03AQGhUW5Qi0FLzw/profile-displayphoto-shrink_800_800/0/1633713633749?e=1651708800&v=beta&t=5XfSIO_7afNcSoPuZab2FVNxzgAbrcOfM6aszdFJ6oE"
                alt="photo"
              />
            </div>
            <div className="w-full md:w-3/5 text-left p-4 md:p-4 space-y-2">
              <p className="text-xl text-white font-bold">Phoenix Nicholson</p>
              <p className="text-base text-manatee font-normal">
                Software Engineer
              </p>
              <p className="text-base leading-relaxed text-manatee font-normal">
                I am a full stack software developer that likes to apply my
                skills to learn and create things I love!
              </p>
              <div className="flex justify-start space-x-2">
                <a
                  href="https://github.com/phoenix-nicholson"
                  className="text-pink hover:text-teal"
                >
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/phoenix-nicholson/"
                  className="text-pink hover:text-teal"
                >
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
