import React from "react";

function Features() {
  return (
    <div>
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Title */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold md:text-5xl">
              Discover the Ultimate Quiz Experience
            </h2>
            <p className="mb-8 mt-4 max-w-xl text-base text-gray-500 md:mb-12 md:text-lg lg:mb-16">
              Quizard offers a range of features to enhance your quiz
              experience.
            </p>
          </div>
          {/* Features Content */}
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
            {/* Features Item */}
            <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="inline-block h-16 w-16 object-cover rounded-full "
              />
              <h3 className="text-xl font-semibold">Support</h3>
              <p className="text-sm text-gray-500">
                Get 24/7 support to help you with any quiz-related issues or
                questions.
              </p>
            </div>
            {/* Features Item */}
            <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="inline-block h-16 w-16 object-cover rounded-full "
              />
              <h3 className="text-xl font-semibold">Organise</h3>
              <p className="text-sm text-gray-500">
                Organise your quizzes and track your progress with ease.
              </p>
            </div>
            {/* Features Item */}
            <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="inline-block h-16 w-16 object-cover rounded-full "
              />
              <h3 className="text-xl font-semibold">Flexibility</h3>
              <p className="text-sm text-gray-500">
                Enjoy the flexibility to take quizzes at your own pace and time.
              </p>
            </div>
            {/* Features Item */}
            <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="inline-block h-16 w-16 object-cover rounded-full "
              />
              <h3 className="text-xl font-semibold">Speed</h3>
              <p className="text-sm text-gray-500">
                Take quizzes quickly and efficiently with our fast-loading
                platform.
              </p>
            </div>
            {/* Features Item */}
            <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="inline-block h-16 w-16 object-cover rounded-full "
              />
              <h3 className="text-xl font-semibold">Quality</h3>
              <p className="text-sm text-gray-500">
                Experience high-quality quizzes with accurate and reliable
                content.
              </p>
            </div>
            {/* Features Item */}
            <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="inline-block h-16 w-16 object-cover rounded-full "
              />
              <h3 className="text-xl font-semibold">Resource</h3>
              <p className="text-sm text-gray-500">
                Access a wide range of quizzes and resources to test your
                knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
