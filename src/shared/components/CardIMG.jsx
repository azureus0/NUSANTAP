import React from 'react'

function CardIMG({
  src,
  alt,
  tanggal,
  title,
  text,
  className,
  imgClassName,
  tanggalClassName,
  titleClassName,
  textClassName
}) {
  return (
    <div className={`bg-white font-DMsans rounded-[12px] overflow-hidden shadow-md ${className}`}>
      {/* Gambar */}
      <img
        className={`object-cover ${imgClassName}`}
        src={src}
        alt={alt || "Card image"}
      />

      {/* Body */}
      <div className="p-4">
        {tanggal && (
          <h5 className={` mb-2 ${tanggalClassName}`}>
            {tanggal}
          </h5>
        )}
        {title && (
          <h5 className={`font-semibold mb-2 ${titleClassName}`}>
            {title}
          </h5>
        )}
        {text && (
          <p className={`text-gray-700 ${textClassName}`}>
            {text}
          </p>
        )}
      </div>
    </div>
  )
}

export default CardIMG
