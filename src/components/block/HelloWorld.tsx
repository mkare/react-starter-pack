import React from "react";
import Button from "@components/base/Button";

const HelloWorld: React.FC = () => {
  return (
    <>
      <section>
        <div className="py-3 px-5 flex justify-center gap-3">
          <Button variant="primary">Hello World</Button>

          <Button variant="primary" outline>
            Outline Button
          </Button>

          <Button variant="secondary">Hello World</Button>

          <Button variant="secondary" outline>
            Outline Button
          </Button>

          <Button variant="danger">Hello World</Button>

          <Button variant="danger" outline>
            Outline Button
          </Button>
        </div>

        <div className="px-5 pb-3 flex justify-center gap-3">
          <Button variant="dark">Hello World</Button>

          <Button variant="dark" outline>
            Outline Button
          </Button>

          <Button variant="light">Hello World</Button>

          <Button variant="link">Link Button</Button>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center flex-wrap">
        <h1 className="font-bold text-xl py-3">Color Variations</h1>
        <h2>Primary</h2>
        <div className="flex">
          <div className="bg-primary-50 p-4"></div>
          <div className="bg-primary-100 p-4"></div>
          <div className="bg-primary-200 p-4"></div>
          <div className="bg-primary-300 p-4"></div>
          <div className="bg-primary-400 p-4"></div>
          <div className="bg-primary-500 p-4"></div>
          <div className="bg-primary-600 p-4"></div>
          <div className="bg-primary-700 p-4"></div>
          <div className="bg-primary-800 p-4"></div>
          <div className="bg-primary-900 p-4"></div>
        </div>

        <h2>Secondary</h2>
        <div className="flex">
          <div className="bg-secondary-50 p-4"></div>
          <div className="bg-secondary-100 p-4"></div>
          <div className="bg-secondary-200 p-4"></div>
          <div className="bg-secondary-300 p-4"></div>
          <div className="bg-secondary-400 p-4"></div>
          <div className="bg-secondary-500 p-4"></div>
          <div className="bg-secondary-600 p-4"></div>
          <div className="bg-secondary-700 p-4"></div>
          <div className="bg-secondary-800 p-4"></div>
          <div className="bg-secondary-900 p-4"></div>
        </div>

        <h2>Danger</h2>
        <div className="flex">
          <div className="bg-danger-50 p-4"></div>
          <div className="bg-danger-100 p-4"></div>
          <div className="bg-danger-200 p-4"></div>
          <div className="bg-danger-300 p-4"></div>
          <div className="bg-danger-400 p-4"></div>
          <div className="bg-danger-500 p-4"></div>
          <div className="bg-danger-600 p-4"></div>
          <div className="bg-danger-700 p-4"></div>
          <div className="bg-danger-800 p-4"></div>
          <div className="bg-danger-900 p-4"></div>
        </div>

        <h2>Warning</h2>
        <div className="flex">
          <div className="bg-warning-50 p-4"></div>
          <div className="bg-warning-100 p-4"></div>
          <div className="bg-warning-200 p-4"></div>
          <div className="bg-warning-300 p-4"></div>
          <div className="bg-warning-400 p-4"></div>
          <div className="bg-warning-500 p-4"></div>
          <div className="bg-warning-600 p-4"></div>
          <div className="bg-warning-700 p-4"></div>
          <div className="bg-warning-800 p-4"></div>
          <div className="bg-warning-900 p-4"></div>
        </div>

        <h2>Success</h2>
        <div className="flex">
          <div className="bg-success-50 p-4"></div>
          <div className="bg-success-100 p-4"></div>
          <div className="bg-success-200 p-4"></div>
          <div className="bg-success-300 p-4"></div>
          <div className="bg-success-400 p-4"></div>
          <div className="bg-success-500 p-4"></div>
          <div className="bg-success-600 p-4"></div>
          <div className="bg-success-700 p-4"></div>
          <div className="bg-success-800 p-4"></div>
          <div className="bg-success-900 p-4"></div>
        </div>

        <h2>Info</h2>
        <div className="flex">
          <div className="bg-info-50 p-4"></div>
          <div className="bg-info-100 p-4"></div>
          <div className="bg-info-200 p-4"></div>
          <div className="bg-info-300 p-4"></div>
          <div className="bg-info-400 p-4"></div>
          <div className="bg-info-500 p-4"></div>
          <div className="bg-info-600 p-4"></div>
          <div className="bg-info-700 p-4"></div>
          <div className="bg-info-800 p-4"></div>
          <div className="bg-info-900 p-4"></div>
        </div>

        <h2>Dark</h2>
        <div className="flex">
          <div className="bg-dark-50 p-4"></div>
          <div className="bg-dark-100 p-4"></div>
          <div className="bg-dark-200 p-4"></div>
          <div className="bg-dark-300 p-4"></div>
          <div className="bg-dark-400 p-4"></div>
          <div className="bg-dark-500 p-4"></div>
          <div className="bg-dark-600 p-4"></div>
          <div className="bg-dark-700 p-4"></div>
          <div className="bg-dark-800 p-4"></div>
          <div className="bg-dark-900 p-4"></div>
        </div>

        <h2>Light</h2>
        <div className="flex">
          <div className="bg-light-50 p-4"></div>
          <div className="bg-light-100 p-4"></div>
          <div className="bg-light-200 p-4"></div>
          <div className="bg-light-300 p-4"></div>
          <div className="bg-light-400 p-4"></div>
          <div className="bg-light-500 p-4"></div>
          <div className="bg-light-600 p-4"></div>
          <div className="bg-light-700 p-4"></div>
          <div className="bg-light-800 p-4"></div>
          <div className="bg-light-900 p-4"></div>
        </div>
      </section>
    </>
  );
};

export default HelloWorld;
