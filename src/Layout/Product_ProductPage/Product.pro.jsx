import React from 'react'
import ProductList from "../../components/layout component/ProductList.component.jsx";
import { Link } from 'react-router-dom'

function Productpro() {
  return (
    <section className="h-auto w-full py-5 flex relative z-50 flex-col items-center justify-center ">
      <div
        id="center-product-box"
        className="w-full ds:w-[90%] h-full flex flex-col px-7"
      >
        {/* 1st box */}

        <div className="w-full flex items-center gap-3 justify-between">
          <div className="py-5 ml-5 min-w-auto flex items-center gap-3">
            <h1 className="text-white text-lg w-fit">Business Websites</h1>
          </div>
          <div className="hidden md:block flex-grow h-[1px] bg-[#ffffff5c]"></div>
        </div>

        {/*//*1st product box */}


        {/*//*1st product box end */}
      </div>
    </section>
  );
}

export default Productpro
