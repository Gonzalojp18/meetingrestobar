import React from 'react'
import './CategoryCoffe.css'

const CategoryCoffe = ({ category, items }) => {
    return (
        <section>
                <h2 className="text-3xl font-semibold py-8">{category}</h2>
            <div className="mt-0 grid gap-2 sm:grid-cols-4 lg:grid-cols-6">
                {items.map((item) => (
                    <div key={item.id} className="p-4 flex box-coffe box-items">
                        <h3 className="text-xl font-bold mb-2 entrada">{item.name}</h3>
                        <p className="text-amber-600 font-semibold  mb-2">{item.description}</p>
                        <p className="text-amber-800 font-extrabold">${item.price.toFixed(3)}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CategoryCoffe